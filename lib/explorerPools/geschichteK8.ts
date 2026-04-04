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

// ─── ISLAND 1: DER ERSTE WELTKRIEG ──────────────────────────────────────────
const I1: IslandSpec = {
  id: "i1",
  title: L("Erster Weltkrieg"),
  topics: [
    {
      id: "attentat",
      title: L("Attentat von Sarajevo"),
      hint1: L("Am 28. Juni 1914 wurde Franz Ferdinand ermordet."),
      hint2: L("Dieses Ereignis war der Auslöser des Krieges."),
      svg: { type: "icon-grid", items: [{ emoji: "🔫", label: "Schuss" }, { emoji: "📅", label: "28. Juni" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Opfer"), right: L("Franz Ferdinand") }, { left: L("Ort"), right: L("Sarajevo") }] },
      quiz: { question: L("Wer wurde in Sarajevo ermordet?"), choices: [L("Franz Ferdinand"), L("Wilhelm II."), L("Bismarck"), L("Hitler")], answer: L("Franz Ferdinand") }
    },
    {
      id: "grabenkrieg",
      title: L("Grabenkrieg"),
      hint1: L("Soldaten lebten monatelang in Schützengräben."),
      hint2: L("Es gab kaum Geländegewinne, nur viele Tote."),
      svg: { type: "text-bubbles", items: [{ text: "Angriff → Verlust", color: "#fff", bg: "#3b82f6" }, { text: "Abwehr → Graben", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "gap-fill", text: L("An der __ erstarrte die Front."), gaps: [{ index: 0, options: ["Westfront", "Ostfront"], correct: 0 }] },
      quiz: { question: L("Was ist typisch für den Ersten Weltkrieg?"), choices: [L("Grabenkrieg"), L("Blitzkrieg"), L("Ritterkampf"), L("Atomkrieg")], answer: L("Grabenkrieg") }
    },
    {
      id: "giftgas",
      title: L("Giftgas"),
      hint1: L("Erstmals wurden chemische Waffen eingesetzt."),
      hint2: L("Es verursachte schreckliche Qualen."),
      svg: { type: "text-bubbles", items: [{ text: "Gas", color: "#fff", bg: "#4ade80" }, { text: "Qual", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "word-order", words: [L("Einsatz"), L("von"), L("chemischen"), L("Waffen")], instruction: L("Was war neu?") },
      quiz: { question: L("Welche neue Waffe wurde eingesetzt?"), choices: [L("Giftgas"), L("Armbrust"), L("Drohnen"), L("Laser")], answer: L("Giftgas") }
    },
    {
      id: "materialschlacht",
      title: L("Materialschlacht"),
      hint1: L("Enormer Einsatz von Waffen und Munition."),
      hint2: L("Die Industrie arbeitete nur für den Krieg."),
      svg: { type: "icon-grid", items: [{ emoji: "💣", label: "Bomben" }, { emoji: "🏭", label: "Fabrik" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "w", label: L("Waffen") }], items: [{ text: L("Panzer"), bucketId: "w" }, { text: L("MG"), bucketId: "w" }] },
      quiz: { question: L("Was bedeutet Materialschlacht?"), choices: [L("Massiver Waffeneinsatz"), L("Tausch von Waren"), L("Sportwettkampf"), L("Bau von Häusern")], answer: L("Massiver Waffeneinsatz") }
    },
    {
      id: "hindenburg",
      title: L("Paul von Hindenburg"),
      hint1: L("Deutscher Generalfeldmarschall."),
      hint2: L("Späterer Reichspräsident."),
      svg: { type: "word-display", word: "Generalfeldmarschall", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Hindenburg wurde durch den Sieg bei Tannenberg berühmt."), instruction: L("Wichtiger Name!") },
      quiz: { question: L("Wer war ein bekannter deutscher General?"), choices: [L("Hindenburg"), L("Napoleon"), L("Washington"), L("Caesar")], answer: L("Hindenburg") }
    },
    {
      id: "versaillervertrag",
      title: L("Versailler Vertrag"),
      hint1: L("Friedensvertrag von 1919."),
      hint2: L("Harte Bedingungen für Deutschland."),
      svg: { type: "text-bubbles", items: [{ text: "Schuld → Deutschland", color: "#fff", bg: "#3b82f6" }, { text: "Folge → Reparationen", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 1919, instruction: L("In welchem Jahr wurde der Vertrag unterzeichnet?") },
      quiz: { question: L("Wie hieß the Friedensvertrag nach 1918?"), choices: [L("Versailler Vertrag"), L("Wiener Kongress"), L("Maastricht"), L("Westfälischer Friede")], answer: L("Versailler Vertrag") }
    },
    {
      id: "reparationen",
      title: L("Reparationen"),
      hint1: L("Entschädigungszahlungen Deutschlands."),
      hint2: L("Belastung für die neue Demokratie."),
      svg: { type: "text-bubbles", items: [{ text: "Geld", color: "#fff", bg: "#fbbf24" }, { text: "Schuld", color: "#fff", bg: "#475569" }] },
      interactive: { type: "sentence-build", words: [L("Deutschland"), L("musste"), L("hohe"), L("Summen"), L("bezahlen")], instruction: L("Was sind Reparationen?") },
      quiz: { question: L("Was musste Deutschland laut Vertrag leisten?"), choices: [L("Reparationen"), L("Keine Steuern"), L("Neue Schlösser"), L("Urlaub geben")], answer: L("Reparationen") }
    },
    {
      id: "novemberrevolution",
      title: L("Novemberrevolution"),
      hint1: L("1918 stürzte das Kaiserreich."),
      hint2: L("Deutschland wurde eine Republik."),
      svg: { type: "icon-grid", items: [{ emoji: "🚩", label: "Aufstand" }, { emoji: "🏙️", label: "Berlin" }] },
      interactive: { type: "gap-fill", text: L("Kaiser __ dankte ab."), gaps: [{ index: 0, options: ["Wilhelm II.", "Friedrich"], correct: 0 }] },
      quiz: { question: L("Was geschah im November 1918?"), choices: [L("Revolution"), L("Kaiserkrönung"), L("Olympiade"), L("Mauerbau")], answer: L("Revolution") }
    },
    {
      id: "u_boot",
      title: L("U-Boot-Krieg"),
      hint1: L("Deutschland setzte Unterseeboote ein."),
      hint2: L("Grund für den Kriegseintritt der USA."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "U-Boot" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("U-Boot"), right: L("Seekrieg") }, { left: L("USA"), right: L("Kriegseintritt") }] },
      quiz: { question: L("Welches Land trat wegen des U-Boot-Kriegs ein?"), choices: [L("USA"), L("Russland"), L("China"), L("Japan")], answer: L("USA") }
    },
    {
      id: "tannenberg",
      title: L("Schlacht bei Tannenberg"),
      hint1: L("Großer Sieg im Osten gegen Russland."),
      hint2: L("Hindenburg und Ludendorff wurden Helden."),
      svg: { type: "text-bubbles", items: [{ text: "Osten", color: "#fff", bg: "#1e3a8a" }, { text: "Sieg", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ostfront"), items: [L("Tannenberg"), L("Masuren")] }] },
      quiz: { question: L("Gegen wen siegte Deutschland bei Tannenberg?"), choices: [L("Russland"), L("Frankreich"), L("England"), L("Italien")], answer: L("Russland") }
    },
    {
      id: "frauenwahlrecht",
      title: L("Frauenwahlrecht"),
      hint1: L("Nach dem Krieg erhielten Frauen das Wahlrecht."),
      hint2: L("Erstmals 1919 in Deutschland."),
      svg: { type: "word-display", word: "Wahlrecht", color: "#db2777" },
      interactive: { type: "lang-mcq", question: L("Wann durften Frauen erstmals wählen?"), choices: [L("1919"), L("1871"), L("1945")], answer: L("1919") },
      quiz: { question: L("Wann erhielten Frauen in Deutschland das Wahlrecht?"), choices: [L("1919"), L("1871"), L("1945"), L("1933")], answer: L("1919") }
    },
    {
      id: "hunger_ww1",
      title: L("Steckrübenwinter"),
      hint1: L("Großer Hunger in der Heimat."),
      hint2: L("Wegen der britischen Seeblockade."),
      svg: { type: "icon-grid", items: [{ emoji: "🥔", label: "Hunger" }, { emoji: "❄️", label: "Winter" }] },
      interactive: { type: "gap-fill", text: L("Es gab fast nur noch __."), gaps: [{ index: 0, options: [L("Steckrüben"), L("Fleisch")], correct: 0 }] },
      quiz: { question: L("Warum hungerte das Volk?"), choices: [L("Seeblockade"), L("Zu viel Regen"), L("Keine Bauern"), L("Nichts")], answer: L("Seeblockade") }
    },
    {
      id: "panzer_ww1",
      title: L("Tanks"),
      hint1: L("Erste gepanzerte Fahrzeuge."),
      hint2: L("Besonders von England eingesetzt."),
      svg: { type: "text-bubbles", items: [{ text: "Stahl → Panzer", color: "#fff", bg: "#3b82f6" }, { text: "Durchbruch → Ziel", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Fronten (Zweifrontenkrieg) gab es?") },
      quiz: { question: L("Wer setzte Panzer zuerst massiv ein?"), choices: [L("England"), L("Preußen"), L("Russland"), L("China")], answer: L("England") }
    },
    {
      id: "dolchstosz",
      title: L("Dolchstoßlegende"),
      hint1: L("Lüge über das Ende des Krieges."),
      hint2: L("Behauptung, das Heer sei unbesiegt geblieben."),
      svg: { type: "text-bubbles", items: [{ text: "Lüge", color: "#fff", bg: "#dc2626" }, { text: "Verrat", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "sentence-build", words: [L("Das"), L("Heer"), L("wurde"), L("von"), L("hinten"), L("erstochen")], instruction: L("Was war der Kern?") },
      quiz: { question: L("Was besagte die Dolchstoßlegende?"), choices: [L("Verrat in der Heimat"), L("Sieg an der Front"), L("Frieden mit allen"), L("Nichts")], answer: L("Verrat in der Heimat") }
    },
    {
      id: "weimar_start",
      title: L("Geburt von Weimar"),
      hint1: L("Nationalversammlung in Weimar."),
      hint2: L("Flucht vor den Unruhen in Berlin."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Theater" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Städte"), items: [L("Weimar"), L("Berlin")] }] },
      quiz: { question: L("Wo wurde die Verfassung beraten?"), choices: [L("Weimar"), L("München"), L("Hamburg"), L("Köln")], answer: L("Weimar") }
    }
  ]
};

// ─── ISLAND 2: DIE WEIMARER REPUBLIK ────────────────────────────────────────
const I2: IslandSpec = {
  id: "i2",
  title: L("Weimarer Republik"),
  topics: [
    {
      id: "hyperinflation",
      title: L("Hyperinflation 1923"),
      hint1: L("Geld verlor stündlich an Wert."),
      hint2: L("Menschen brauchten Schubkarren voll Geld."),
      svg: { type: "icon-grid", items: [{ emoji: "💸", label: "Wertlos" }, { emoji: "🍞", label: "Teuer" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Brot"), right: L("Milliarden") }, { left: L("Geld"), right: L("Papier") }] },
      quiz: { question: L("In welchem Jahr war die Hyperinflation?"), choices: [L("1923"), L("1914"), L("1933"), L("1945")], answer: L("1923") }
    },
    {
      id: "goldene20er",
      title: L("Goldene Zwanziger"),
      hint1: L("Kulturelle Blüte und Aufschwung."),
      hint2: L("Kino, Jazz und neue Mode."),
      svg: { type: "text-bubbles", items: [{ text: "Jazz", color: "#fff", bg: "#8b5cf6" }, { text: "Kino", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "gap-fill", text: L("Berlin war eine __."), gaps: [{ index: 0, options: ["Weltstadt", "Kleinstadt"], correct: 0 }] },
      quiz: { question: L("Was ist typisch für die Goldenen 20er?"), choices: [L("Aufschwung der Kultur"), L("Dauerhafter Hunger"), L("Nur Krieg"), L("Keine Musik")], answer: L("Aufschwung der Kultur") }
    },
    {
      id: "weltwirtschaftskrise",
      title: L("Börsenkrach 1929"),
      hint1: L("Schwarzer Freitag in New York."),
      hint2: L("Folge: Massenarbeitslosigkeit weltweit."),
      svg: { type: "text-bubbles", items: [{ text: "Aktien → Sturz", color: "#fff", bg: "#3b82f6" }, { text: "Arbeit → Verlust", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Aktien"), L("verlieren"), L("an"), L("Wert")], instruction: L("Was geschah?") },
      quiz: { question: L("Wo begann die Weltwirtschaftskrise?"), choices: [L("New York"), L("Berlin"), L("London"), L("Paris")], answer: L("New York") }
    },
    {
      id: "stresemann",
      title: L("Gustav Stresemann"),
      hint1: L("Außenminister und Versöhner."),
      hint2: L("Friedensnobelpreis 1926."),
      svg: { type: "word-display", word: "Frieden", color: "#16a34a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Nobelpreis"), right: L("1926") }, { left: L("Locarno"), right: L("Vertrag") }] },
      quiz: { question: L("Was war Stresemanns Ziel?"), choices: [L("Verständigung"), L("Neuer Krieg"), L("Diktatur"), L("Keine Steuern")], answer: L("Verständigung") }
    },
    {
      id: "hitlerputsch",
      title: L("Hitler-Putsch 1923"),
      hint1: L("Versuchter Umsturz in München."),
      hint2: L("Hitler wurde verhaftet."),
      svg: { type: "icon-grid", items: [{ emoji: "🚫", label: "Stopp" }, { emoji: "🍺", label: "München" }] },
      interactive: { type: "gap-fill", text: L("Der Putsch in __ scheiterte."), gaps: [{ index: 0, options: ["München", "Berlin"], correct: 0 }] },
      quiz: { question: L("Wo fand der Hitler-Putsch statt?"), choices: [L("München"), L("Berlin"), L("Hamburg"), L("Wien")], answer: L("München") }
    },
    {
      id: "radikalisierung",
      title: L("Radikalisierung"),
      hint1: L("Zunahme von Gewalt auf den Straßen."),
      hint2: L("Extreme Parteien bekämpften sich."),
      svg: { type: "text-bubbles", items: [{ text: "KPD", color: "#fff", bg: "#dc2626" }, { text: "NSDAP", color: "#fff", bg: "#475569" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "ext", label: L("Extrem") }], items: [{ text: L("Rechts"), bucketId: "ext" }, { text: L("Links"), bucketId: "ext" }] },
      quiz: { question: L("Was schwächte die Republik am Ende?"), choices: [L("Radikale Parteien"), L("Zu viel Einigkeit"), L("Wenig Sport"), L("Gutes Wetter")], answer: L("Radikale Parteien") }
    },
    {
      id: "bauhaus",
      title: L("Das Bauhaus"),
      hint1: L("Berühmte Schule für Kunst und Bau."),
      hint2: L("Form folgt Funktion."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Design" }] },
      interactive: { type: "highlight-text", text: L("Das Bauhaus revolutionierte Architektur und Design."), instruction: L("Was war es?") },
      quiz: { question: L("Was ist das Bauhaus?"), choices: [L("Design-Schule"), L("Ein Baumarkt"), L("Ein Bahnhof"), L("Eine Kirche")], answer: L("Design-Schule") }
    },
    {
      id: "ebert",
      title: L("Friedrich Ebert"),
      hint1: L("Erster Reichspräsident."),
      hint2: L("Ein Sozialdemokrat."),
      svg: { type: "word-display", word: "Präsident", color: "#1e3a8a" },
      interactive: { type: "sentence-build", words: [L("Ebert"), L("wahr"), L("ein"), L("Mann"), L("der"), L("Mitte")], instruction: L("Wer war er?") },
      quiz: { question: L("Welcher Partei gehörte Ebert an?"), choices: [L("SPD"), L("NSDAP"), L("Zentrum"), L("KPD")], answer: L("SPD") }
    },
    {
      id: "weimarerverfassung",
      title: L("Die Verfassung"),
      hint1: L("Sehr modern, aber auch schwach."),
      hint2: L("Große Macht des Reichspräsidenten."),
      svg: { type: "text-bubbles", items: [{ text: "Volk → Wählt", color: "#fff", bg: "#3b82f6" }, { text: "Präsident → Macht", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 48, instruction: L("Welcher Artikel (Notverordnung) war gefährlich?") },
      quiz: { question: L("Wer hatte laut Verfassung sehr viel Macht?"), choices: [L("Reichspräsident"), L("Bürgermeister"), L("Pfarrer"), L("Niemand")], answer: L("Reichspräsident") }
    },
    {
      id: "arbeitslosigkeit",
      title: L("Massennot"),
      hint1: L("Über 6 Millionen Arbeitslose 1932."),
      hint2: L("Nährboden für die Nazis."),
      svg: { type: "icon-grid", items: [{ emoji: "📉", label: "Krise" }, { emoji: "🚶", label: "Schlange" }] },
      interactive: { type: "gap-fill", text: L("Millionen hatten keine __."), gaps: [{ index: 0, options: ["Arbeit", "Handys"], correct: 0 }] },
      quiz: { question: L("Wie viele Arbeitslose gab es ca. 1932?"), choices: [L("6 Millionen"), L("1 Million"), L("100.000"), L("Keine")], answer: L("6 Millionen") }
    },
    {
      id: "vergnuegen",
      title: L("Amüsiermeile Berlin"),
      hint1: L("Tanzlokale und Revues."),
      hint2: L("Verdrängung der Sorgen."),
      svg: { type: "text-bubbles", items: [{ text: "Tanz", color: "#fff", bg: "#db2777" }, { text: "Nacht", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "lang-mcq", question: L("Wo war das Zentrum des Nachtlebens?"), choices: [L("Berlin"), L("Bonn"), L("Weimar")], answer: L("Berlin") },
      quiz: { question: L("Wo war das kulturelle Zentrum der 1920er?"), choices: [L("Berlin"), L("Bonn"), L("Weimar"), L("München")], answer: L("Berlin") }
    },
    {
      id: "ruhrbesetzung",
      title: L("Ruhrkampf 1923"),
      hint1: L("Frankreich besetzt das Ruhrgebiet."),
      hint2: L("Passiver Widerstand der Deutschen."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Kohle" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Frankreich"), right: L("Besatzung") }, { left: L("Ruhr"), right: L("Kohle") }] },
      quiz: { question: L("Welches Gebiet wurde 1923 besetzt?"), choices: [L("Ruhrgebiet"), L("Bayern"), L("Sachsen"), L("Berlin")], answer: L("Ruhrgebiet") }
    },
    {
      id: "dolchstosz_weimar",
      title: L("Belastung"),
      hint1: L("Rechte Propaganda gegen Demokraten."),
      hint2: L("Novemberverbrecher' als Schimpfwort."),
      svg: { type: "text-bubbles", items: [{ text: "Hass", color: "#fff", bg: "#991b1b" }, { text: "Wut", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Gegner"), items: [L("Nationalisten"), L("Monarchisten")] }] },
      quiz: { question: L("Wie nannten Feinde die Demokraten?"), choices: [L("Novemberverbrecher"), L("Helden"), L("Könige"), L("Sportler")], answer: L("Novemberverbrecher") }
    },
    {
      id: "frauenbild",
      title: L("Neue Frau"),
      hint1: L("Kurze Haare, Berufstätigkeit."),
      hint2: L("Mehr Unabhängigkeit."),
      svg: { type: "icon-grid", items: [{ emoji: "👩‍💼", label: "Beruf" }, { emoji: "✂️", label: "Bubikopf" }] },
      interactive: { type: "sentence-build", words: [L("Frauen"), L("wurden"), L("selbstbewusster")], instruction: L("Was änderte sich?") },
      quiz: { question: L("Welche Frisur war modern?"), choices: [L("Bubikopf"), L("Lange Zöpfe"), L("Perücke"), L("Glatze")], answer: L("Bubikopf") }
    },
    {
      id: "hindenburg_praesident",
      title: L("Paul von Hindenburg"),
      hint1: L("Reichspräsident ab 1925."),
      hint2: L("Eigentlich ein Anhänger des Kaisers."),
      svg: { type: "word-display", word: "Ersatzkaiser", color: "#475569" },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele (Ebert/Hindenburg) große Präsidenten?") },
      quiz: { question: L("Wer wurde 1925 Präsident?"), choices: [L("Hindenburg"), L("Hitler"), L("Stresemann"), L("Adenauer")], answer: L("Hindenburg") }
    }
  ]
};

// ─── ISLAND 3: NATIONALSOZIALISMUS & MACHTERGREIFUNG ───────────────────────
const I3: IslandSpec = {
  id: "i3",
  title: L("NS-Zeit"),
  topics: [
    {
      id: "machtergreifung",
      title: L("30. Januar 1933"),
      hint1: L("Hitler wird Reichskanzler."),
      hint2: L("Beginn der Zerstörung der Demokratie."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Amt" }, { emoji: "📅", label: "30. Jan" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hitler"), right: L("Kanzler") }, { left: L("Hindenburg"), right: L("Präsident") }] },
      quiz: { question: L("Wann wurde Hitler Kanzler?"), choices: [L("30. Januar 1933"), L("1. Mai 1945"), L("9. November 1918"), L("1. September 1939")], answer: L("30. Januar 1933") }
    },
    {
      id: "reichstagsbrand",
      title: L("Reichstagsbrand"),
      hint1: L("Das Parlamentsgebäude brannte."),
      hint2: L("Vorwand für die Verfolgung von Gegnern."),
      svg: { type: "text-bubbles", items: [{ text: "Feuer", color: "#fff", bg: "#ef4444" }, { text: "Terror", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Es war im __ 1933."), gaps: [{ index: 0, options: ["Februar", "August"], correct: 0 }] },
      quiz: { question: L("Was diente als Vorwand für Notverordnungen?"), choices: [L("Reichstagsbrand"), L("Ein Streik"), L("Ein Sportfest"), L("Ein Regen")], answer: L("Reichstagsbrand") }
    },
    {
      id: "ermaechtigungsgesetz",
      title: L("Ermächtigungsgesetz"),
      hint1: L("Selbstentachtung des Parlaments."),
      hint2: L("Hitler konnte nun ohne Parlament Gesetze erlassen."),
      svg: { type: "text-bubbles", items: [{ text: "Gesetz → Hitler", color: "#fff", bg: "#3b82f6" }, { text: "Kontrolle → Keine", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Ende"), L("der"), L("Demokratie")], instruction: L("Was bedeutete das Gesetz?") },
      quiz: { question: L("Was bewirkte das Ermächtigungsgesetz?"), choices: [L("Diktatur"), L("Mehr Freiheit"), L("Wahlen alle Wochen"), L("Keine Änderung")], answer: L("Diktatur") }
    },
    {
      id: "gleichschaltung",
      title: L("Gleichschaltung"),
      hint1: L("Kontrolle über alle Lebensbereiche."),
      hint2: L("Parteien und Gewerkschaften wurden verboten."),
      svg: { type: "icon-grid", items: [{ emoji: "🚫", label: "Verbot" }, { emoji: "⚙️", label: "Zwang" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Partei"), right: L("NSDAP") }, { left: L("Alleine"), right: L("Macht") }] },
      quiz: { question: L("Welche Partei war als einzige erlaubt?"), choices: [L("NSDAP"), L("SPD"), L("KPD"), L("Zentrum")], answer: L("NSDAP") }
    },
    {
      id: "propaganda",
      title: L("Propaganda"),
      hint1: L("Gezielte Beeinflussung der Menschen."),
      hint2: L("Joseph Goebbels als Minister."),
      svg: { type: "text-bubbles", items: [{ text: "Radio", color: "#fff", bg: "#fbbf24" }, { text: "Lüge", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "highlight-text", text: L("Goebbels kontrollierte Presse, Funk und Film."), instruction: L("Wer war das?") },
      quiz: { question: L("Wer war Propagandaminister?"), choices: [L("Goebbels"), L("Hindenburg"), L("Ebert"), L("Adenauer")], answer: L("Goebbels") }
    },
    {
      id: "antisemitismus",
      title: L("Hass auf Juden"),
      hint1: L("Kernpunkt der NS-Ideologie."),
      hint2: L("Ausgrenzung und Entrechtung."),
      svg: { type: "word-display", word: "Rassenhass", color: "#000" },
      interactive: { type: "block-drag", blocks: [{ label: L("Ideologie"), items: [L("Rassismus"), L("Antisemitismus")] }] },
      quiz: { question: L("Was war ein Hauptmerkmal der NS-Lehre?"), choices: [L("Antisemitismus"), L("Gleichheit"), L("Frieden"), L("Demokratie")], answer: L("Antisemitismus") }
    },
    {
      id: "konzentrationslager",
      title: L("Die Lager"),
      hint1: L("Orte der Haft und Folter."),
      hint2: L("Dachau war das erste KZ 1933."),
      svg: { type: "text-bubbles", items: [{ text: "Gegner → Haft", color: "#fff", bg: "#3b82f6" }, { text: "Gewalt → Terror", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 1933, instruction: L("In welchem Jahr wurde Dachau eröffnet?") },
      quiz: { question: L("Wo wurden Gegner eingesperrt?"), choices: [L("Konzentrationslager"), L("Hotels"), L("Schulen"), L("Sportvereine")], answer: L("Konzentrationslager") }
    },
    {
      id: "hitlerjugend",
      title: L("HJ und BDM"),
      hint1: L("Jugendorganisationen der Nazis."),
      hint2: L("Erziehung zu Gehorsam und Krieg."),
      svg: { type: "icon-grid", items: [{ emoji: "👦", label: "HJ" }, { emoji: "👧", label: "BDM" }] },
      interactive: { type: "gap-fill", text: L("Jugend sollte dem __ folgen."), gaps: [{ index: 0, options: [L("Führer"), L("Vater")], correct: 0 }] },
      quiz: { question: L("Wie hieß the Organisation für Jungen?"), choices: [L("Hitlerjugend"), L("Pfadfinder"), L("Sportclub"), L("Nichts")], answer: L("Hitlerjugend") }
    },
    {
      id: "nuernbergergesetze",
      title: L("Rassengesetze"),
      hint1: L("1935 wurden Juden entrechtet."),
      hint2: L("Verbot von Ehen zwischen Juden und Nichtjuden."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Gesetz" }] },
      interactive: { type: "sentence-build", words: [L("Juden"), L("verloren"), L("ihre"), L("Rechte")], instruction: L("Was geschah 1935?") },
      quiz: { question: L("Wo wurden die Rassengesetze verkündet?"), choices: [L("Nürnberg"), L("Berlin"), L("München"), L("Wien")], answer: L("Nürnberg") }
    },
    {
      id: "volksgemeinschaft",
      title: L("Volksgemeinschaft"),
      hint1: L("Einheit der 'Arier'."),
      hint2: L("Ausschluss aller anderen."),
      svg: { type: "text-bubbles", items: [{ text: "Wir", color: "#fff", bg: "#16a34a" }, { text: "Nicht-Ihr", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "lang-mcq", question: L("Wer durfte dazugehören?"), choices: [L("Nur 'Arier'"), L("Alle Menschen"), L("Nur Reiche")], answer: L("Nur 'Arier'") },
      quiz: { question: L("Wer durfte laut NS-Ideologie dazugehören?"), choices: [L("Nur 'Arier'"), L("Alle Menschen"), L("Nur Reiche"), L("Niemand")], answer: L("Nur 'Arier'") }
    },
    {
      id: "widerstand_ns",
      title: L("Mutiger Widerstand"),
      hint1: L("Menschen, die sich trauten."),
      hint2: L("Oft mit dem Leben bezahlt."),
      svg: { type: "icon-grid", items: [{ emoji: "🌹", label: "Weiße Rose" }, { emoji: "💣", label: "Stauffenberg" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Weiße Rose"), right: L("Geschwister Scholl") }, { left: L("20. Juli"), right: L("Stauffenberg") }] },
      quiz: { question: L("Wer gehörte zum Widerstand?"), choices: [L("Geschwister Scholl"), L("Goebbels"), L("Himmler"), L("Niemand")], answer: L("Geschwister Scholl") }
    },
    {
      id: "pogromnacht",
      title: L("9. November 1938"),
      hint1: L("Brennende Synagogen."),
      hint2: L("Offene Gewalt gegen Juden."),
      svg: { type: "text-bubbles", items: [{ text: "Glas → Scherben", color: "#fff", bg: "#3b82f6" }, { text: "Gewalt → Staatlich", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "gap-fill", text: L("Man nennt es auch __."), gaps: [{ index: 0, options: ["Kristallnacht", "Friedensnacht"], correct: 0 }] },
      quiz: { question: L("Was geschah in der Pogromnacht?"), choices: [L("Synagogen brannten"), L("König wurde gewählt"), L("Mauer wurde gebaut"), L("Nichts")], answer: L("Synagogen brannten") }
    },
    {
      id: "aufrüstung_ns",
      title: L("Vorbereitung"),
      hint1: L("Heimliche und offene Aufrüstung."),
      hint2: L("Beseitigung der Arbeitslosigkeit durch Rüstung."),
      svg: { type: "text-bubbles", items: [{ text: "Waffen", color: "#fff", bg: "#475569" }, { text: "Heer", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ziele"), items: [L("Krieg"), L("Raum")] }] },
      quiz: { question: L("Wie bekämpfte Hitler die Arbeitslosigkeit?"), choices: [L("Rüstungsindustrie"), L("Urlaubsreisen"), L("Schulbau"), L("Nichts")], answer: L("Rüstungsindustrie") }
    },
    {
      id: "lebensraum",
      title: L("Lebensraum im Osten"),
      hint1: L("Plan zur Eroberung von Gebieten."),
      hint2: L("Besonders in Polen und Russland."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Osten" }] },
      interactive: { type: "word-order", words: [L("Eroberung"), L("von"), L("neuem"), L("Land")], instruction: L("Was war das Ziel?") },
      quiz: { question: L("Wohin wollte Hitler expandieren?"), choices: [L("Nach Osten"), L("Nach Westen"), L("Nach Amerika"), L("Nach Afrika")], answer: L("Nach Osten") }
    },
    {
      id: "ende_demokratie",
      title: L("Abschluss"),
      hint1: L("Der Staat wurde totalitär."),
      hint2: L("Keine Freiheit mehr."),
      svg: { type: "word-display", word: "Diktatur", color: "#000" },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Parteien (Einparteienstaat) gab es?") },
      quiz: { question: L("Was war Deutschland ab 1933?"), choices: [L("Totalitäre Diktatur"), L("Freie Republik"), L("Königreich"), L("Nichts")], answer: L("Totalitäre Diktatur") }
    }
  ]
};

// ─── ISLAND 4: DER ZWEITE WELTKRIEG ─────────────────────────────────────────
const I4: IslandSpec = {
  id: "i4",
  title: L("Zweiter Weltkrieg"),
  topics: [
    {
      id: "ueberfall_polen",
      title: L("Kriegsbeginn"),
      hint1: L("1. September 1939."),
      hint2: L("Einmarsch in Polen ohne Kriegserklärung."),
      svg: { type: "icon-grid", items: [{ emoji: "🇵🇱", label: "Polen" }, { emoji: "📅", label: "1. Sept" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("1. Sept 1939"), right: L("Beginn") }, { left: L("Polen"), right: L("Ziel") }] },
      quiz: { question: L("Wann begann der Zweite Weltkrieg?"), choices: [L("1. September 1939"), L("1. August 1914"), L("30. Januar 1933"), L("8. Mai 1945")], answer: L("1. September 1939") }
    },
    {
      id: "blitzkrieg_ww2",
      title: L("Blitzkrieg"),
      hint1: L("Schnelle Siege gegen Nachbarländer."),
      hint2: L("Zusammenspiel von Panzern und Flugzeugen."),
      svg: { type: "text-bubbles", items: [{ text: "Schnell", color: "#fff", bg: "#fbbf24" }, { text: "Sieg", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Erfolge im __."), gaps: [{ index: 0, options: ["Westen", "Osten"], correct: 0 }] },
      quiz: { question: L("Was war der Blitzkrieg?"), choices: [L("Schneller Angriff"), L("Krieg bei Gewitter"), L("Ein Wetterphänomen"), L("Nichts")], answer: L("Schneller Angriff") }
    },
    {
      id: "stalingrad_ww2",
      title: L("Stalingrad"),
      hint1: L("Entscheidender Wendepunkt 1942/43."),
      hint2: L("Untergang der 6. Armee."),
      svg: { type: "text-bubbles", items: [{ text: "Wende → Niederlage", color: "#fff", bg: "#3b82f6" }, { text: "Ort → Wolga", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Der"), L("Wendepunkt"), L("im"), L("Osten")], instruction: L("Was war Stalingrad?") },
      quiz: { question: L("Welche Schlacht war die Wende?"), choices: [L("Stalingrad"), L("Waterloo"), L("Sedan"), L("Leipzig")], answer: L("Stalingrad") }
    },
    {
      id: "holocaust_ww2",
      title: L("Holocaust"),
      hint1: L("Systematischer Völkermord an Juden."),
      hint2: L("Über 6 Millionen Opfer."),
      svg: { type: "word-display", word: "Shoah", color: "#475569" },
      interactive: { type: "highlight-text", text: L("Auschwitz war das größte Vernichtungslager."), instruction: L("Wo geschah das?") },
      quiz: { question: L("Wie viele Juden wurden ermordet?"), choices: [L("Über 6 Millionen"), L("1 Million"), L("100.000"), L("Keine")], answer: L("Über 6 Millionen") }
    },
    {
      id: "widerstand_scholl",
      title: L("Weiße Rose"),
      hint1: L("Widerstand von Studenten in München."),
      hint2: L("Flugblätter gegen Hitler."),
      svg: { type: "icon-grid", items: [{ emoji: "🌹", label: "Blume" }, { emoji: "📜", label: "Blatt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hans Scholl"), right: L("Bruder") }, { left: L("Sophie Scholl"), right: L("Schwester") }] },
      quiz: { question: L("Wie hieß die Widerstandsgruppe?"), choices: [L("Weiße Rose"), L("Roter Stern"), L("Blauer Enzian"), L("Nichts")], answer: L("Weiße Rose") }
    },
    {
      id: "totalerkrieg",
      title: L("Totaler Krieg"),
      hint1: L("Goebbels Rede 1943."),
      hint2: L("Alle Kraft nur noch für den Sieg."),
      svg: { type: "text-bubbles", items: [{ text: "Alles", color: "#fff", bg: "#991b1b" }, { text: "Sieg", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "gap-fill", text: L("Wollt ihr den __ Krieg?"), gaps: [{ index: 0, options: ["totalen", "kurzen"], correct: 0 }] },
      quiz: { question: L("Wer rief zum totalen Krieg auf?"), choices: [L("Goebbels"), L("Hitler"), L("Stauffenberg"), L("Hindenburg")], answer: L("Goebbels") }
    },
    {
      id: "attentat_juli",
      title: L("20. Juli 1944"),
      hint1: L("Bombenattentat auf Hitler."),
      hint2: L("Claus Schenk Graf von Stauffenberg."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Bombe" }] },
      interactive: { type: "tap-count", count: 20, instruction: L("An welchem Tag im Juli war das Attentat?") },
      quiz: { question: L("Wer führte das Attentat 1944 aus?"), choices: [L("Stauffenberg"), L("Scholl"), L("Adenauer"), L("Brandt")], answer: L("Stauffenberg") }
    },
    {
      id: "dday",
      title: L("D-Day"),
      hint1: L("Landung der Alliierten in der Normandie."),
      hint2: L("6. Juni 1944."),
      svg: { type: "text-bubbles", items: [{ text: "Westen → Landung", color: "#fff", bg: "#3b82f6" }, { text: "Freiheit → Ziel", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Länder"), items: [L("USA"), L("England")] }] },
      quiz: { question: L("Wo landeten die Alliierten 1944?"), choices: [L("Normandie"), L("Berlin"), L("Rom"), L("Madrid")], answer: L("Normandie") }
    },
    {
      id: "allierte",
      title: L("Die Alliierten"),
      hint1: L("Gegner Deutschlands."),
      hint2: L("USA, Sowjetunion, England."),
      svg: { type: "text-bubbles", items: [{ text: "USA", color: "#fff", bg: "#3b82f6" }, { text: "UdSSR", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "lang-mcq", question: L("Wer gehörte nicht zu den Alliierten?"), choices: [L("Japan"), L("USA"), L("England")], answer: L("Japan") },
      quiz: { question: L("Wer gehörte nicht zu den Alliierten?"), choices: [L("Japan"), L("USA"), L("England"), L("UdSSR")], answer: L("Japan") }
    },
    {
      id: "stunde_null",
      title: L("Kriegsende"),
      hint1: L("8. Mai 1945."),
      hint2: L("Bedingungslose Kapitulation."),
      svg: { type: "word-display", word: "Kapitulation", color: "#000" },
      interactive: { type: "gap-fill", text: L("Der Krieg endete im __."), gaps: [{ index: 0, options: ["Mai", "Januar"], correct: 0 }] },
      quiz: { question: L("Wann endete der Krieg in Europa?"), choices: [L("8. Mai 1945"), L("1. September 1939"), L("11. November 1918"), L("3. Oktober 1990")], answer: L("8. Mai 1945") }
    },
    {
      id: "ausbomben",
      title: L("Luftkrieg"),
      hint1: L("Zerstörung deutscher Städte."),
      hint2: L("Dresden, Berlin, Hamburg."),
      svg: { type: "icon-grid", items: [{ emoji: "✈️", label: "Bomber" }, { emoji: "🏚️", label: "Ruine" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bombe"), right: L("Zerstörung") }, { left: L("Bunker"), right: L("Schutz") }] },
      quiz: { question: L("Was passierte mit vielen deutschen Städten?"), choices: [L("Sie wurden zerbombt"), L("Nichts geschah"), L("Sie wurden reicher"), L("Urlaubsorte")], answer: L("Sie wurden zerbombt") }
    },
    {
      id: "flucht_vertreibung",
      title: L("Flucht"),
      hint1: L("Millionen Deutsche flohen aus dem Osten."),
      hint2: L("Verlust der Heimat."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Treck" }] },
      interactive: { type: "sentence-build", words: [L("Millionen"), L("verloren"), L("ihre"), L("Heimat")], instruction: L("Was war die Folge?") },
      quiz: { question: L("Wohin flohen die Menschen?"), choices: [L("Nach Westen"), L("Nach Osten"), L("Nach China"), L("Nach Japan")], answer: L("Nach Westen") }
    },
    {
      id: "nuernberger_prozesse",
      title: L("Nürnberger Prozesse"),
      hint1: L("Gericht gegen Hauptkriegsverbrecher."),
      hint2: L("Gerechtigkeit nach dem Grauen."),
      svg: { type: "text-bubbles", items: [{ text: "Gericht → Urteil", color: "#fff", bg: "#3b82f6" }, { text: "Verbrechen → Strafe", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ort"), items: [L("Nürnberg")] }] },
      quiz: { question: L("Wo wurden die NS-Anführer angeklagt?"), choices: [L("Nürnberg"), L("Berlin"), L("München"), L("Bonn")], answer: L("Nürnberg") }
    },
    {
      id: "hiroshima",
      title: L("Atombombe"),
      hint1: L("Abwurf über Hiroshima und Nagasaki."),
      hint2: L("Ende des Krieges im Pazifik."),
      svg: { type: "text-bubbles", items: [{ text: "Atom", color: "#fff", bg: "#facc15" }, { text: "Tod", color: "#fff", bg: "#000" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele Städte (Hiroshima/Nagasaki)?") },
      quiz: { question: L("Wer warf die Atombomben?"), choices: [L("USA"), L("Deutschland"), L("Japan"), L("Russland")], answer: L("USA") }
    },
    {
      id: "vereintenationen",
      title: L("Gründung der UN"),
      hint1: L("1945 als Friedenssicherung."),
      hint2: L("Nie wieder Krieg."),
      svg: { type: "icon-grid", items: [{ emoji: "🇺🇳", label: "UN" }, { emoji: "🕊️", label: "Frieden" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("UN"), right: L("Frieden") }, { left: L("1945"), right: L("Gründung") }] },
      quiz: { question: L("Wozu wurde die UN gegründet?"), choices: [L("Frieden bewahren"), L("Krieg planen"), L("Geld drucken"), L("Nichts")], answer: L("Frieden bewahren") }
    }
  ]
};

// ─── ISLAND 5: DEUTSCHLAND IM KALTEN KRIEG ──────────────────────────────────
const I5: IslandSpec = {
  id: "i5",
  title: L("Kalter Krieg"),
  topics: [
    {
      id: "teilung",
      title: L("Zwei Staaten"),
      hint1: L("Gründung von BRD und DDR 1949."),
      hint2: L("Deutschland wurde geteilt."),
      svg: { type: "two-groups", left: { items: ["BRD"], bg: "#3b82f6", border: "#1d4ed8" }, right: { items: ["DDR"], bg: "#ef4444", border: "#b91c1c" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("BRD"), right: L("Bonn") }, { left: L("DDR"), right: L("Ost-Berlin") }] },
      quiz: { question: L("Wann wurden die beiden Staaten gegründet?"), choices: [L("1949"), L("1945"), L("1961"), L("1989")], answer: L("1949") }
    },
    {
      id: "mauerbau",
      title: L("Berliner Mauer"),
      hint1: L("13. August 1961."),
      hint2: L("Trennung von Familien und Freunden."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Mauer" }] },
      interactive: { type: "gap-fill", text: L("Die Mauer stand in __."), gaps: [{ index: 0, options: ["Berlin", "München"], correct: 0 }] },
      quiz: { question: L("Wann wurde die Mauer gebaut?"), choices: [L("1961"), L("1949"), L("1989"), L("1945")], answer: L("1961") }
    },
    {
      id: "luftbruecke",
      title: L("Berliner Blockade"),
      hint1: L("Rosinenbomber' versorgten die Stadt."),
      hint2: L("Sowjetunion sperrte alle Wege."),
      svg: { type: "icon-grid", items: [{ emoji: "✈️", label: "Bomber" }, { emoji: "🍬", label: "Rosinen" }] },
      interactive: { type: "word-order", words: [L("Hilfe"), L("aus"), L("der"), L("Luft")], instruction: L("Was war es?") },
      quiz: { question: L("Wie hießen die Versorgungsflugzeuge?"), choices: [L("Rosinenbomber"), L("Düsenjets"), L("Zeppeline"), L("Nichts")], answer: L("Rosinenbomber") }
    },
    {
      id: "adenauer",
      title: L("Konrad Adenauer"),
      hint1: L("Erster Bundeskanzler der BRD."),
      hint2: L("Westintegration und Aussöhnung."),
      svg: { type: "word-display", word: "Adenauer", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Adenauer führte die BRD nach Westen."), instruction: L("Wer war er?") },
      quiz: { question: L("Welcher Partei gehörte Adenauer an?"), choices: [L("CDU"), L("SPD"), L("FDP"), L("SED")], answer: L("CDU") }
    },
    {
      id: "wirtschaftswunder",
      title: L("Wirtschaftswunder"),
      hint1: L("Schneller Aufstieg in den 50ern."),
      hint2: L("Ludwig Erhard und die Soziale Marktwirtschaft."),
      svg: { type: "text-bubbles", items: [{ text: "Wohlstand", color: "#fff", bg: "#16a34a" }, { text: "VW Käfer", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "gap-fill", text: L("Vater des Wunders: Ludwig __."), gaps: [{ index: 0, options: ["Erhard", "Kohl"], correct: 0 }] },
      quiz: { question: L("Was war das Wirtschaftswunder?"), choices: [L("Schneller Aufstieg"), L("Ein Zaubertrick"), L("Ein Misserfolg"), L("Nur für Reiche")], answer: L("Schneller Aufstieg") }
    },
    {
      id: "sed",
      title: L("Die SED"),
      hint1: L("Einheitspartei in der DDR."),
      hint2: L("Diktatur unter Führung der Sowjetunion."),
      svg: { type: "text-bubbles", items: [{ text: "DDR → SED", color: "#fff", bg: "#3b82f6" }, { text: "Kontrolle → Stasi", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("DDR"), right: L("Kommunismus") }, { left: L("BRD"), right: L("Kapitalismus") }] },
      quiz: { question: L("Wie hieß die mächtigste Partei der DDR?"), choices: [L("SED"), L("CDU"), L("SPD"), L("AfD")], answer: L("SED") }
    },
    {
      id: "stasi",
      title: L("Die Stasi"),
      hint1: L("Geheimdienst der DDR."),
      hint2: L("Überwachung der eigenen Bürger."),
      svg: { type: "icon-grid", items: [{ emoji: "👂", label: "Hören" }, { emoji: "📂", label: "Akte" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele (SED) Parteien führten die DDR?") },
      quiz: { question: L("Was war die Aufgabe der Stasi?"), choices: [L("Überwachung"), L("Post austragen"), L("Sport fördern"), L("Nichts")], answer: L("Überwachung") }
    },
    {
      id: "aufstand_1953",
      title: L("17. Juni 1953"),
      hint1: L("Volksaufstand in der DDR."),
      hint2: L("Niederschlagung durch sowjetische Panzer."),
      svg: { type: "text-bubbles", items: [{ text: "Freiheit", color: "#fff", bg: "#3b82f6" }, { text: "Panzer", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "highlight-text", text: L("Der Aufstand forderte freie Wahlen."), instruction: L("Was wollten sie?") },
      quiz: { question: L("Wann war der erste große Aufstand in der DDR?"), choices: [L("17. Juni 1953"), L("9. November 1989"), L("13. August 1961"), L("1. Mai 1945")], answer: L("17. Juni 1953") }
    },
    {
      id: "brand_ostpolitik",
      title: L("Willy Brandt"),
      hint1: L("Kniefall von Warschau."),
      hint2: L("Entspannungspolitik gegenüber dem Osten."),
      svg: { type: "word-display", word: "Ostpolitik", color: "#1e3a8a" },
      interactive: { type: "sentence-build", words: [L("Wandel"), L("durch"), L("Annäherung")], instruction: L("Brandts Motto?") },
      quiz: { question: L("Was war Brandts Ziel?"), choices: [L("Entspannung"), L("Krieg"), L("Mehr Mauern"), L("Nichts")], answer: L("Entspannung") }
    },
    {
      id: "gastarbeiter",
      title: L("Gastarbeiter"),
      hint1: L("Menschen kamen zum Arbeiten nach Deutschland."),
      hint2: L("Besonders aus Italien und der Türkei."),
      svg: { type: "icon-grid", items: [{ emoji: "🇮🇹", label: "Italien" }, { emoji: "🇹🇷", label: "Türkei" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Herkunft"), items: [L("Italien"), L("Türkei")] }] },
      quiz: { question: L("Warum kamen Gastarbeiter?"), choices: [L("Arbeitskräftemangel"), L("Zum Urlaub"), L("Kein Grund"), L("Wegen des Wetters")], answer: L("Arbeitskräftemangel") }
    },
    {
      id: "atomgefahr",
      title: L("Kuba-Krise"),
      hint1: L("Die Welt am Rande des Atomkriegs."),
      hint2: L("Raketenstationierung auf Kuba."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Rakete" }] },
      interactive: { type: "gap-fill", text: L("Konflikt zwischen USA und __."), gaps: [{ index: 0, options: ["UdSSR", "China"], correct: 0 }] },
      quiz: { question: L("Wo standen die Raketen 1962?"), choices: [L("Kuba"), L("Berlin"), L("Paris"), L("London")], answer: L("Kuba") }
    },
    {
      id: "apollo",
      title: L("Mondlandung"),
      hint1: L("Wettlauf im All."),
      hint2: L("Neil Armstrong 1969."),
      svg: { type: "icon-grid", items: [{ emoji: "🚀", label: "Rakete" }, { emoji: "🌕", label: "Mond" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele (erste) Schritte auf dem Mond?") },
      quiz: { question: L("Welches Land landete zuerst auf dem Mond?"), choices: [L("USA"), L("Russland"), L("China"), L("Deutschland")], answer: L("USA") }
    },
    {
      id: "vietnam",
      title: L("Vietnamkrieg"),
      hint1: L("Stellvertreterkrieg der Blöcke."),
      hint2: L("Große Proteste weltweit."),
      svg: { type: "text-bubbles", items: [{ text: "Dschungel", color: "#fff", bg: "#16a34a" }, { text: "Protest", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("USA"), right: L("Süden") }, { left: L("Kommunisten"), right: L("Norden") }] },
      quiz: { question: L("In welchem Jahrzehnt war der Höhepunkt?"), choices: [L("1960er"), L("1920er"), L("1990er"), L("1880er")], answer: L("1960er") }
    },
    {
      id: "frauenbewegung",
      title: L("68er Bewegung"),
      hint1: L("Studentenrevolten."),
      hint2: L("Kritik an den Eltern und dem Staat."),
      svg: { type: "word-display", word: "Revolte", color: "#ef4444" },
      interactive: { type: "highlight-text", text: L("Die 68er wollten die Gesellschaft verändern."), instruction: L("Was wollten sie?") },
      quiz: { question: L("Welches Jahr gab der Bewegung den Namen?"), choices: [L("1968"), L("1945"), L("1989"), L("2000")], answer: L("1968") }
    },
    {
      id: "nato",
      title: L("NATO"),
      hint1: L("Westliches Verteidigungsbündnis."),
      hint2: L("Schutz vor sowjetischem Angriff."),
      svg: { type: "text-bubbles", items: [{ text: "West → NATO", color: "#fff", bg: "#3b82f6" }, { text: "Ost → Warschauer Pakt", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "lang-mcq", question: L("Was ist die NATO?"), choices: [L("Militärbündnis"), L("Sportverein"), L("Bank")], answer: L("Militärbündnis") },
      quiz: { question: L("Was ist die NATO?"), choices: [L("Militärbündnis"), L("Sportverein"), L("Bank"), L("Hilfsorganisation")], answer: L("Militärbündnis") }
    }
  ]
};

// ─── ISLAND 6: MAUERFALL & WIEDERVEREINIGUNG ───────────────────────────────
const I6: IslandSpec = {
  id: "i6",
  title: L("Wiedervereinigung"),
  topics: [
    {
      id: "gorbatschow",
      title: L("Gorbatschow"),
      hint1: L("Sowjetischer Führer."),
      hint2: L("Glasnost (Offenheit) und Perestroika (Umbau)."),
      svg: { type: "icon-grid", items: [{ emoji: "🗣️", label: "Glasnost" }, { emoji: "🏗️", label: "Umbau" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Glasnost"), right: L("Offenheit") }, { left: L("Perestroika"), right: L("Umbau") }] },
      quiz: { question: L("Wer leitete die Reformen in der UdSSR ein?"), choices: [L("Gorbatschow"), L("Stalin"), L("Putin"), L("Lenin")], answer: L("Gorbatschow") }
    },
    {
      id: "montagsdemos",
      title: L("Wir sind das Volk"),
      hint1: L("Friedliche Demos in der DDR."),
      hint2: L("Besonders in Leipzig."),
      svg: { type: "text-bubbles", items: [{ text: "Leipzig", color: "#fff", bg: "#1e3a8a" }, { text: "Freiheit", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Sie riefen: Wir sind das __."), gaps: [{ index: 0, options: ["Volk", "Heer"], correct: 0 }] },
      quiz: { question: L("Wo fanden die Montagsdemos statt?"), choices: [L("DDR / Leipzig"), L("BRD / Bonn"), L("USA / New York"), L("Nichts")], answer: L("DDR / Leipzig") }
    },
    {
      id: "mauerfall_1989",
      title: L("9. November 1989"),
      hint1: L("Öffnung der Grenze."),
      hint2: L("Menschen tanzten auf der Mauer."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Offen" }] },
      interactive: { type: "tap-count", count: 11, instruction: L("In welchem Monat (Nov=11) fiel die Mauer?") },
      quiz: { question: L("Wann fiel die Berliner Mauer?"), choices: [L("9. November 1989"), L("3. Oktober 1990"), L("13. August 1961"), L("1. Mai 1945")], answer: L("9. November 1989") }
    },
    {
      id: "helmutkohl",
      title: L("Helmut Kohl"),
      hint1: L("Kanzler der Einheit."),
      hint2: L("Er nutzte die Chance zur Einigung."),
      svg: { type: "word-display", word: "Kanzler", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Kohl versprach 'blühende Landschaften'."), instruction: L("Wer war das?") },
      quiz: { question: L("Wer war Bundeskanzler 1990?"), choices: [L("Helmut Kohl"), L("Willy Brandt"), L("Angela Merkel"), L("Gerhard Schröder")], answer: L("Helmut Kohl") }
    },
    {
      id: "einheitsvertrag",
      title: L("3. Oktober 1990"),
      hint1: L("Tag der Deutschen Einheit."),
      hint2: L("Offizielles Ende der Teilung."),
      svg: { type: "text-bubbles", items: [{ text: "DDR → Beitritt", color: "#fff", bg: "#3b82f6" }, { text: "Einheit → Vollzug", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Ein"), L("einiges"), L("Deutschland")], instruction: L("Was geschah?") },
      quiz: { question: L("Was ist der Nationalfeiertag Deutschlands?"), choices: [L("3. Oktober"), L("9. November"), L("1. Mai"), L("24. Dezember")], answer: L("3. Oktober") }
    },
    {
      id: "zweiplusvier",
      title: L("Zwei-plus-Vier-Vertrag"),
      hint1: L("Vertrag zwischen DE und Siegermächten."),
      hint2: L("Souveränität für das vereinte Deutschland."),
      svg: { type: "icon-grid", items: [{ emoji: "🤝", label: "Vertrag" }, { emoji: "🌍", label: "Welt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("2"), right: L("Deutsche Staaten") }, { left: L("4"), right: L("Siegermächte") }] },
      quiz: { question: L("Wer musste der Einheit zustimmen?"), choices: [L("Siegermächte"), L("Nur die UN"), L("Niemand"), L("Nur der Papst")], answer: L("Siegermächte") }
    },
    {
      id: "treuhand",
      title: L("Treuhand"),
      hint1: L("Verkauf der DDR-Wirtschaft."),
      hint2: L("Viele Fabriken wurden geschlossen."),
      svg: { type: "text-bubbles", items: [{ text: "Fabrik", color: "#fff", bg: "#475569" }, { text: "Aus", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Viele verloren ihre __."), gaps: [{ index: 0, options: ["Arbeit", "Sprache"], correct: 0 }] },
      quiz: { question: L("Was machte die Treuhandanstalt?"), choices: [L("DDR-Betriebe privatisieren"), L("Häuser bauen"), L("Geld verschenken"), L("Nichts")], answer: L("DDR-Betriebe privatisieren") }
    },
    {
      id: "ostalgie",
      title: L("Ostalgie"),
      hint1: L("Erinnerung an das Leben in der DDR."),
      hint2: L("Trabi, Ampelmännchen, Sandmännchen."),
      svg: { type: "icon-grid", items: [{ emoji: "🚗", label: "Trabi" }, { emoji: "🚦", label: "Ampel" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("DDR-Symbole"), items: [L("Trabi"), L("FDJ")] }] },
      quiz: { question: L("Wie hieß das bekannte DDR-Auto?"), choices: [L("Trabant"), L("VW Käfer"), L("Mercedes"), L("Fiat")], answer: L("Trabant") }
    },
    {
      id: "bluehende_landschaften",
      title: L("Blühende Landschaften"),
      hint1: L("Kohls Versprechen für den Osten."),
      hint2: L("Der Aufbau dauerte länger als gedacht."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Aufbau" }] },
      interactive: { type: "sentence-build", words: [L("Der"), L("Aufbau"), L("Ost"), L("begann")], instruction: L("Was geschah?") },
      quiz: { question: L("Was meinte Kohl mit 'blühenden Landschaften'?"), choices: [L("Wirtschaftlicher Erfolg"), L("Nur echte Blumen"), L("Wüsten"), L("Nichts")], answer: L("Wirtschaftlicher Erfolg") }
    },
    {
      id: "berlin_hauptstadt",
      title: L("Hauptstadtbeschluss"),
      hint1: L("Berlin wird wieder Sitz von Regierung."),
      hint2: L("Umzug von Bonn nach Berlin."),
      svg: { type: "text-bubbles", items: [{ text: "Alt → Bonn", color: "#fff", bg: "#3b82f6" }, { text: "Neu → Berlin", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "lang-mcq", question: L("Welche Stadt war Hauptstadt der BRD vor 1990?"), choices: [L("Bonn"), L("München"), L("Hamburg")], answer: L("Bonn") },
      quiz: { question: L("Welche Stadt war vor 1990 Hauptstadt der BRD?"), choices: [L("Bonn"), L("München"), L("Hamburg"), L("Berlin")], answer: L("Bonn") }
    },
    {
      id: "schabowski",
      title: L("Günter Schabowski"),
      hint1: L("Unbeabsichtigte Maueröffnung."),
      hint2: L("Das tritt nach meiner Kenntnis... sofort, unverzüglich."),
      svg: { type: "text-bubbles", items: [{ text: "Sofort", color: "#fff", bg: "#16a34a" }, { text: "Irrtum", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "highlight-text", text: L("Schabowski öffnete die Grenze durch einen Versprecher."), instruction: L("Was passierte?") },
      quiz: { question: L("Welcher Satz öffnete die Grenze?"), choices: [L("Sofort, unverzüglich"), L("Nächste Woche"), L("Vielleicht"), L("Nichts")], answer: L("Sofort, unverzüglich") }
    },
    {
      id: "begrueszungsgeld",
      title: L("Begrüßungsgeld"),
      hint1: L("100 DM für DDR-Bürger."),
      hint2: L("Erster Einkauf im Westen."),
      svg: { type: "icon-grid", items: [{ emoji: "💶", label: "100 DM" }, { emoji: "🛒", label: "Kauf" }] },
      interactive: { type: "tap-count", count: 100, instruction: L("Wie viele DM gab es?") },
      quiz: { question: L("Wie viel Geld bekamen DDR-Bürger bei der Einreise?"), choices: [L("100 DM"), L("10 DM"), L("1000 DM"), L("Nichts")], answer: L("100 DM") }
    },
    {
      id: "stasi_akten",
      title: L("Akteur"),
      hint1: L("Bürger stürmten Stasi-Zentralen."),
      hint2: L("Rettung der Akten vor der Vernichtung."),
      svg: { type: "word-display", word: "Akte", color: "#475569" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bürger"), right: L("Sturm") }, { left: L("Akten"), right: L("Wahrheit") }] },
      quiz: { question: L("Was wollten die Bürger in den Stasi-Zentralen?"), choices: [L("Akten sichern"), L("Geld klauen"), L("Kaffee trinken"), L("Nichts")], answer: L("Akten sichern") }
    },
    {
      id: "runder_tisch",
      title: L("Runder Tisch"),
      hint1: L("Gespräche zwischen Regierung und Opposition."),
      hint2: L("Friedlicher Übergang zur Demokratie."),
      svg: { type: "text-bubbles", items: [{ text: "Dialog", color: "#fff", bg: "#3b82f6" }, { text: "Frieden", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Ein __ Übergang."), gaps: [{ index: 0, options: ["friedlicher", "blutiger"], correct: 0 }] },
      quiz: { question: L("Was war der 'Runde Tisch'?"), choices: [L("Forum für Gespräche"), L("Ein Möbelstück"), L("Ein Marktplatz"), L("Nichts")], answer: L("Forum für Gespräche") }
    },
    {
      id: "fazit_einheit",
      title: L("Fazit"),
      hint1: L("Deutschland ist wieder eins."),
      hint2: L("Herausforderung des Zusammenwachsens."),
      svg: { type: "icon-grid", items: [{ emoji: "🇩🇪", label: "Eins" }, { emoji: "🇪🇺", label: "Europa" }] },
      interactive: { type: "word-order", words: [L("Zusammenwachsen"), L("was"), L("zusammen"), L("gehört")], instruction: L("Brandts Satz?") },
      quiz: { question: L("Was ist Deutschland heute?"), choices: [L("Ein demokratischer Einheitsstaat"), L("Zwei Staaten"), L("Ein Kaiserreich"), L("Nichts")], answer: L("Ein demokratischer Einheitsstaat") }
    }
  ]
};

// ─── ISLAND 7: EUROPA & GLOBALISIERUNG ─────────────────────────────────────
const I7: IslandSpec = {
  id: "i7",
  title: L("Modernes Europa"),
  topics: [
    {
      id: "eu_gruendung",
      title: L("Die EU"),
      hint1: L("Zusammenschluss europäischer Staaten."),
      hint2: L("Frieden und Wohlstand durch Handel."),
      svg: { type: "icon-grid", items: [{ emoji: "🇪🇺", label: "EU" }, { emoji: "🤝", label: "Bund" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("EU"), right: L("Brüssel") }, { left: L("Euro"), right: L("Währung") }] },
      quiz: { question: L("Wo ist der Hauptsitz der EU?"), choices: [L("Brüssel"), L("Berlin"), L("Paris"), L("London")], answer: L("Brüssel") }
    },
    {
      id: "euro",
      title: L("Der Euro"),
      hint1: L("Gemeinsame Währung seit 2002."),
      hint2: L("Wegfall von Umtauschgebühren."),
      svg: { type: "text-bubbles", items: [{ text: "Geld", color: "#fff", bg: "#fbbf24" }, { text: "Europa", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "tap-count", count: 2002, instruction: L("In welchem Jahr kam das Bargeld?") },
      quiz: { question: L("Seit wann gibt es Euro-Bargeld?"), choices: [L("2002"), L("1990"), L("2010"), L("1945")], answer: L("2002") }
    },
    {
      id: "schengen",
      title: L("Schengen"),
      hint1: L("Grenzen ohne Kontrollen."),
      hint2: L("Freies Reisen in Europa."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Frei" }] },
      interactive: { type: "gap-fill", text: L("Reisen ohne __."), gaps: [{ index: 0, options: ["Kontrolle", "Auto"], correct: 0 }] },
      quiz: { question: L("Was bedeutet das Schengen-Abkommen?"), choices: [L("Keine Grenzkontrollen"), L("Günstiges Benzin"), L("Mehr Steuern"), L("Nichts")], answer: L("Keine Grenzkontrollen") }
    },
    {
      id: "digitalisierung",
      title: L("Internet"),
      hint1: L("Revolution der Kommunikation."),
      hint2: L("Weltweite Vernetzung."),
      svg: { type: "icon-grid", items: [{ emoji: "💻", label: "Netz" }, { emoji: "🌐", label: "Welt" }] },
      interactive: { type: "highlight-text", text: L("Das Internet hat die Welt verändert."), instruction: L("Wichtigste Erfindung?") },
      quiz: { question: L("Was veränderte die Welt ab den 90ern?"), choices: [L("Internet"), L("Dampfmaschine"), L("Rad"), L("Nichts")], answer: L("Internet") }
    },
    {
      id: "klimawandel",
      title: L("Umweltschutz"),
      hint1: L("Globale Erwärmung."),
      hint2: L("Herausforderung für die Zukunft."),
      svg: { type: "text-bubbles", items: [{ text: "Erde", color: "#fff", bg: "#16a34a" }, { text: "Heiß", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Probleme"), items: [L("CO2"), L("Plastik")] }] },
      quiz: { question: L("Was ist eine große heutige Sorge?"), choices: [L("Klimawandel"), L("Zu viel Gold"), L("Kein Internet"), L("Nichts")], answer: L("Klimawandel") }
    },
    {
      id: "maastricht",
      title: L("Maastricht"),
      hint1: L("Vertrag zur Gründung der EU 1992."),
      hint2: L("Aus der EG wurde die EU."),
      svg: { type: "word-display", word: "Union", color: "#1e3a8a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("1992"), right: L("Vertrag") }, { left: L("Maastricht"), right: L("Ort") }] },
      quiz: { question: L("Wann wurde der Maastricht-Vertrag unterzeichnet?"), choices: [L("1992"), L("1945"), L("1961"), L("2020")], answer: L("1992") }
    },
    {
      id: "demokratisierung",
      title: L("Demokratiewelle"),
      hint1: L("Ende vieler Diktaturen."),
      hint2: L("Besonders in Osteuropa nach 1989."),
      svg: { type: "text-bubbles", items: [{ text: "Alt → Diktatur", color: "#fff", bg: "#3b82f6" }, { text: "Neu → Demokratie", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Freiheit"), L("für"), L("alle"), L("Menschen")], instruction: L("Was war das Ziel?") },
      quiz: { question: L("Was geschah in Osteuropa nach 1989?"), choices: [L("Demokratisierung"), L("Mehr Mauern"), L("Keine Änderung"), L("Nichts")], answer: L("Demokratisierung") }
    },
    {
      id: "globalisierung",
      title: L("Globalisierung"),
      hint1: L("Weltweite Wirtschaft."),
      hint2: L("Waren aus aller Welt im Supermarkt."),
      svg: { type: "icon-grid", items: [{ emoji: "🌍", label: "Welt" }, { emoji: "📦", label: "Handel" }] },
      interactive: { type: "gap-fill", text: L("Die Welt wird ein __."), gaps: [{ index: 0, options: ["Dorf", "Haus"], correct: 0 }] },
      quiz: { question: L("Was bedeutet Globalisierung?"), choices: [L("Weltweite Vernetzung"), L("Nur im eigenen Dorf"), L("Kein Handel mehr"), L("Nichts")], answer: L("Weltweite Vernetzung") }
    },
    {
      id: "migration_modern",
      title: L("Migration"),
      hint1: L("Menschen verlassen ihre Heimat."),
      hint2: L("Gründe: Krieg, Not, Arbeit."),
      svg: { type: "text-bubbles", items: [{ text: "Flucht", color: "#fff", bg: "#475569" }, { text: "Hoffnung", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Grund"), right: L("Krieg") }, { left: L("Ziel"), right: L("Sicherheit") }] },
      quiz: { question: L("Warum ziehen Menschen in andere Länder?"), choices: [L("Vielfältige Gründe"), L("Nur zum Spaß"), L("Gar nicht"), L("Nichts")], answer: L("Vielfältige Gründe") }
    },
    {
      id: "friedensnobelpreis_eu",
      title: L("EU & Frieden"),
      hint1: L("2012 erhielt die EU den Nobelpreis."),
      hint2: L("Für den Beitrag zu Frieden und Versöhnung."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Nobelpreis" }] },
      interactive: { type: "tap-count", count: 2012, instruction: L("In welchem Jahr war die Verleihung?") },
      quiz: { question: L("Welchen Preis erhielt die EU 2012?"), choices: [L("Friedensnobelpreis"), L("Oscar"), L("Goldene Kamera"), L("Nichts")], answer: L("Friedensnobelpreis") }
    },
    {
      id: "ostbeidritt_eu",
      title: L("Osterweiterung"),
      hint1: L("Beitritt vieler osteuropäischer Staaten."),
      hint2: L("Polen, Ungarn, Tschechien etc."),
      svg: { type: "icon-grid", items: [{ emoji: "🇵🇱", label: "Polen" }, { emoji: "🇭🇺", label: "Ungarn" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Beitritt"), items: [L("2004")] }] },
      quiz: { question: L("Wann traten viele östliche Länder bei?"), choices: [L("2004"), L("1990"), L("1945"), L("2020")], answer: L("2004") }
    },
    {
      id: "brexit",
      title: L("Brexit"),
      hint1: L("Austritt Großbritanniens."),
      hint2: L("Erster Austritt eines Landes."),
      svg: { type: "word-display", word: "Exit", color: "#991b1b" },
      interactive: { type: "gap-fill", text: L("Land: __."), gaps: [{ index: 0, options: ["Großbritannien", "Frankreich"], correct: 0 }] },
      quiz: { question: L("Welches Land verließ die EU?"), choices: [L("Großbritannien"), L("Deutschland"), L("Italien"), L("Spanien")], answer: L("Großbritannien") }
    },
    {
      id: "werte_eu",
      title: L("Werte"),
      hint1: L("Menschenwürde, Freiheit, Demokratie."),
      hint2: L("Gemeinsame Basis der EU."),
      svg: { type: "text-bubbles", items: [{ text: "Recht", color: "#fff", bg: "#16a34a" }, { text: "Freiheit", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("Die EU schützt die Grundrechte der Bürger."), instruction: L("Was ist wichtig?") },
      quiz: { question: L("Was ist ein Wert der EU?"), choices: [L("Demokratie"), L("Diktatur"), L("Sklaverei"), L("Zensur")], answer: L("Demokratie") }
    },
    {
      id: "parlament_eu",
      title: L("EU-Parlament"),
      hint1: L("Direkt gewähltes Organ."),
      hint2: L("Sitz in Straßburg und Brüssel."),
      svg: { type: "text-bubbles", items: [{ text: "Bürger → Wahl", color: "#fff", bg: "#3b82f6" }, { text: "Europa → Gesetz", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "sentence-build", words: [L("Wir"), L("wählen"), L("das"), L("Parlament")], instruction: L("Was tun Bürger?") },
      quiz: { question: L("Wer wählt das EU-Parlament?"), choices: [L("Die Bürger"), L("Nur die Könige"), L("Die US-Regierung"), L("Niemand")], answer: L("Die Bürger") }
    },
    {
      id: "zukunft_eu",
      title: L("Herausforderung"),
      hint1: L("Zusammenhalt in Krisenzeiten."),
      hint2: L("Wirtschaft und Sicherheit."),
      svg: { type: "icon-grid", items: [{ emoji: "❓", label: "Zukunft" }, { emoji: "🇪🇺", label: "Gemeinsam" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Gemeinsam"), right: L("Stark") }, { left: L("Einsam"), right: L("Schwach") }] },
      quiz: { question: L("Was ist wichtig für Europas Zukunft?"), choices: [L("Zusammenarbeit"), L("Streit"), L("Abschottung"), L("Nichts")], answer: L("Zusammenarbeit") }
    }
  ]
};

// ─── ISLAND 8: WIEDERHOLUNG MODERNE ─────────────────────────────────────────
const I8: IslandSpec = {
  id: "i8",
  title: L("Wiederholung"),
  topics: [
    {
      id: "ww1_vs_ww2",
      title: L("Weltkriege"),
      hint1: L("Vergleich der beiden Katastrophen."),
      hint2: L("1914-18 und 1939-45."),
      svg: { type: "text-bubbles", items: [{ text: "1. WK → 1914", color: "#fff", bg: "#3b82f6" }, { text: "2. WK → 1939", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Kaiser"), right: L("1. WK") }, { left: L("Hitler"), right: L("2. WK") }] },
      quiz: { question: L("Welcher Krieg war früher?"), choices: [L("Erster Weltkrieg"), L("Zweiter Weltkrieg"), L("Kalter Krieg"), L("Nichts")], answer: L("Erster Weltkrieg") }
    },
    {
      id: "demokratie_check",
      title: L("Staatsformen"),
      hint1: L("Weimar, NS-Zeit, BRD/DDR."),
      hint2: L("Wandel der Regierungen."),
      svg: { type: "text-bubbles", items: [{ text: "Frei", color: "#fff", bg: "#16a34a" }, { text: "Unfrei", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Diktatur"), items: [L("NS-Zeit"), L("DDR")] }, { label: L("Demokratie"), items: [L("BRD")] }] },
      quiz: { question: L("Was war die DDR?"), choices: [L("Diktatur"), L("Königreich"), L("Freie Republik"), L("Nichts")], answer: L("Diktatur") }
    },
    {
      id: "timeline_20jh",
      title: L("Zeitstrahl"),
      hint1: L("Reihenfolge der Ereignisse."),
      hint2: L("Vom Kaiser zur EU."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "1914" }, { emoji: "📜", label: "2000" }] },
      interactive: { type: "word-order", words: ["1914", "1933", "1945", "1989"], instruction: L("Ordne!") } ,
      quiz: { question: L("Was geschah 1989?"), choices: [L("Mauerfall"), L("Machtergreifung"), L("Kriegsbeginn"), L("Nichts")], answer: L("Mauerfall") }
    },
    {
      id: "menschen_20jh",
      title: L("Personen"),
      hint1: L("Wer prägte das Jahrhundert?"),
      hint2: L("Adenauer, Brandt, Kohl."),
      svg: { type: "icon-grid", items: [{ emoji: "👨", label: "Adenauer" }, { emoji: "👨", label: "Brandt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Einheit"), right: L("Kohl") }, { left: L("West"), right: L("Adenauer") }] },
      quiz: { question: L("Wer war der Kanzler der Einheit?"), choices: [L("Helmut Kohl"), L("Willy Brandt"), L("Adolf Hitler"), L("Nichts")], answer: L("Helmut Kohl") }
    },
    {
      id: "symbole_20jh",
      title: L("Symbole"),
      hint1: L("Mauer, Hakenkreuz, Euro."),
      hint2: L("Zeichen der Geschichte."),
      svg: { type: "text-bubbles", items: [{ text: "Mauer", color: "#fff", bg: "#475569" }, { text: "Sterne", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "gap-fill", text: L("Die Sterne stehen für __."), gaps: [{ index: 0, options: ["Europa", "Deutschland"], correct: 0 }] },
      quiz: { question: L("Was ist ein Symbol für die Teilung?"), choices: [L("Die Mauer"), L("Der Euro"), L("Der Rhein"), L("Nichts")], answer: L("Die Mauer") }
    },
    {
      id: "technik_wandel",
      title: L("Fortschritt"),
      hint1: L("Vom Zeppelin zum Computer."),
      hint2: L("Beschleunigung des Lebens."),
      svg: { type: "icon-grid", items: [{ emoji: "📟", label: "Alt" }, { emoji: "📱", label: "Neu" }] },
      interactive: { type: "highlight-text", text: L("Technik veränderte den Alltag der Menschen."), instruction: L("Was geschah?") },
      quiz: { question: L("Was ist eine moderne Erfindung?"), choices: [L("Smartphone"), L("Dampfmaschine"), L("Pflug"), L("Nichts")], answer: L("Smartphone") }
    },
    {
      id: "ideologien_mix",
      title: L("Ismen"),
      hint1: L("Sozialismus, Nationalismus, Liberalismus."),
      hint2: L("Ideen, die die Welt bewegten."),
      svg: { type: "word-display", word: "Ideen", color: "#1e3a8a" },
      interactive: { type: "lang-mcq", question: L("Was will the Liberalismus?"), choices: [L("Freiheit"), L("Gleichschaltung"), L("Diktatur")], answer: L("Freiheit") },
      quiz: { question: L("Was will der Liberalismus?"), choices: [L("Freiheit"), L("Gleichschaltung"), L("Diktatur"), L("Monarchie")], answer: L("Freiheit") }
    },
    {
      id: "grenzen_mix",
      title: L("Grenzen"),
      hint1: L("Vom Eisernen Vorhang zum offenen Europa."),
      hint2: L("Wandel der Schlagbäume."),
      svg: { type: "text-bubbles", items: [{ text: "Gestern → Stacheldraht", color: "#fff", bg: "#3b82f6" }, { text: "Heute → Offen", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele (BRD/DDR) deutsche Staaten?") },
      quiz: { question: L("Was trennte Europa jahrzehntelang?"), choices: [L("Eiserner Vorhang"), L("Der Äquator"), L("Der Himalaya"), L("Nichts")], answer: L("Eiserner Vorhang") }
    },
    {
      id: "wirtschaft_check",
      title: L("Wirtschaft"),
      hint1: L("Inflation, Wunder, Globalisierung."),
      hint2: L("Wie das Geld floss."),
      svg: { type: "text-bubbles", items: [{ text: "Mark", color: "#fff", bg: "#fbbf24" }, { text: "Euro", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("1923"), right: L("Inflation") }, { left: L("1950er"), right: L("Wunder") }] },
      quiz: { question: L("Wie hieß die Währung vor dem Euro?"), choices: [L("D-Mark"), L("Dollar"), L("Pfund"), L("Nichts")], answer: L("D-Mark") }
    },
    {
      id: "widerstand_helden",
      title: L("Zivilcourage"),
      hint1: L("Nein sagen können."),
      hint2: L("Werte verteidigen."),
      svg: { type: "icon-grid", items: [{ emoji: "🤝", label: "Mut" }, { emoji: "⚖️", label: "Recht" }] },
      interactive: { type: "sentence-build", words: [L("Mut"), L("ist"), L("wichtig"), L("für"), L("Freiheit")], instruction: L("Lektion?") },
      quiz: { question: L("Was lernt man aus der Geschichte?"), choices: [L("Zivilcourage ist nötig"), L("Gewalt siegt immer"), L("Nichts"), L("Alles egal")], answer: L("Zivilcourage ist nötig") }
    },
    {
      id: "frauen_wandel",
      title: L("Rolle der Frau"),
      hint1: L("Vom Wahlrecht zur Gleichberechtigung."),
      hint2: L("Langer Weg zur Freiheit."),
      svg: { type: "word-display", word: "Gleichheit", color: "#db2777" },
      interactive: { type: "gap-fill", text: L("Frauen erhielten das __."), gaps: [{ index: 0, options: [L("Wahlrecht"), L("Fahrverbot")], correct: 0 }] },
      quiz: { question: L("In welchem Jahr erhielten Frauen in DE das Wahlrecht?"), choices: [L("1919"), L("1871"), L("1945"), L("2000")], answer: L("1919") }
    },
    {
      id: "globalisierung_check",
      title: L("Vernetzung"),
      hint1: L("Weltweite Abhängigkeit."),
      hint2: L("Chancen und Risiken."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Welt" }] },
      interactive: { type: "lang-mcq", question: L("Was bedeutet Globalisierung?"), choices: [L("Weltweiter Handel"), L("Nur lokaler Markt"), L("Ende der Technik")], answer: L("Weltweiter Handel") },
      quiz: { question: L("Was bedeutet Globalisierung?"), choices: [L("Weltweiter Handel"), L("Nur lokaler Markt"), L("Ende der Technik"), L("Isolation")], answer: L("Weltweiter Handel") }
    },
    {
      id: "kultur_mix",
      title: L("Kultur"),
      hint1: L("Vom Stummfilm zum Streaming."),
      hint2: L("Unterhaltung für alle."),
      svg: { type: "icon-grid", items: [{ emoji: "🎬", label: "Film" }, { emoji: "📻", label: "Radio" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("20er"), right: L("Stummfilm") }, { left: L("Heute"), right: L("Internet") }] },
      quiz: { question: L("Was war eine neue Technik in den 20ern?"), choices: [L("Rundfunk"), L("Smartphone"), L("Dampfschiff"), L("Nichts")], answer: L("Rundfunk") }
    },
    {
      id: "ursache_folge_mix",
      title: L("Logik"),
      hint1: L("Zusammenhänge erkennen."),
      hint2: L("Warum passierte was?"),
      svg: { type: "text-bubbles", items: [{ text: "Not → Radikale", color: "#fff", bg: "#3b82f6" }, { text: "Mauerfall → Einheit", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "highlight-text", text: L("Wirtschaftskrisen führen oft zu politischer Instabilität."), instruction: L("Was ist die Gefahr?") },
      quiz: { question: L("Was war die Folge des Mauerfalls?"), choices: [L("Die Einheit"), L("Ein neuer Krieg"), L("Ein dritter Staat"), L("Nichts")], answer: L("Die Einheit") }
    },
    {
      id: "abschluss_20jh",
      title: L("Das 20. Jahrhundert"),
      hint1: L("Jahrhundert der Extreme."),
      hint2: L("Schreckliche Kriege und große Hoffnung."),
      svg: { type: "word-display", word: "Geschichte", color: "#16a34a" },
      interactive: { type: "tap-count", count: 100, instruction: L("Wie viele Jahre hat ein Jahrhundert?") },
      quiz: { question: L("Wie nennt man das 20. Jahrhundert oft?"), choices: [L("Zeitalter der Extreme"), L("Die ruhige Zeit"), L("Die Steinzeit"), L("Nichts")], answer: L("Zeitalter der Extreme") }
    }
  ]
};

// ─── ISLAND 9: AKTUELLE ZEITGESCHICHTE ─────────────────────────────────────
const I9: IslandSpec = {
  id: "i9",
  title: L("Heute"),
  topics: [
    {
      id: "digital_revolution",
      title: L("Digitale Welt"),
      hint1: L("Smartphones und soziale Medien."),
      hint2: L("Ständige Erreichbarkeit."),
      svg: { type: "icon-grid", items: [{ emoji: "📱", label: "Handy" }, { emoji: "💬", label: "Chat" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Internet"), right: L("Vernetzung") }, { left: L("Daten"), right: L("Schutz") }] },
      quiz: { question: L("Was prägt unseren Alltag heute am meisten?"), choices: [L("Digitale Technik"), L("Dampfmaschinen"), L("Kutschen"), L("Nichts")], answer: L("Digitale Technik") }
    },
    {
      id: "eu_heute",
      title: L("Herausforderung EU"),
      hint1: L("Suche nach Einigkeit."),
      hint2: L("Gemeinsame Politik in schwierigen Zeiten."),
      svg: { type: "text-bubbles", items: [{ text: "Einheit", color: "#fff", bg: "#3b82f6" }, { text: "Vielfalt", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("In __ ist die Zentrale."), gaps: [{ index: 0, options: ["Brüssel", "Rom"], correct: 0 }] },
      quiz: { question: L("Was ist ein aktuelles Ziel der EU?"), choices: [L("Stabilität sichern"), L("Krieg führen"), L("Mauern bauen"), L("Nichts")], answer: L("Stabilität sichern") }
    },
    {
      id: "umwelt_global",
      title: L("Klimaschutz"),
      hint1: L("Pariser Abkommen."),
      hint2: L("Begrenzung der Erderwärmung."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Erde" }] },
      interactive: { type: "highlight-text", text: L("Die Begrenzung der CO2-Emissionen ist ein weltweites Ziel."), instruction: L("Was ist CO2?") },
      quiz: { question: L("Welches Abkommen ist wichtig für das Klima?"), choices: [L("Pariser Abkommen"), L("Versailler Vertrag"), L("Magna Carta"), L("Nichts")], answer: L("Pariser Abkommen") }
    },
    {
      id: "fake_news",
      title: L("Desinformation"),
      hint1: L("Gefahr durch falsche Nachrichten."),
      hint2: L("Manipulation der Meinung."),
      svg: { type: "text-bubbles", items: [{ text: "Lüge", color: "#fff", bg: "#dc2626" }, { text: "Check", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "word-order", words: [L("Prüfe"), L("die"), L("Quelle")], instruction: L("Regel?") },
      quiz: { question: L("Wie nennt man absichtliche Falschmeldungen?"), choices: [L("Fake News"), L("Gute Nachrichten"), L("Märchen"), L("Nichts")], answer: L("Fake News") }
    },
    {
      id: "globaler_handel",
      title: L("Warenwege"),
      hint1: L("Containerschiffe und Logistik."),
      hint2: L("Abhängigkeit von Lieferketten."),
      svg: { type: "icon-grid", items: [{ emoji: "🚢", label: "Schiff" }, { emoji: "📦", label: "Paket" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hafen"), right: L("Logistik") }, { left: L("Konsum"), right: L("Kauf") }] },
      quiz: { question: L("Was ermöglicht billige Waren weltweit?"), choices: [L("Globale Lieferketten"), L("Nur Handarbeit"), L("Kein Transport"), L("Nichts")], answer: L("Globale Lieferketten") }
    },
    {
      id: "ki",
      title: L("KI"),
      hint1: L("Künstliche Intelligenz."),
      hint2: L("Maschinen, die lernen."),
      svg: { type: "word-display", word: "KI", color: "#8b5cf6" },
      interactive: { type: "lang-mcq", question: L("Was bedeutet KI?"), choices: [L("Künstliche Intelligenz"), L("Keine Infos"), L("Kleines Interface")], answer: L("Künstliche Intelligenz") },
      quiz: { question: L("Was bedeutet KI?"), choices: [L("Künstliche Intelligenz"), L("Keine Infos"), L("Kleines Interface"), L("Kurze Info")], answer: L("Künstliche Intelligenz") }
    },
    {
      id: "friedenssicherung",
      title: L("Konflikte heute"),
      hint1: L("Neue Spannungen weltweit."),
      hint2: L("Diplomatie als wichtigstes Werkzeug."),
      svg: { type: "text-bubbles", items: [{ text: "Krieg → Gefahr", color: "#fff", bg: "#3b82f6" }, { text: "Reden → Lösung", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "gap-fill", text: L("Diplomatie bedeutet __."), gaps: [{ index: 0, options: [L("Verhandeln"), L("Kämpfen")], correct: 0 }] },
      quiz: { question: L("Was soll Kriege verhindern?"), choices: [L("Diplomatie"), L("Mehr Waffen"), L("Abschottung"), L("Nichts")], answer: L("Diplomatie") }
    },
    {
      id: "energiewende",
      title: L("Erneuerbare Energie"),
      hint1: L("Wind, Sonne, Wasser."),
      hint2: L("Abkehr von Kohle und Öl."),
      svg: { type: "icon-grid", items: [{ emoji: "💨", label: "Wind" }, { emoji: "☀️", label: "Sonne" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Sauber"), items: [L("Windkraft"), L("Solar")] }] },
      quiz: { question: L("Was gehört zur Energiewende?"), choices: [L("Sonnenergie"), L("Kohleverbrennung"), L("Ölheizung"), L("Nichts")], answer: L("Sonnenergie") }
    },
    {
      id: "pandemie",
      title: L("Gesundheit"),
      hint1: L("Globale Krankheiten."),
      hint2: L("Bedeutung der Wissenschaft."),
      svg: { type: "text-bubbles", items: [{ text: "Maske", color: "#fff", bg: "#3b82f6" }, { text: "Impfung", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele (eine) Welt haben wir?") },
      quiz: { question: L("Was schützt vor Viren?"), choices: [L("Impfungen"), L("Handewaschen allein"), L("Gar nichts"), L("Warten")], answer: L("Impfungen") }
    },
    {
      id: "demokratie_gefahr",
      title: L("Zusammenhalt"),
      hint1: L("Gefahr durch Spaltung."),
      hint2: L("Wichtigkeit des Dialogs."),
      svg: { type: "text-bubbles", items: [{ text: "Reden → Brücke", color: "#fff", bg: "#3b82f6" }, { text: "Hass → Mauer", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "highlight-text", text: L("Demokratie braucht aktive Bürger."), instruction: L("Was ist nötig?") },
      quiz: { question: L("Was stärkt die Demokratie?"), choices: [L("Mitmachen"), L("Zuschauen"), L("Ignorieren"), L("Nichts")], answer: L("Mitmachen") }
    },
    {
      id: "weltraum_modern",
      title: L("Mars-Pläne"),
      hint1: L("Neue Reiseziele im All."),
      hint2: L("Private Firmen wie SpaceX."),
      svg: { type: "icon-grid", items: [{ emoji: "🔴", label: "Mars" }, { emoji: "🚀", label: "Ziel" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Erde"), right: L("Blau") }, { left: L("Mars"), right: L("Rot") }] },
      quiz: { question: L("Welcher Planet ist das nächste Ziel?"), choices: [L("Mars"), L("Venus"), L("Jupiter"), L("Saturn")], answer: L("Mars") }
    },
    {
      id: "nachhaltigkeit",
      title: L("Nachhaltigkeit"),
      hint1: L("Ressourcen schonen."),
      hint2: L("An die Enkel denken."),
      svg: { type: "word-display", word: "Zukunft", color: "#16a34a" },
      interactive: { type: "sentence-build", words: [L("Schütze"), L("die"), L("Natur"), L("für"), L("später")], instruction: L("Motto?") },
      quiz: { question: L("Was bedeutet Nachhaltigkeit?"), choices: [L("Ressourcenschutz"), L("Verschwendung"), L("Alles sofort verbrauchen"), L("Nichts")], answer: L("Ressourcenschutz") }
    },
    {
      id: "vielfalt",
      title: L("Bunte Welt"),
      hint1: L("Akzeptanz verschiedener Lebensstile."),
      hint2: L("Gegen Diskriminierung."),
      svg: { type: "text-bubbles", items: [{ text: "Bunt", color: "#fff", bg: "#db2777" }, { text: "Offen", color: "#fff", bg: "#8b5cf6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Respekt"), right: L("Frieden") }, { left: L("Hass"), right: L("Konflikt") }] },
      quiz: { question: L("Was fördert das Zusammenleben?"), choices: [L("Toleranz"), L("Vorurteile"), L("Gewalt"), L("Nichts")], answer: L("Toleranz") }
    },
    {
      id: "bildung_digital",
      title: L("Lernen heute"),
      hint1: L("Tablets statt Kreide."),
      hint2: L("Wissen ist überall verfügbar."),
      svg: { type: "icon-grid", items: [{ emoji: "🎓", label: "Wissen" }, { emoji: "💻", label: "Online" }] },
      interactive: { type: "gap-fill", text: L("Lernen mit der __."), gaps: [{ index: 0, options: ["Cloud", "Tafel"], correct: 0 }] },
      quiz: { question: L("Was hilft beim modernen Lernen?"), choices: [L("Digitale Medien"), L("Trommeln"), L("Steintafeln"), L("Nichts")], answer: L("Digitale Medien") }
    },
    {
      id: "schlusswort",
      title: L("Deine Geschichte"),
      hint1: L("Du schreibst die Zukunft."),
      hint2: L("Lerne aus dem Gestern."),
      svg: { type: "word-display", word: "Zukunft", color: "#3b82f6" },
      interactive: { type: "sentence-build", words: [L("Geschichte"), L("geht"), L("immer"), L("weiter")], instruction: L("Schluss?") },
      quiz: { question: L("Was ist Geschichte?"), choices: [L("Vergangenheit und Zukunft"), L("Nur alte Bücher"), L("Langweilig"), L("Nichts")], answer: L("Vergangenheit und Zukunft") }
    }
  ]
};

const islands = [I1, I2, I3, I4, I5, I6, I7, I8, I9];
const built = islands.map(buildIsland);

export const GESCHICHTE_K8_I1_LABELS = built[0].labels;
export const GESCHICHTE_K8_I1_POOL = built[0].pool;
export const GESCHICHTE_K8_I2_LABELS = built[1].labels;
export const GESCHICHTE_K8_I2_POOL = built[1].pool;
export const GESCHICHTE_K8_I3_LABELS = built[2].labels;
export const GESCHICHTE_K8_I3_POOL = built[2].pool;
export const GESCHICHTE_K8_I4_LABELS = built[3].labels;
export const GESCHICHTE_K8_I4_POOL = built[3].pool;
export const GESCHICHTE_K8_I5_LABELS = built[4].labels;
export const GESCHICHTE_K8_I5_POOL = built[4].pool;
export const GESCHICHTE_K8_I6_LABELS = built[5].labels;
export const GESCHICHTE_K8_I6_POOL = built[5].pool;
export const GESCHICHTE_K8_I7_LABELS = built[6].labels;
export const GESCHICHTE_K8_I7_POOL = built[6].pool;
export const GESCHICHTE_K8_I8_LABELS = built[7].labels;
export const GESCHICHTE_K8_I8_POOL = built[7].pool;
export const GESCHICHTE_K8_I9_LABELS = built[8].labels;
export const GESCHICHTE_K8_I9_POOL = built[8].pool;
