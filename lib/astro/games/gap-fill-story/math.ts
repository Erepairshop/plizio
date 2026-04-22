import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "math-gfs-1",
    taskDescription: {
      en: "Fill in the blanks about basic geometry.",
      de: "Fülle die Lücken über die Grundlagen der Geometrie aus.",
      hu: "Egészítsd ki a hiányzó szavakat az alapvető geometriáról.",
      ro: "Completează spațiile libere despre geometria de bază."
    },
    story: {
      en: "A shape with three sides and three angles is called a {{0}}. A square is a special type of {{1}} because it has four equal sides and four right angles. To find the distance around a shape, we calculate its {{2}}. To find the space inside, we calculate its {{3}}.",
      de: "Eine Form mit drei Seiten und drei Winkeln nennt man {{0}}. Ein Quadrat ist eine besondere Art von {{1}}, weil es vier gleich lange Seiten und vier rechte Winkel hat. Um den Abstand um eine Form herum zu bestimmen, berechnen wir ihren {{2}}. Um den Platz im Inneren zu finden, berechnen wir ihren {{3}}.",
      hu: "A három oldallal és három szöggel rendelkező alakzatot {{0}} nevezzük. A négyzet a {{1}} egy speciális típusa, mert négy egyenlő oldala és négy derékszöge van. Az alakzat kerületének meghatározásához a {{2}} számoljuk ki. A belső terület kiszámításához a {{3}} határozzuk meg.",
      ro: "O formă cu trei laturi și trei unghiuri se numește {{0}}. Un pătrat este un tip special de {{1}} deoarece are patru laturi egale și patru unghiuri drepte. Pentru a găsi distanța din jurul unei forme, calculăm {{2}} acesteia. Pentru a găsi spațiul din interior, îi calculăm {{3}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "triangle",
        options: [
          { id: "triangle", label: { en: "triangle", de: "Dreieck", hu: "háromszögnek", ro: "triunghi" } },
          { id: "circle", label: { en: "circle", de: "Kreis", hu: "körnek", ro: "cerc" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "quadrilateral",
        options: [
          { id: "quadrilateral", label: { en: "quadrilateral", de: "Viereck", hu: "négyszög", ro: "patrulater" } },
          { id: "pentagon", label: { en: "pentagon", de: "Fünfeck", hu: "ötszög", ro: "pentagon" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "perimeter",
        options: [
          { id: "perimeter", label: { en: "perimeter", de: "Umfang", hu: "kerületet", ro: "perimetrul" } },
          { id: "volume", label: { en: "volume", de: "Volumen", hu: "térfogatot", ro: "volumul" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "area",
        options: [
          { id: "area", label: { en: "area", de: "Flächeninhalt", hu: "területet", ro: "aria" } },
          { id: "weight", label: { en: "weight", de: "Gewicht", hu: "súlyt", ro: "greutatea" } }
        ]
      }
    ]
  }
];
