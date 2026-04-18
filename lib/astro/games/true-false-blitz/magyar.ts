import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "mag-tf-1",
    taskDescription: {
      en: "True or False?",
      de: "Wahr oder Falsch?",
      hu: "Igaz vagy Hamis?",
      ro: "Adevărat sau Fals?"
    },
    statements: [
      {
        id: "s1",
        text: { en: "Water is an element.", de: "Wasser ist ein Element.", hu: "A víz egy elem.", ro: "Apa este un element." },
        isTrue: false,
        explanation: { en: "Water is a compound (H2O).", de: "Wasser ist eine Verbindung (H2O).", hu: "A víz egy vegyület (H2O).", ro: "Apa este un compus (H2O)." }
      },
      {
        id: "s2",
        text: { en: "Oxygen is a gas.", de: "Sauerstoff ist ein Gas.", hu: "Az oxigén gáz.", ro: "Oxigenul este un gaz." },
        isTrue: true,
        explanation: { en: "Oxygen is a gas at room temperature.", de: "Sauerstoff ist bei Raumtemperatur gasförmig.", hu: "Az oxigén szobahőmérsékleten gáz halmazállapotú.", ro: "Oxigenul este un gaz la temperatura camerei." }
      },
      {
        id: "s3",
        text: { en: "Atoms are the building blocks of matter.", de: "Atome sind die Bausteine der Materie.", hu: "Az atomok az anyag építőkövei.", ro: "Atomii sunt unitățile de bază ale materiei." },
        isTrue: true,
        explanation: { en: "All matter is composed of atoms.", de: "Alle Materie besteht aus Atomen.", hu: "Minden anyag atomokból áll.", ro: "Toată materia este compusă din atomi." }
      }
    ]
  },
  {
    id: "mag-tf-2",
    taskDescription: {
      en: "Acids and Bases",
      de: "Säuren und Basen",
      hu: "Savak és lúgok",
      ro: "Acizi și baze"
    },
    statements: [
      {
        id: "s1",
        text: { en: "Acids have a pH greater than 7.", de: "Säuren haben einen pH-Wert größer als 7.", hu: "A savak pH-értéke nagyobb, mint 7.", ro: "Acizii au un pH mai mare de 7." },
        isTrue: false,
        explanation: { en: "Acids have a pH less than 7.", de: "Säuren haben einen pH-Wert unter 7.", hu: "A savak pH-értéke kisebb, mint 7.", ro: "Acizii au un pH mai mic de 7." }
      },
      {
        id: "s2",
        text: { en: "Bases feel slippery (like soap).", de: "Basen fühlen sich schlüpfrig an (wie Seife).", hu: "A lúgok tapintása csúszós (mint a szappané).", ro: "Bazele se simt alunecoase (ca săpunul)." },
        isTrue: true,
        explanation: { en: "Many bases react with oils on skin to form soap.", de: "Viele Basen reagieren mit Hautfetten zu Seife.", hu: "Sok lúg szappanná alakítja a bőrön lévő zsírokat.", ro: "Multe baze reacționează cu uleiurile de pe piele pentru a forma săpun." }
      }
    ]
  },
  {
    id: "mag-tf-3",
    taskDescription: {
      en: "Matter and Changes",
      de: "Materie und Änderungen",
      hu: "Anyag és változások",
      ro: "Materia și schimbările"
    },
    statements: [
      {
        id: "s1",
        text: { en: "Melting ice is a chemical change.", de: "Eis schmelzen ist eine chemische Änderung.", hu: "A jég olvadása kémiai változás.", ro: "Topirea gheții este o schimbare chimică." },
        isTrue: false,
        explanation: { en: "Melting is a physical change, as the substance remains water.", de: "Schmelzen ist eine physikalische Änderung, da der Stoff Wasser bleibt.", hu: "Az olvadás fizikai változás, mivel az anyag víz marad.", ro: "Topirea este o schimbare fizică, deoarece substanța rămâne apă." }
      },
      {
        id: "s2",
        text: { en: "Burning wood is a chemical change.", de: "Holz brennen ist eine chemische Änderung.", hu: "A fa égése kémiai változás.", ro: "Arderea lemnului este o schimbare chimică." },
        isTrue: true,
        explanation: { en: "Burning creates new substances like ash and smoke.", de: "Brennen erzeugt neue Stoffe wie Asche und Rauch.", hu: "Az égés során új anyagok keletkeznek, például hamu és füst.", ro: "Arderea creează substanțe noi, cum ar fi cenușa și fumul." }
      }
    ]
  }
];
