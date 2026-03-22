"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Hangtan összes ismerete", tx1: "Az O5 szint összes hangtan témáját ismételhetjük: magánhangzók, mássalhangzók, hangrend, szótagoltás és hosszú-rövid magánhangzók.",
    q1: "Melyik szó szótagoltása jó?", a1: "ter-mé-zet", b1: "t-erm-é-zet", c1: "term-é-z-et", d1: "te-rmé-zet",

    t2: "Szövegtan és stílus vegyes", tx2: "A szövegtan, kohézió, szövegtípusok és stílusfigurák (metafora, hasonlat) mind fontos a magyar nyelvhez.",
    q2: "Melyik a szövegtan legfontosabb eleme?", a2: "Betű", b2: "Bekezdés szerkezete", c2: "Nagyságrend", d2: "Típus",

    t3: "Helyesírás gyakorlása", tx3: "Az egybe- és különírás, ly és j, kötőjel, nagybetű-kisbetű, rövidítések mind része a helyesírásnak.",
    q3: "Melyik szó helyesen írott?", a3: "angol-magyar szótár", b3: "angol magyar-szótár", c3: "angol magyar szótár", d3: "angol-magyarszótár",

    t4: "Irodalom és versformák", tx4: "A versformák (jambusz, spondeus), rímek, lírikus műfajok és irodalmi korszakok a magyar irodalom alapjai.",
    q4: "Melyik irodalmi korszakban él ma a kortárs magyar irodalom?", a4: "Barokk", b4: "Realista", c4: "Modern", d4: "Ókori",

    t5: "Végső próba: Mindent egy kérdésben", tx5: "Ez az utolsó kérdés egy vegyes téma: azonosíts egy helyesen írott, jó szerkezetű, irodalmian értékelendő szöveget.",
    q5: "Melyik szöveg helyesen írott és irodalmian érdekes?", a5: "nagy hazo az urbani területen", b5: "Az angol-magyar szótár értékesebb, mint a hagyományos szótárak.", c5: "piroska meg találkoztak egymásnak", d5: "a város nagyon nagy volt",
  },
  de: {
    t1: "Alle Phonetik-Kenntnisse", tx1: "Das O5-Niveau enthält alle Phonetik-Themen: Vokale, Konsonanten, Vokalharmonie, Silbenteilung und lange-kurze Vokale.",
    q1: "Welche Silbenteilung ist korrekt?", a1: "ter-mé-zet", b1: "t-erm-é-zet", c1: "term-é-z-et", d1: "te-rmé-zet",

    t2: "Textlehre und Stil gemischt", tx2: "Textlehre, Kohäsion, Texttypen und Stilfiguren (Metapher, Vergleich) sind alle wichtig für die ungarische Sprache.",
    q2: "Was ist das wichtigste Element der Textlehre?", a2: "Buchstabe", b2: "Absatzstruktur", c2: "Größenordnung", d2: "Typ",

    t3: "Rechtschreibung üben", tx3: "Zusammen- und Getrenntschreibung, ly und j, Bindestrich, Groß- und Kleinschreibung, Abkürzungen sind alle Teil der Orthografie.",
    q3: "Welches Wort ist korrekt geschrieben?", a3: "angol-magyar szótár", b3: "angol magyar-szótár", c3: "angol magyar szótár", d3: "angol-magyarszótár",

    t4: "Literatur und Versformen", tx4: "Versformen (Jambus, Spondeus), Reime, lyrische Gattungen und literarische Epochen sind die Grundlagen der ungarischen Literatur.",
    q4: "In welcher literarischen Epoche lebt die zeitgenössische ungarische Literatur heute?", a4: "Barock", b4: "Realismus", c4: "Moderne", d4: "Antike",

    t5: "Endprobe: Alles in einer Frage", tx5: "Dies ist die letzte Frage eines gemischten Themas: Identifiziere einen korrekt geschriebenen, gut strukturierten, literarisch wertvollen Text.",
    q5: "Welcher Text ist korrekt geschrieben und literarisch interessant?", a5: "nagy hazo az urbani területen", b5: "Az angol-magyar szótár értékesebb, mint a hagyományos szótárak.", c5: "piroska meg találkoztak egymásnak", d5: "a város nagyon nagy volt",
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
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1f3a4d" />
          <circle cx="50" cy="70" r="18" fill="#FF6B9D" opacity="0.4" />
          <text x="50" y="78" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">Hang</text>
          <circle cx="120" cy="70" r="18" fill="#4ECDC4" opacity="0.4" />
          <text x="120" y="78" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">Szótag</text>
          <circle cx="190" cy="70" r="18" fill="#95E1D3" opacity="0.4" />
          <text x="190" y="78" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">Vers</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Hangtan</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "t2",
      infoText: "tx2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="20" y="40" width="200" height="90" rx="8" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="120" y="65" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">Szövegtan</text>
          <text x="120" y="90" textAnchor="middle" fontSize="14" fill="#B44DFF" fontWeight="bold">Kohézió + Stílusfigurák</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "b2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <text x="120" y="50" textAnchor="middle" fontSize="16" fill="#00D4FF" fontWeight="bold">Helyesírás</text>
          <text x="70" y="90" fontSize="13" fill="#00D4FF" fontWeight="bold">egybe-</text>
          <text x="130" y="90" fontSize="13" fill="#00D4FF" fontWeight="bold">írás</text>
          <text x="70" y="120" fontSize="13" fill="#00D4FF" fontWeight="bold">nagy</text>
          <text x="130" y="120" fontSize="13" fill="#00D4FF" fontWeight="bold">betű</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <text x="60" y="60" fontSize="16" fill="#6FAADB" fontWeight="bold">Vers</text>
          <text x="120" y="60" fontSize="16" fill="#6FAADB" fontWeight="bold">Rím</text>
          <text x="180" y="60" fontSize="16" fill="#6FAADB" fontWeight="bold">Lírikus</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Irodalmi eszközök</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "c4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <rect x="20" y="30" width="200" height="110" rx="8" fill="none" stroke="#FF9500" strokeWidth="3" />
          <text x="120" y="55" textAnchor="middle" fontSize="14" fill="#FF9500" fontWeight="bold">Végső Próba</text>
          <text x="120" y="80" textAnchor="middle" fontSize="12" fill="#FF9500" fontWeight="bold">Hangtan + Szövegtan +</text>
          <text x="120" y="105" textAnchor="middle" fontSize="12" fill="#FF9500" fontWeight="bold">Helyesírás + Irodalom</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "b5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function ReviewO5Explorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
