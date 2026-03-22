"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Vita fogalma és célja",
    text1: "Vita: több fél közötti beszélgetés, ahol eltérő nézőpontokat, érveket cserélnek. Célja: az igazság felderítése, döntés meghozatala vagy megállapodás elérése.",
    hint1: "A vita az értelmes érvelésre és kölcsönös tiszteletre épül.",
    q1: "Mi a vita elsodleges célja?",
    a1: "Az igazság felderítése", b1: "Másik fél legyőzése minden áron", c1: "Szórakozás", d1: "Vita elkerülése",

    title2: "Érvelés technikái",
    text2: "Érvelés: tények, tapasztalatok, logikai lépések felhasználásával meggyőzünk. Technikák: induktív (konkrétból általános), deduktív (általánosból konkrét), analógia.",
    hint2: "Az érv csak akkor valós, ha logikus és megalapozott.",
    q2: "Mi az induktív érvelés?",
    a2: "Konkrét példákból általános következtetés", b2: "Általánosból konkrétra következtetés", c2: "Hasonlóságok alapján érvelés", d2: "Érzelmi meggyőzés",

    title3: "Cáfolás és kontraargumentation",
    text3: "Cáfolás: az ellenfél érveinek megkérdőjelezése, logikai hibái feltárása. Kontraargumentation: saját érvekkel ellensúlyozás.",
    hint3: "A cáfolás eredményes és tisztességes legyen, ne személyes támadás.",
    q3: "Mi a cáfolás célja a vitában?",
    a3: "Az ellenfél érvei logikai hibáinak feltárása", b3: "Az ellenfél személyességes megsértése", c3: "Hangoskodás", d3: "Téma elkerülése",

    title4: "Kulturált viselkedés a vitában",
    text4: "Kulturált vita: aktív hallgatás, más meghallgatása, az ellenfél megtisztelése, érzelemmentes kommunikáció, közös célok keresése.",
    hint4: "A kulturált vita szabad és produkív párbeszédet tesz lehetővé.",
    q4: "Mi nem része a kulturált vitaviselkedésnek?",
    a4: "Ad hominem támadás (személyes sértés)", b4: "Aktív hallgatás", c4: "Az ellenfél megtisztelése", d4: "Érvelésre alapított válasz",

    title5: "Vita típusai és kontextusa",
    text5: "Vita típusai: vita (eltérő nézőpontok), diskurzus (mélyebb, tudományos), vita (politikai, közösségi). Kontextus: család, iskola, közélet, politika.",
    hint5: "A vita típusa meghatározza a stílust és a kommunikációs normákat.",
    q5: "Milyen kontextusban lehet vita?",
    a5: "Család, iskola, közélet, politika", b5: "Csak politikában", c5: "Csak iskolában", d5: "Soha nem vitatható",
  },
  de: {
    title1: "Konzept und Ziel der Debatte",
    text1: "Debatte: Gespräch zwischen mehreren Parteien mit unterschiedlichen Standpunkten. Ziel: Wahrheit aufdecken, Entscheidung treffen oder Vereinbarung erzielen.",
    hint1: "Debatte basiert auf rationaler Argumentation und gegenseitigem Respekt.",
    q1: "Was ist das primäre Ziel einer Debatte?",
    a1: "Wahrheit aufdecken", b1: "Den Gegner um jeden Preis besiegen", c1: "Unterhaltung", d1: "Debatte vermeiden",

    title2: "Argumentationstechniken",
    text2: "Argumentation: Überzeugung durch Fakten, Erfahrung, logische Schritte. Techniken: induktiv (konkret zu allgemein), deduktiv (allgemein zu konkret), Analogie.",
    hint2: "Ein Argument ist nur gültig, wenn es logisch und begründet ist.",
    q2: "Was ist induktive Argumentation?",
    a2: "Allgemeine Schlussfolgerung aus konkreten Beispielen", b2: "Schlussfolgerung von allgemein zu konkret", c2: "Argumentation basierend auf Ähnlichkeiten", d2: "Emotionale Überzeugung",

    title3: "Gegenargument und Kontraargument",
    text3: "Gegenargument: Hinterfragung von Gegenargumenten, Aufdeckung logischer Fehler. Kontraargument: Balancierung mit eigenen Argumenten.",
    hint3: "Widerlegung sollte sachlich sein, kein persönlicher Angriff.",
    q3: "Was ist das Ziel eines Gegenarguments in einer Debatte?",
    a3: "Logische Fehler von Gegenargumenten aufdecken", b3: "Den Gegner persönlich beleidigen", c3: "Lauter sein", d3: "Thema vermeiden",

    title4: "Kulturelles Verhalten in der Debatte",
    text4: "Kultivierte Debatte: aktives Zuhören, den anderen anhören, Gegner respektieren, emotionslose Kommunikation, gemeinsame Ziele suchen.",
    hint4: "Kultivierte Debatte ermöglicht freie und produktive Gespräche.",
    q4: "Was gehört nicht zu kulturellem Debattierverhalten?",
    a4: "Ad-hominem-Angriff (persönliche Beleidigung)", b4: "Aktives Zuhören", c4: "Gegner respektieren", d4: "Begründete Antwort",

    title5: "Arten von Debatten und Kontext",
    text5: "Debatten-Arten: Debatte (unterschiedliche Standpunkte), Diskurs (wissenschaftlich), Diskussion (politisch, gemeinschaftlich). Kontext: Familie, Schule, Öffentlichkeit, Politik.",
    hint5: "Die Art der Debatte bestimmt Stil und Kommunikationsnormen.",
    q5: "In welchem Kontext kann Debatte stattfinden?",
    a5: "Familie, Schule, Öffentlichkeit, Politik", b5: "Nur in Politik", c5: "Nur in Schule", d5: "Nie diskutierbar",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      hintKey: "hint1",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF2D78">💬</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      hintKey: "hint2",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">🔗</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      hintKey: "hint3",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00FF88">⚔️</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      hintKey: "hint4",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FFD700">🤝</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      hintKey: "hint5",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#B44DFF">🎭</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function DebateCultureExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
