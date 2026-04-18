import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "eng-mcq-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is the chemical symbol for Gold?",
      de: "Was ist das chemische Symbol für Gold?",
      hu: "Mi az arany kémiai jele?",
      ro: "Care este simbolul chimic pentru Aur?"
    },
    options: [
      { en: "Ag", de: "Ag", hu: "Ag", ro: "Ag" },
      { en: "Au", de: "Au", hu: "Au", ro: "Au" },
      { en: "Gd", de: "Gd", hu: "Gd", ro: "Gd" },
      { en: "Go", de: "Go", hu: "Go", ro: "Go" }
    ],
    correctIndex: 1,
    explanation: {
      en: "The symbol for Gold is Au, from the Latin word 'aurum'.",
      de: "Das Symbol für Gold ist Au, vom lateinischen Wort 'aurum'.",
      hu: "Az arany jele az Au, a latin 'aurum' szóból.",
      ro: "Simbolul pentru Aur este Au, de la cuvântul latin 'aurum'."
    }
  },
  {
    id: "eng-mcq-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      de: "Welches Gas nehmen Pflanzen während der Photosynthese aus der Atmosphäre auf?",
      hu: "Milyen gázt nyelnek el a növények a légkörből a fotoszintézis során?",
      ro: "Ce gaz absorb plantele din atmosferă în timpul fotosintezei?"
    },
    options: [
      { en: "Oxygen", de: "Sauerstoff", hu: "Oxigén", ro: "Oxigen" },
      { en: "Nitrogen", de: "Stickstoff", hu: "Nitrogén", ro: "Azot" },
      { en: "Carbon dioxide", de: "Kohlendioxid", hu: "Szén-dioxid", ro: "Dioxid de carbon" },
      { en: "Hydrogen", de: "Wasserstoff", hu: "Hidrogén", ro: "Hidrogen" }
    ],
    correctIndex: 2,
    explanation: {
      en: "Plants absorb carbon dioxide (CO2) to produce glucose and oxygen.",
      de: "Pflanzen nehmen Kohlendioxid (CO2) auf, um Glukose und Sauerstoff zu produzieren.",
      hu: "A növények szén-dioxidot (CO2) nyelnek el, hogy glükózt és oxigént termeljenek.",
      ro: "Plantele absorb dioxidul de carbon (CO2) pentru a produce glucoză și oxigen."
    }
  },
  {
    id: "eng-mcq-3",
    taskDescription: {
      en: "Choose the correct chemical formula.",
      de: "Wähle die richtige chemische Formel.",
      hu: "Válaszd ki a helyes kémiai képletet.",
      ro: "Alege formula chimică corectă."
    },
    question: {
      en: "What is the chemical formula for water?",
      de: "Was ist die chemische Formel für Wasser?",
      hu: "Mi a víz kémiai képlete?",
      ro: "Care este formula chimică a apei?"
    },
    options: [
      { en: "HO2", de: "HO2", hu: "HO2", ro: "HO2" },
      { en: "H2O", de: "H2O", hu: "H2O", ro: "H2O" },
      { en: "O2H", de: "O2H", hu: "O2H", ro: "O2H" },
      { en: "H2O2", de: "H2O2", hu: "H2O2", ro: "H2O2" }
    ],
    correctIndex: 1,
    explanation: {
      en: "A water molecule consists of two hydrogen atoms and one oxygen atom.",
      de: "Ein Wassermolekül besteht aus zwei Wasserstoffatomen und einem Sauerstoffatom.",
      hu: "Egy vízmolekula két hidrogénatomból és egy oxigénatomból áll.",
      ro: "O moleculă de apă este formată din doi atomi de hidrogen și un atom de oxigen."
    }
  },
  {
    id: "eng-mcq-4",
    taskDescription: {
      en: "Identify the state of matter change.",
      de: "Bestimme die Änderung des Aggregatzustands.",
      hu: "Határozd meg a halmazállapot-változást.",
      ro: "Identifică schimbarea stării de agregare."
    },
    question: {
      en: "What is the process called when a liquid turns into a gas?",
      de: "Wie nennt man den Vorgang, bei dem eine Flüssigkeit zu Gas wird?",
      hu: "Hogy hívják azt a folyamatot, amikor egy folyadék gázzá alakul?",
      ro: "Cum se numește procesul prin care un lichid se transformă în gaz?"
    },
    options: [
      { en: "Melting", de: "Schmelzen", hu: "Olvadás", ro: "Topire" },
      { en: "Freezing", de: "Gefrieren", hu: "Fagyás", ro: "Înghețare" },
      { en: "Evaporation", de: "Verdampfung", hu: "Párolgás", ro: "Evaporare" },
      { en: "Condensation", de: "Kondensation", hu: "Lecsapódás", ro: "Condensare" }
    ],
    correctIndex: 2,
    explanation: {
      en: "Evaporation is the process of a substance in a liquid state changing to a gaseous state.",
      de: "Verdampfung ist der Prozess, bei dem ein Stoff vom flüssigen in den gasförmigen Zustand übergeht.",
      hu: "A párolgás az a folyamat, amely során egy folyékony állapotú anyag gázneművé válik.",
      ro: "Evaporarea este procesul prin care o substanță aflată în stare lichidă trece în stare gazoasă."
    }
  }
];
