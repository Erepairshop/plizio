"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    t1: "Főnevekragozo", tx1: "A főnevek végződésétől függően eltérő ragozási képződnek. A -ban, -ben végződések helyre utalnak.",
    q1: "Melyik szóalak mutatja az 'iskolában' helyet?", a1: "iskolában", b1: "iskola", c1: "iskolát", d1: "iskola nagy",

    t2: "Tulajdonnevekragozo", tx2: "A személyek és helyek nevei is ragozódnak. Például: Péter → Péterrel, Anna → Annára.",
    q2: "Melyik a helyes ragozás 'Péter'-ből?", a2: "Péterrel", b2: "Péter nagy", c2: "Péterban", d2: "Péter vagyis",

    t3: "Többesszám ragazódása", tx3: "A többesszám végződése -ok/-ek/-ik. A ragozás a többes szám után jön. Például: macskák-ban.",
    q3: "Melyik a helyes többesszám ragozása?", a3: "házakban", b3: "házban-ok", c3: "ház-ok-ban", d3: "házak nagy",

    t4: "Nüvesítés ragazódása", tx4: "A névvelő ragok (Dativ, Inesiv) a főnév végéhez adódnak, helyet vagy célt mutatnak.",
    q4: "Melyik szóalak mutatja: 'Annak'?", a4: "Annak", b4: "Annál", c4: "Anna neki", d4: "Annára",

    t5: "Ragozás alkalmazása", tx5: "A főnevek ragozása lehetővé teszi a szövegértést. Gyakorold a ragozást!",
    q5: "Válassz helyes ragozást! 'Apa ___'", a5: "apának", b5: "apákat", c5: "apájában", d5: "apa nagy",
  },
  de: {
    t1: "Nomendeklination", tx1: "Die Substantive werden je nach Wortendung unterschiedlich gebeugt. Die Endungen -ban, -ben zeigen einen Ort.",
    q1: "Welche Wortform zeigt den Ort 'Schule'?", a1: "Schulah", b1: "Schule", c1: "Schulen", d1: "Schule groß",

    t2: "Nomendeklination Eigennamen", tx2: "Personen- und Ortsnamen werden auch gebeugt. Zum Beispiel: Peter → Peter mit, Anna → zu Anna.",
    q2: "Welche Beugung ist richtig von 'Peter'?", a2: "Peter mit", b2: "Peter groß", c2: "Peterin", d2: "Peter heißt",

    t3: "Pluralbeugung", tx3: "Die Pluralendung ist -ok/-ek/-ik. Die Beugung folgt der Pluralform. Zum Beispiel: Katzen-in.",
    q3: "Welche Pluralbeugung ist richtig?", a3: "Häuserin", b3: "Häuser in-ok", c3: "Haus-ok-in", d3: "Häuser groß",

    t4: "Präpositionalbeugung", tx4: "Die Präpositions-Endungen (Dativ, Lokal) werden an das Nomen angehängt und zeigen Ort oder Ziel.",
    q4: "Welche Form zeigt: 'Das'?", a4: "Das", b4: "Dem", c4: "Anna ihm", d4: "Zu Anna",

    t5: "Beugung anwenden", tx5: "Die Nomendeklination ermöglicht Verständnis. Übe die Beugung!",
    q5: "Wähle richtige Beugung! 'Vater ___'", a5: "Vaterlich", b5: "Väter", c5: "Vaterath", d5: "Vater groß",
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
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a3a52" />
          <circle cx="120" cy="50" r="18" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="120" y="58" textAnchor="middle" fontSize="20" fill="#4ECDC4">📚</text>
          <rect x="50" y="90" width="40" height="40" rx="4" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="70" y="115" textAnchor="middle" fontSize="9" fill="#4ECDC4" fontWeight="bold">iskola</text>
          <rect x="130" y="90" width="60" height="40" rx="4" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="160" y="115" textAnchor="middle" fontSize="9" fill="#4ECDC4" fontWeight="bold">iskolában</text>
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
          <circle cx="70" cy="80" r="20" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="70" y="88" textAnchor="middle" fontSize="12" fill="#B44DFF" fontWeight="bold">Péter</text>
          <text x="120" y="90" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">→</text>
          <circle cx="170" cy="80" r="20" fill="none" stroke="#B44DFF" strokeWidth="2" />
          <text x="170" y="88" textAnchor="middle" fontSize="12" fill="#B44DFF" fontWeight="bold">Péterrel</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "t3",
      infoText: "tx3",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#0f3460" />
          <text x="30" y="60" fontSize="12" fill="#FF6B9D" fontWeight="bold">ház →</text>
          <text x="30" y="80" fontSize="12" fill="#FF6B9D" fontWeight="bold">házak →</text>
          <text x="30" y="100" fontSize="12" fill="#FF6B9D" fontWeight="bold">házakban</text>
          <rect x="130" y="40" width="100" height="100" rx="8" fill="none" stroke="#FF6B9D" strokeWidth="2" />
          <text x="180" y="95" textAnchor="middle" fontSize="11" fill="#FF6B9D" fontWeight="bold">Ragozás</text>
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
          <circle cx="60" cy="80" r="20" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="60" y="88" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Anna</text>
          <text x="110" y="90" textAnchor="middle" fontSize="14" fill="#FFD700" fontWeight="bold">→</text>
          <circle cx="160" cy="80" r="20" fill="none" stroke="#4ECDC4" strokeWidth="2" />
          <text x="160" y="88" textAnchor="middle" fontSize="11" fill="#4ECDC4" fontWeight="bold">Annak</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "t5",
      infoText: "tx5",
      svg: () => (
        <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#2a1f3d" />
          <text x="40" y="50" fontSize="11" fill="#95E1D3" fontWeight="bold">apának</text>
          <circle cx="40" cy="65" r="12" fill="#95E1D3" opacity="0.8" />
          <text x="120" y="50" fontSize="11" fill="#95E1D3" fontWeight="bold">apájában</text>
          <circle cx="120" cy="65" r="12" fill="#95E1D3" opacity="0.8" />
          <text x="200" y="50" fontSize="11" fill="#95E1D3" fontWeight="bold">apákat</text>
          <circle cx="200" cy="65" r="12" fill="#95E1D3" opacity="0.8" />
          <text x="120" y="130" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Ragozási formák</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (s: number, t: number) => void;
  onClose?: () => void;
}

export default function NounDeclensionExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
