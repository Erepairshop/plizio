"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Összetétel írása",
    text1: "Az összetett szavak egy szótőből és egy toldalékból, vagy több szótőből állnak. A magyar helyesírásban az összetett szavakat általában egybe írjuk: édesanya, szeretlek, napszám. Azonban előfordulnak kivételek, amikor különírunk.",
    q1: "Hogyan írjuk az összetett szavakat?",
    a1: "általában egybe",
    b1: "általában különválasztva",
    c1: "kötőjellel",
    d1: "szóközzel",
    q2: "Melyik az összetett szó?",
    a2: "édesanya",
    b2: "anya",
    c2: "anyám",
    d2: "anyai",
    title2: "Szóösszetételek típusai",
    text2: "Az összetételek lehetnek: determinatív (ahol az első szó módosítja a másodikat: „sárgarépa"), koordinatív (ahol mindkét szó egyenrangú: „anya-lánya"), illetve szószerkezet alapján: alárendelő és mellérendelő összetételek.",
    q3: "Mi a determinatív összetétel?",
    a3: "az első szó módosítja a másodikat",
    b3: "mindkét szó egyenrangú",
    c3: "hosszú szavak",
    d3: "rövidítések",
    q4: "Melyik koordinatív összetétel?",
    a4: "anya-lánya",
    b4: "sárgarépa",
    c4: "napszám",
    d4: "szeretlek",
    title3: "Kötőjel használata",
    text3: "A kötőjel helyesen használata fontos a helyesírásban. Kötőjellel írunk: 1) néhány összetételt (különösen ha az első vagy második rész több szóból áll), 2) mellékneveket összekapcsolva, 3) számokat és betűket összekapcsolva.",
    q5: "Mikor használunk kötőjelet?",
    a5: "többszavas összetételekben és melléknevekben",
    b5: "soha",
    c5: "mindig az összetételekben",
    d5: "csak számokban",
    q6: "Melyik helyesen van kötőjellel írva?",
    a6: "angol-magyar szótár",
    b6: "angolmagyar szótár",
    c6: "angol magyar szótár",
    d6: "angol,magyar szótár",
    title4: "Különírás szabályai",
    text4: "Különírunk: 1) szószerkezeteket (pl. „a házam"), 2) bizonyos összetételeket (pl. „sok ember"), 3) szóelői és szóutói képzéseket sok esetben, 4) idegen szavak többségét. A helyesírás néha szubjektív, de az alapvető szabályokat követni kell.",
    q7: "Mit írunk különválasztva?",
    a7: "szószerkezeteket és bizonyos összetételeket",
    b7: "minden szót",
    c7: "csak szótagokat",
    d7: "csak magánhangzókat",
    q8: "Melyik helyesen van különírva?",
    a8: "sok ember",
    b8: "sokeember",
    c8: "sok-ember",
    d8: "sokember",
    title5: "Helyesírási gyakorlat",
    text5: "A jó helyesíráshoz gyakorlás szükséges. Mindig gondolkozz: összetett szó-e, vagy szószerkezet? Kell-e kötőjel? Egyébként is vigyázz a magánhangzóra és mássalhangzó-torlódásra! A rendszeres írási gyakorlat és az alapvető szabályok megtanulása segít fejleszteni a helyesírási készséget.",
    q9: "Mi segít a jó helyesírásban?",
    a9: "rendszeres gyakorlás és szabályok",
    b9: "gyors írás",
    c9: "sok szó megtanulása",
    d9: "betűtípus kiválasztása",
    q10: "Mit kell figyelni összetett szók írásakor?",
    a10: "hogy determinatív vagy koordinatív-e",
    b10: "csak a hosszúságot",
    c10: "csak a hangzást",
    d10: "az előtagot",
  },
  de: {
    title1: "Schreibweise von Zusammensetzungen",
    text1: "Zusammengesetzte Wörter bestehen aus einem Stamm und einem Suffix oder aus mehreren Stämmen. In der ungarischen Rechtschreibung schreiben wir zusammengesetzte Wörter normalerweise zusammen: \"édesanya\", \"szeretlek\", \"napszám\". Es gibt jedoch Ausnahmen, bei denen wir trennen.",
    q1: "Wie schreiben wir zusammengesetzte Wörter?",
    a1: "normalerweise zusammen",
    b1: "normalerweise getrennt",
    c1: "mit Bindestrich",
    d1: "mit Leerzeichen",
    q2: "Welches ist ein zusammengesetztes Wort?",
    a2: "édesanya",
    b2: "anya",
    c2: "anyám",
    d2: "anyai",
    title2: "Typen von Zusammensetzungen",
    text2: "Zusammensetzungen können sein: Determinativverbindung (erstes Wort modifiziert das zweite: \"sárgarépa\"), Koordinativverbindung (beide Wörter sind gleichrangig: \"anya-lánya\").",
    q3: "Was ist eine Determinativverbindung?",
    a3: "das erste Wort modifiziert das zweite",
    b3: "beide Wörter sind gleichrangig",
    c3: "lange Wörter",
    d3: "Abkürzungen",
    q4: "Welches ist eine Koordinativverbindung?",
    a4: "anya-lánya",
    b4: "sárgarépa",
    c4: "napszám",
    d4: "szeretlek",
    title3: "Bindestrichgebrauch",
    text3: "Der korrekte Gebrauch des Bindestrichs ist in der Orthografie wichtig. Wir schreiben mit Bindestrich: 1) einige Zusammensetzungen (besonders wenn der erste oder zweite Teil aus mehreren Wörtern besteht), 2) Adjektive verbinden, 3) Zahlen und Buchstaben verbinden.",
    q5: "Wann verwenden wir einen Bindestrich?",
    a5: "in mehrteiligen Zusammensetzungen und Adjektiven",
    b5: "niemals",
    c5: "immer in Zusammensetzungen",
    d5: "nur in Zahlen",
    q6: "Welches ist mit Bindestrich richtig geschrieben?",
    a6: "angol-magyar szótár",
    b6: "angolmagyar szótár",
    c6: "angol magyar szótár",
    d6: "angol,magyar szótár",
    title4: "Getrenntschreibungsregeln",
    text4: "Wir schreiben getrennt: 1) Wortgruppen (z.B. \"a házam\"), 2) bestimmte Zusammensetzungen (z.B. \"sok ember\"), 3) in vielen Fällen Vorsilben und Nachsilben.",
    q7: "Was schreiben wir getrennt?",
    a7: "Wortgruppen und bestimmte Zusammensetzungen",
    b7: "alle Wörter",
    c7: "nur Silben",
    d7: "nur Vokale",
    q8: "Welches ist richtig getrennt geschrieben?",
    a8: "sok ember",
    b8: "sokeember",
    c8: "sok-ember",
    d8: "sokember",
    title5: "Rechtschreibübung",
    text5: "Gute Rechtschreibung erfordert Übung. Denke immer: ist es ein zusammengesetztes Wort oder eine Wortgruppe? Brauche ich einen Bindestrich? Achte auch auf Vokale und Konsonanten! Regelmäßige Schreibübung hilft bei der Rechtschreibung.",
    q9: "Was hilft bei guter Rechtschreibung?",
    a9: "regelmäßige Übung und Regeln",
    b9: "schnelles Schreiben",
    c9: "viele Wörter lernen",
    d9: "Schriftart auswählen",
    q10: "Worauf muss man beim Schreiben von Zusammensetzungen achten?",
    a10: "ob es determinativ oder koordinativ ist",
    b10: "nur auf die Länge",
    c10: "nur auf den Klang",
    d10: "nur auf den Anfang",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="30" y="40" width="70" height="80" rx="6" fill="#FF9500" opacity="0.7" />
          <rect x="140" y="40" width="70" height="80" rx="6" fill="#FF9500" opacity="0.7" />
          <text x="65" y="85" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">szó1</text>
          <text x="175" y="85" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">szó2</text>
          <text x="120" y="135" textAnchor="middle" fontSize="12" fill="#FF9500" fontWeight="bold">szó1szó2</text>
        </svg>
      ),
      questions: [
        { question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" },
        { question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="20" y="35" width="100" height="90" rx="6" fill="#00D4FF" opacity="0.8" />
          <text x="70" y="65" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Determinatív</text>
          <text x="70" y="85" textAnchor="middle" fontSize="10" fill="#fff">(módosít)</text>
          <rect x="140" y="35" width="100" height="90" rx="6" fill="#10B981" opacity="0.8" />
          <text x="190" y="65" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Koordinatív</text>
          <text x="190" y="85" textAnchor="middle" fontSize="10" fill="#fff">(egyenrangú)</text>
        </svg>
      ),
      questions: [
        { question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" },
        { question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="60" y="50" textAnchor="middle" fontSize="16" fill="#FF2D78" fontWeight="bold">szó-szó</text>
          <text x="60" y="80" textAnchor="middle" fontSize="11" fill="#fff">Kötőjel</text>
          <text x="180" y="50" textAnchor="middle" fontSize="16" fill="#00D4FF" fontWeight="bold">szó szó</text>
          <text x="180" y="80" textAnchor="middle" fontSize="11" fill="#fff">Szóköz</text>
        </svg>
      ),
      questions: [
        { question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" },
        { question: "q6", choices: ["a6", "b6", "c6", "d6"], answer: "a6" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <rect x="30" y="40" width="80" height="90" rx="6" fill="#FFD700" opacity="0.7" />
          <text x="70" y="70" textAnchor="middle" fontSize="12" fill="#000" fontWeight="bold">Szerkezet</text>
          <text x="70" y="90" textAnchor="middle" fontSize="10" fill="#000">Kifejezés</text>
          <rect x="140" y="40" width="80" height="90" rx="6" fill="#FF2D78" opacity="0.7" />
          <text x="180" y="70" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Összetétel</text>
          <text x="180" y="90" textAnchor="middle" fontSize="10" fill="#fff">Szó</text>
        </svg>
      ),
      questions: [
        { question: "q7", choices: ["a7", "b7", "c7", "d7"], answer: "a7" },
        { question: "q8", choices: ["a8", "b8", "c8", "d8"], answer: "a8" },
      ],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="16" fill="#1a1a3e" />
          <circle cx="70" cy="70" r="20" fill="none" stroke="#FF9500" strokeWidth="2" />
          <text x="70" y="75" textAnchor="middle" fontSize="14" fill="#FF9500" fontWeight="bold">✓</text>
          <circle cx="120" cy="50" r="20" fill="none" stroke="#10B981" strokeWidth="2" />
          <text x="120" y="55" textAnchor="middle" fontSize="14" fill="#10B981" fontWeight="bold">✓</text>
          <circle cx="170" cy="70" r="20" fill="none" stroke="#00D4FF" strokeWidth="2" />
          <text x="170" y="75" textAnchor="middle" fontSize="14" fill="#00D4FF" fontWeight="bold">✓</text>
          <text x="120" y="135" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Helyesírási siker!</text>
        </svg>
      ),
      questions: [
        { question: "q9", choices: ["a9", "b9", "c9", "d9"], answer: "a9" },
        { question: "q10", choices: ["a10", "b10", "c10", "d10"], answer: "a10" },
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

export default function O5SpellingExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
