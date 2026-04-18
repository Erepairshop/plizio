import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "info-gfs-1",
    taskDescription: {
      en: "Fill in the blanks to complete the story about how a computer works.",
      de: "Fülle die Lücken aus, um die Geschichte über die Funktionsweise eines Computers zu vervollständigen.",
      hu: "Egészítsd ki a hiányzó szavakat a számítógép működéséről szóló történetben.",
      ro: "Completează spațiile libere pentru a termina povestea despre cum funcționează un computer."
    },
    story: {
      en: "A computer takes information through {{0}} devices like a keyboard. This information is processed by the {{1}}, which is the 'brain' of the computer. While working, the computer uses {{2}} for temporary storage. Finally, it shows the results on {{3}} devices like a monitor.",
      de: "Ein Computer nimmt Informationen über {{0}}-Geräte wie eine Tastatur auf. Diese Informationen werden von der {{1}} verarbeitet, die das 'Gehirn' des Computers ist. Während der Arbeit nutzt der Computer {{2}} als Zwischenspeicher. Schließlich zeigt er die Ergebnisse auf {{3}}-Geräten wie einem Monitor an.",
      hu: "A számítógép {{0}} eszközökön, például billentyűzeten keresztül fogadja az információkat. Ezt az információt a {{1}} dolgozza fel, amely a számítógép 'agya'. Munka közben a számítógép {{2}} használ ideiglenes tárolásra. Végül az eredményeket {{3}} eszközökön, például monitoron jeleníti meg.",
      ro: "Un computer preia informații prin dispozitive de {{0}}, cum ar fi o tastatură. Această informație este procesată de {{1}}, care este 'creierul' computerului. În timp ce lucrează, computerul folosește {{2}} pentru stocare temporară. În cele din urmă, afișează rezultatele pe dispozitive de {{3}}, cum ar fi un monitor."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "input",
        options: [
          { id: "input", label: { en: "input", de: "Eingabe", hu: "bemeneti", ro: "intrare" } },
          { id: "output", label: { en: "output", de: "Ausgabe", hu: "kimeneti", ro: "ieșire" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "cpu",
        options: [
          { id: "gpu", label: { en: "GPU", de: "GPU", hu: "GPU", ro: "GPU" } },
          { id: "cpu", label: { en: "CPU", de: "CPU", hu: "CPU", ro: "CPU" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "ram",
        options: [
          { id: "ram", label: { en: "RAM", de: "RAM", hu: "RAM-ot", ro: "RAM" } },
          { id: "hdd", label: { en: "HDD", de: "HDD", hu: "HDD-t", ro: "HDD" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "output",
        options: [
          { id: "input", label: { en: "input", de: "Eingabe", hu: "bemeneti", ro: "intrare" } },
          { id: "output", label: { en: "output", de: "Ausgabe", hu: "kimeneti", ro: "ieșire" } }
        ]
      }
    ]
  }
];
