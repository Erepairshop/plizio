"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Stílusfunkciók", tx1: "A stílus azt mutatja, hogyan kapcsolódik az írás az olvasóhoz. Az irodalmi, tudományos és szóbeli stílusok különböző célt szolgálnak.",
    q1: "Melyik szöveg irodalmi stílusú?", a1: "Az élet olyan, mint egy régi, rozsdásodott kulcs, amely nyit egy titokzatos szobára.", b1: "A vér Cu2+ ionokat tartalmaz.", c1: "Holnap találkozunk az iskola előtt.", d1: "A szék az asztal mellett van.",

    t2: "Metafora", tx2: "A metafora egy szövegtípus, ahol egy dolgot egy másik dologhoz hasonlítunk anélkül, hogy 'mint' vagy 'mintha' szót használnánk.",
    q2: "Melyik mondat metafora?", a2: "Ez az autó olyan gyors, mint egy sólyom.", b2: "Az ő szíve egy kőből kívájt sírkamra volt.", c2: "A fa magas és vékony.", d2: "Az ő ruhája kék.",

    t3: "Hasonlat", tx3: "A hasonlat egy szövegtípus, ahol 'mint' vagy 'mintha' szóval hasonlítunk egy dolgot egy másikhoz.",
    q3: "Melyik mondat hasonlat?", a3: "Az ő szíve egy kőből kívájt sírkamra volt.", b3: "Ez az autó olyan gyors, mint egy sólyom.", c3: "A fa zöld levelű volt.", d3: "Az ő arca szép volt.",

    t4: "Metoníma", tx4: "A metoníma olyan stílusfigura, ahol egy dolog helyett a vele szorosan kapcsolódó másik dolgot használjuk.",
    q4: "Melyik mondat metoníma?", a4: "Az ő szemei olyan kékek voltak, mint az ég.", b4: "Az egész város hallotta a hírt.", c4: "A fa alatt feküdt.", d4: "Az ő ruhája szép volt.",

    t5: "Alliteráció", tx5: "Az alliteráció az ugyanazzal a hangzóval kezdődő szavak ismétlésének stílusfigurája.",
    q5: "Melyik mondat alliteráció?", a5: "Az ő arca szép és vidám volt.", b5: "A szív sok szeretetet szétszórt szét.", c5: "Az autó az út mellett parkolt.", d5: "A kutya az udvaron volt.",
  },
  de: {
    t1: "Stilfunktionen", tx1: "Der Stil zeigt, wie sich das Schreiben zum Leser verhält. Literarischer, wissenschaftlicher und gesprochener Stil dienen verschiedenen Zwecken.",
    q1: "Welcher Text hat literarischen Stil?", a1: "Das Leben ist wie ein alter, verrosteter Schlüssel, der ein geheimes Zimmer öffnet.", b1: "Das Blut enthält Cu2+-Ionen.", c1: "Morgen treffen wir uns vor der Schule.", d1: "Der Stuhl steht neben dem Tisch.",

    t2: "Metapher", tx2: "Eine Metapher ist eine Stilfigur, in der wir einen Gegenstand mit einem anderen vergleichen, ohne 'wie' oder 'als ob' zu verwenden.",
    q2: "Welcher Satz ist eine Metapher?", a2: "Dieses Auto ist so schnell wie ein Falke.", b2: "Sein Herz war eine Grabkammer, die aus Stein gemeißelt war.", c2: "Der Baum ist groß und dünn.", d2: "Ihr Kleid war blau.",

    t3: "Vergleich", tx3: "Ein Vergleich ist eine Stilfigur, bei der wir mit 'wie' oder 'als ob' einen Gegenstand mit einem anderen vergleichen.",
    q3: "Welcher Satz ist ein Vergleich?", a3: "Sein Herz war eine Grabkammer, die aus Stein gemeißelt war.", b3: "Dieses Auto ist so schnell wie ein Falke.", c3: "Der Baum hatte grüne Blätter.", d3: "Ihr Gesicht war schön.",

    t4: "Metonymie", tx4: "Die Metonymie ist eine Stilfigur, bei der wir einen Gegenstand durch einen anderen ersetzen, der damit eng verbunden ist.",
    q4: "Welcher Satz ist eine Metonymie?", a4: "Seine Augen waren so blau wie der Himmel.", b4: "Die ganze Stadt hörte die Nachricht.", c4: "Der Baum lag unter dem Baum.", d4: "Ihr Kleid war schön.",

    t5: "Alliteration", tx5: "Die Alliteration ist eine Stilfigur, bei der Wörter mit demselben Laut wiederholt werden.",
    q5: "Welcher Satz zeigt Alliteration?", a5: "Sein Gesicht war schön und heiter.", b5: "Das Herz hat viele süße Segnungen verstreut.", c5: "Das Auto parkte neben der Straße.", d5: "Der Hund war im Hof.",
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
          <rect x="15" y="40" width="65" height="80" rx="6" fill="#FF6B9D" opacity="0.3" stroke="#FF6B9D" strokeWidth="2" />
          <text x="47" y="87" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Irodalmi</text>
          <rect x="90" y="40" width="65" height="80" rx="6" fill="#4ECDC4" opacity="0.3" stroke="#4ECDC4" strokeWidth="2" />
          <text x="122" y="87" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Tudományos</text>
          <rect x="165" y="40" width="60" height="80" rx="6" fill="#95E1D3" opacity="0.3" stroke="#95E1D3" strokeWidth="2" />
          <text x="195" y="87" textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">Szóbeli</text>
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
          <circle cx="70" cy="70" r="25" fill="#B44DFF" opacity="0.4" />
          <text x="70" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Obj A</text>
          <text x="125" y="50" fontSize="16" fill="#B44DFF" fontWeight="bold">=</text>
          <circle cx="170" cy="70" r="25" fill="#B44DFF" opacity="0.2" />
          <text x="170" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Obj B</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Metafora</text>
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
          <circle cx="70" cy="70" r="25" fill="#00D4FF" opacity="0.4" />
          <text x="70" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Obj A</text>
          <text x="125" y="55" fontSize="16" fill="#00D4FF" fontWeight="bold">mint</text>
          <circle cx="170" cy="70" r="25" fill="#00D4FF" opacity="0.2" />
          <text x="170" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Obj B</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Hasonlat</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "b3" }],
    },
    {
      type: "mcq",
      infoTitle: "t4",
      infoText: "tx4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a2e4e" />
          <circle cx="80" cy="70" r="20" fill="#FFD700" opacity="0.4" stroke="#FFD700" strokeWidth="2" />
          <text x="80" y="75" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">A</text>
          <path d="M 105 70 L 155 70" stroke="#FFD700" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <circle cx="170" cy="70" r="20" fill="#FF9500" opacity="0.4" stroke="#FF9500" strokeWidth="2" />
          <text x="170" y="75" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">B</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Metoníma</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "b4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <text x="60" y="70" fontSize="20" fill="#95E1D3" fontWeight="bold">S</text>
          <text x="90" y="70" fontSize="20" fill="#95E1D3" fontWeight="bold">S</text>
          <text x="120" y="70" fontSize="20" fill="#95E1D3" fontWeight="bold">S</text>
          <text x="150" y="70" fontSize="20" fill="#95E1D3" fontWeight="bold">S</text>
          <text x="180" y="70" fontSize="20" fill="#95E1D3" fontWeight="bold">S</text>
          <text x="120" y="140" textAnchor="middle" fontSize="12" fill="white/60">Alliteráció</text>
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

export default function StyleBasicsExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
