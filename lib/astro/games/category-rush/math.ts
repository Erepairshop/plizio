import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "math-cr-1",
    durationMs: 30000,
    categories: [
      { id: "c-even", label: { en: "Even", de: "Gerade", hu: "Páros", ro: "Par" }, edge: "top", color: "#E91E63" },
      { id: "c-odd", label: { en: "Odd", de: "Ungerade", hu: "Páratlan", ro: "Impar" }, edge: "bottom", color: "#03A9F4" }
    ],
    items: [
      { id: "i1", label: { en: "2", de: "2", hu: "2", ro: "2" }, correctCategoryId: "c-even" },
      { id: "i2", label: { en: "7", de: "7", hu: "7", ro: "7" }, correctCategoryId: "c-odd" },
      { id: "i3", label: { en: "14", de: "14", hu: "14", ro: "14" }, correctCategoryId: "c-even" },
      { id: "i4", label: { en: "21", de: "21", hu: "21", ro: "21" }, correctCategoryId: "c-odd" },
      { id: "i5", label: { en: "36", de: "36", hu: "36", ro: "36" }, correctCategoryId: "c-even" },
      { id: "i6", label: { en: "45", de: "45", hu: "45", ro: "45" }, correctCategoryId: "c-odd" }
    ]
  },
  {
    id: "math-cr-2",
    durationMs: 30000,
    categories: [
      { id: "c-prime", label: { en: "Prime", de: "Primzahl", hu: "Prímszám", ro: "Prim" }, edge: "left", color: "#4CAF50" },
      { id: "c-composite", label: { en: "Composite", de: "Zusammengesetzt", hu: "Összetett", ro: "Compus" }, edge: "right", color: "#FFC107" }
    ],
    items: [
      { id: "i1", label: { en: "2", de: "2", hu: "2", ro: "2" }, correctCategoryId: "c-prime" },
      { id: "i2", label: { en: "4", de: "4", hu: "4", ro: "4" }, correctCategoryId: "c-composite" },
      { id: "i3", label: { en: "11", de: "11", hu: "11", ro: "11" }, correctCategoryId: "c-prime" },
      { id: "i4", label: { en: "15", de: "15", hu: "15", ro: "15" }, correctCategoryId: "c-composite" },
      { id: "i5", label: { en: "17", de: "17", hu: "17", ro: "17" }, correctCategoryId: "c-prime" },
      { id: "i6", label: { en: "24", de: "24", hu: "24", ro: "24" }, correctCategoryId: "c-composite" }
    ]
  },
  {
    id: "math-cr-3",
    durationMs: 30000,
    categories: [
      { id: "c-tri", label: { en: "Triangle", de: "Dreieck", hu: "Háromszög", ro: "Triunghi" }, edge: "top", color: "#E91E63" },
      { id: "c-quad", label: { en: "Quadrilateral", de: "Viereck", hu: "Négyszög", ro: "Patrulater" }, edge: "bottom", color: "#03A9F4" },
      { id: "c-circle", label: { en: "Circle", de: "Kreis", hu: "Kör", ro: "Cerc" }, edge: "left", color: "#4CAF50" }
    ],
    items: [
      { id: "i1", label: { en: "Square", de: "Quadrat", hu: "Négyzet", ro: "Pătrat" }, correctCategoryId: "c-quad" },
      { id: "i2", label: { en: "Equilateral", de: "Gleichseitig", hu: "Szabályos", ro: "Echilateral" }, correctCategoryId: "c-tri" },
      { id: "i3", label: { en: "Oval", de: "Oval", hu: "Ovális", ro: "Oval" }, correctCategoryId: "c-circle" },
      { id: "i4", label: { en: "Rectangle", de: "Rechteck", hu: "Téglalap", ro: "Dreptunghi" }, correctCategoryId: "c-quad" },
      { id: "i5", label: { en: "Isosceles", de: "Gleichschenklig", hu: "Egyenlő szárú", ro: "Isoscel" }, correctCategoryId: "c-tri" },
      { id: "i6", label: { en: "Ring", de: "Ring", hu: "Gyűrű", ro: "Inel" }, correctCategoryId: "c-circle" }
    ]
  },
  {
    id: "math-cr-4",
    durationMs: 30000,
    categories: [
      { id: "c-3d", label: { en: "3D Shape", de: "3D-Form", hu: "3D alakzat", ro: "Formă 3D" }, edge: "right", color: "#FFC107" },
      { id: "c-2d", label: { en: "2D Shape", de: "2D-Form", hu: "2D alakzat", ro: "Formă 2D" }, edge: "left", color: "#4CAF50" }
    ],
    items: [
      { id: "i1", label: { en: "Cube", de: "Würfel", hu: "Kocka", ro: "Cub" }, correctCategoryId: "c-3d" },
      { id: "i2", label: { en: "Circle", de: "Kreis", hu: "Kör", ro: "Cerc" }, correctCategoryId: "c-2d" },
      { id: "i3", label: { en: "Sphere", de: "Kugel", hu: "Gömb", ro: "Sferă" }, correctCategoryId: "c-3d" },
      { id: "i4", label: { en: "Triangle", de: "Dreieck", hu: "Háromszög", ro: "Triunghi" }, correctCategoryId: "c-2d" },
      { id: "i5", label: { en: "Cylinder", de: "Zylinder", hu: "Henger", ro: "Cilindru" }, correctCategoryId: "c-3d" },
      { id: "i6", label: { en: "Square", de: "Quadrat", hu: "Négyzet", ro: "Pătrat" }, correctCategoryId: "c-2d" }
    ]
  }
];
