import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "phys-cr-1",
    durationMs: 30000,
    categories: [
      { id: "c-force", label: { en: "Force", de: "Kraft", hu: "Erő", ro: "Forță" }, edge: "top", color: "#E91E63" },
      { id: "c-energy", label: { en: "Energy", de: "Energie", hu: "Energia", ro: "Energie" }, edge: "bottom", color: "#03A9F4" },
      { id: "c-matter", label: { en: "Matter", de: "Materie", hu: "Anyag", ro: "Materie" }, edge: "left", color: "#4CAF50" },
      { id: "c-wave", label: { en: "Wave", de: "Welle", hu: "Hullám", ro: "Undă" }, edge: "right", color: "#FFC107" }
    ],
    items: [
      { id: "i1", label: { en: "Gravity", de: "Schwerkraft", hu: "Gravitáció", ro: "Gravitație" }, correctCategoryId: "c-force" },
      { id: "i2", label: { en: "Friction", de: "Reibung", hu: "Súrlódás", ro: "Frecare" }, correctCategoryId: "c-force" },
      { id: "i3", label: { en: "Heat", de: "Wärme", hu: "Hő", ro: "Căldură" }, correctCategoryId: "c-energy" },
      { id: "i4", label: { en: "Electricity", de: "Elektrizität", hu: "Elektromosság", ro: "Electricitate" }, correctCategoryId: "c-energy" },
      { id: "i5", label: { en: "Atom", de: "Atom", hu: "Atom", ro: "Atom" }, correctCategoryId: "c-matter" },
      { id: "i6", label: { en: "Sound", de: "Schall", hu: "Hang", ro: "Sunet" }, correctCategoryId: "c-wave" },
      { id: "i7", label: { en: "Light", de: "Licht", hu: "Fény", ro: "Lumină" }, correctCategoryId: "c-wave" },
      { id: "i8", label: { en: "Electron", de: "Elektron", hu: "Elektron", ro: "Electron" }, correctCategoryId: "c-matter" }
    ]
  },
  {
    id: "phys-cr-2",
    durationMs: 30000,
    categories: [
      { id: "c-conductor", label: { en: "Conductor", de: "Leiter", hu: "Vezető", ro: "Conductor" }, edge: "left", color: "#4CAF50" },
      { id: "c-insulator", label: { en: "Insulator", de: "Isolator", hu: "Szigetelő", ro: "Izolator" }, edge: "right", color: "#FFC107" }
    ],
    items: [
      { id: "i1", label: { en: "Copper", de: "Kupfer", hu: "Réz", ro: "Cupru" }, correctCategoryId: "c-conductor" },
      { id: "i2", label: { en: "Silver", de: "Silber", hu: "Ezüst", ro: "Argint" }, correctCategoryId: "c-conductor" },
      { id: "i3", label: { en: "Iron", de: "Eisen", hu: "Vas", ro: "Fier" }, correctCategoryId: "c-conductor" },
      { id: "i4", label: { en: "Wood", de: "Holz", hu: "Fa", ro: "Lemn" }, correctCategoryId: "c-insulator" },
      { id: "i5", label: { en: "Plastic", de: "Plastik", hu: "Műanyag", ro: "Plastic" }, correctCategoryId: "c-insulator" },
      { id: "i6", label: { en: "Glass", de: "Glas", hu: "Üveg", ro: "Sticlă" }, correctCategoryId: "c-insulator" }
    ]
  },
  {
    id: "phys-cr-3",
    durationMs: 30000,
    categories: [
      { id: "c-solid", label: { en: "Solid", de: "Fest", hu: "Szilárd", ro: "Solid" }, edge: "top", color: "#E91E63" },
      { id: "c-liquid", label: { en: "Liquid", de: "Flüssig", hu: "Folyékony", ro: "Lichid" }, edge: "bottom", color: "#03A9F4" },
      { id: "c-gas", label: { en: "Gas", de: "Gasförmig", hu: "Gáz", ro: "Gaz" }, edge: "left", color: "#4CAF50" }
    ],
    items: [
      { id: "i1", label: { en: "Ice", de: "Eis", hu: "Jég", ro: "Gheață" }, correctCategoryId: "c-solid" },
      { id: "i2", label: { en: "Rock", de: "Stein", hu: "Kő", ro: "Piatră" }, correctCategoryId: "c-solid" },
      { id: "i3", label: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" }, correctCategoryId: "c-liquid" },
      { id: "i4", label: { en: "Oil", de: "Öl", hu: "Olaj", ro: "Ulei" }, correctCategoryId: "c-liquid" },
      { id: "i5", label: { en: "Oxygen", de: "Sauerstoff", hu: "Oxigén", ro: "Oxigen" }, correctCategoryId: "c-gas" },
      { id: "i6", label: { en: "Helium", de: "Helium", hu: "Hélium", ro: "Heliu" }, correctCategoryId: "c-gas" }
    ]
  }
];