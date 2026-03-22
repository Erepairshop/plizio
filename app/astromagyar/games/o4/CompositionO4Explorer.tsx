"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Érvelés: állítások alátámasztása",
    tx1: "Az érvelésnél azt magyarázzuk meg, miért gondolunk valamit. Érveket használunk a véleményünk támogatására.",
    q1: "Melyik az erős érv az állítás alátámasztására?",
    a1: "A futball jó sport, mert én is szeretem.",
    b1: "A futball jó sport, mert fejleszti az állóképességet és az együttműködést.",
    c1: "A futball jó sport, mert vannak labdák hozzá.",
    d1: "A futball jó sport, mert az emberek játsszák.",
    t2: "Levélírás: formális és informális",
    tx2: "A formális levelekben tisztelettel szólítjuk meg az adresszást, az informális levelekben barátságosan.",
    q2: "Melyik a helyes formális levélalapja?",
    a2: "Szia uram,",
    b2: "Kedves uram,",
    c2: "Hello uram,",
    d2: "Ó uram,",
    t3: "Naplóírás: személyes gondolatok",
    tx3: "A naplóírás személyes és bizalmas. Saját gondolatainkat és érzéseinket írjuk le.",
    q3: "Melyik a legjobb napló stílusa?",
    a3: "A mai nap szép volt, mert játszottam a barátommal.",
    b3: "Szép nap volt ma, játszottam.",
    c3: "A mai nap óriási volt és nem szeretem.",
    d3: "Ma nem volt semmi érdekes.",
    t4: "Véleménycikk: saját gondolatok és érvek",
    tx4: "A véleménycikkben kifejezzük a saját nézőpontunkat és érvelemokkal támogatjuk azt.",
    q4: "Melyik a legjobb véleménycikk kezdete?",
    a4: "Én úgy gondolom, hogy az iskola fontos, mert tanulunk benne.",
    b4: "Az iskola fontos, mert az emberek ezt mondják.",
    c4: "Az iskola nagyon fontos és jó.",
    d4: "Szerintem az iskola az legjobb.",
    t5: "Történet: kezdet, cselekmény, vég",
    tx5: "A történetnek van kezdete, középseje és vége. A cselekmény sűrű és érdekes.",
    q5: "Melyik a legjobb történet szerkezete?",
    a5: "Volt egy fiú. Egy nap elment a parkba. Ott játszott. Hazament.",
    b5: "Egy fiú elment a parkba és játszott a barátaival, majd hazafelé egyszer kiugrott egy állat az útjára, de szerencsére elkerülte és már csak játszott tovább.",
    c5: "Egy fiú elment a parkba és játszott. Sok szórakoztató dolog történt.",
    d5: "Az egyszer volt, hol nem volt egy fiú aki nem szeretett játszani.",
  },
  de: {
    t1: "Argumentation: Aussagen begründen",
    tx1: "Bei der Argumentation erklären wir, warum wir etwas denken. Wir verwenden Argumente, um unsere Meinung zu unterstützen.",
    q1: "Welches ist ein starkes Argument für die Aussage?",
    a1: "Fußball ist ein guter Sport, weil ich es auch mag.",
    b1: "Fußball ist ein guter Sport, weil es Ausdauer und Zusammenarbeit entwickelt.",
    c1: "Fußball ist ein guter Sport, weil es Bälle dafür gibt.",
    d1: "Fußball ist ein guter Sport, weil Menschen ihn spielen.",
    t2: "Briefschreiben: formell und informell",
    tx2: "In formellen Briefen sprechen wir die Anrede respektvoll an, in informellen freundlich.",
    q2: "Welches ist die richtige formelle Briefanrede?",
    a2: "Hallo Herr,",
    b2: "Sehr geehrter Herr,",
    c2: "Hi Herr,",
    d2: "Ö Herr,",
    t3: "Tagebucheintrag: persönliche Gedanken",
    tx3: "Ein Tagebucheintrag ist persönlich und vertraulich. Wir schreiben unsere Gedanken und Gefühle auf.",
    q3: "Welches ist der beste Tagebuchstil?",
    a3: "Heute war ein schöner Tag, weil ich mit meinem Freund gespielt habe.",
    b3: "Es war ein schöner Tag, ich spielte.",
    c3: "Heute war ein großartiger Tag und mir gefällt es nicht.",
    d3: "Heute war nichts Interessantes.",
    t4: "Meinungsartikel: eigene Gedanken und Argumente",
    tx4: "In einem Meinungsartikel drücken wir unseren Standpunkt aus und unterstützen ihn mit Argumenten.",
    q4: "Welches ist der beste Anfang eines Meinungsartikels?",
    a4: "Ich denke, dass die Schule wichtig ist, weil wir dort lernen.",
    b4: "Die Schule ist wichtig, weil Menschen das sagen.",
    c4: "Die Schule ist sehr wichtig und gut.",
    d4: "Meiner Meinung nach ist die Schule am besten.",
    t5: "Geschichte: Anfang, Handlung, Ende",
    tx5: "Eine Geschichte hat einen Anfang, eine Mitte und ein Ende. Die Handlung ist dicht und interessant.",
    q5: "Welches ist die beste Geschichtsstruktur?",
    a5: "Es gab einen Jungen. Eines Tages ging er in den Park. Dort spielte er. Dann ging er nach Hause.",
    b5: "Ein Junge ging in den Park und spielte mit seinen Freunden, und plötzlich sprang ein Tier auf die Straße, aber glücklicherweise wich er aus und spielte danach weiter.",
    c5: "Ein Junge ging in den Park und spielte. Viele unterhaltsame Dinge ereigneten sich.",
    d5: "Es war einmal ein Junge, der nicht gerne spielte.",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "t1",
      infoText: "tx1",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <g opacity="0.4">
            <circle cx="80" cy="80" r="20" fill="#FF6B6B" />
            <text x="80" y="85" textAnchor="middle" fontSize="20">
              ✓
            </text>
          </g>
          <g opacity="0.4">
            <circle cx="160" cy="80" r="20" fill="#FF6B6B" />
            <text x="160" y="85" textAnchor="middle" fontSize="20">
              ✓
            </text>
          </g>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Érvek
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q1",
          choices: ["a1", "b1", "c1", "d1"],
          answer: "b1",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="40" y="50" width="160" height="70" rx="4" fill="#4ECDC4" opacity="0.2" />
          <text x="120" y="75" textAnchor="middle" fontSize="14" fill="#FFF">
            Kedves Uram,
          </text>
          <text x="120" y="105" textAnchor="middle" fontSize="12" fill="#4ECDC4">
            Levélírás
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q2",
          choices: ["a2", "b2", "c2", "d2"],
          answer: "b2",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="60" textAnchor="middle" fontSize="40">
            📔
          </text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="#AAA">
            Naplóírás
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q3",
          choices: ["a3", "b3", "c3", "d3"],
          answer: "a3",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="40" y="40" width="160" height="90" rx="4" fill="#B44DFF" opacity="0.15" />
          <text x="120" y="70" textAnchor="middle" fontSize="16" fill="#FFF" fontWeight="bold">
            Vélemény
          </text>
          <text x="120" y="110" textAnchor="middle" fontSize="12" fill="#B44DFF">
            + Érvek
          </text>
        </svg>
      ),
      questions: [
        {
          question: "q4",
          choices: ["a4", "b4", "c4", "d4"],
          answer: "a4",
        },
      ],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <g opacity="0.4">
            <circle cx="60" cy="80" r="18" fill="#FFE66D" />
            <text x="60" y="88" textAnchor="middle" fontSize="12" fill="#000">
              Kezdet
            </text>
          </g>
          <g opacity="0.4">
            <circle cx="120" cy="80" r="18" fill="#4ECDC4" />
            <text x="120" y="88" textAnchor="middle" fontSize="10" fill="#000">
              Cselekmény
            </text>
          </g>
          <g opacity="0.4">
            <circle cx="180" cy="80" r="18" fill="#FF6B6B" />
            <text x="180" y="88" textAnchor="middle" fontSize="12" fill="#000">
              Vég
            </text>
          </g>
        </svg>
      ),
      questions: [
        {
          question: "q5",
          choices: ["a5", "b5", "c5", "d5"],
          answer: "c5",
        },
      ],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function CompositionO4Explorer({
  color,
  lang,
  onDone,
  onClose,
}: Props) {
  return (
    <ExplorerEngine
      def={DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
