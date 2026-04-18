import { ShapeSpotterRound } from "../../../../components/astro-games/views/m2/ShapeSpotterView";

export const rounds: ShapeSpotterRound[] = [
  {
    id: "r1",
    target: { label: { en: "Healthy Food", hu: "Egészséges étel", de: "Gesundes Essen", ro: "Mâncare sănătoasă" } },
    requiredFinds: 3,
    distractors: [
      { id: "d1", isTarget: true, label: { en: "🍎", hu: "🍎", de: "🍎", ro: "🍎" } },
      { id: "d2", isTarget: true, label: { en: "🥕", hu: "🥕", de: "🥕", ro: "🥕" } },
      { id: "d3", isTarget: true, label: { en: "🥦", hu: "🥦", de: "🥦", ro: "🥦" } },
      { id: "d4", isTarget: false, label: { en: "🍔", hu: "🍔", de: "🍔", ro: "🍔" } },
      { id: "d5", isTarget: false, label: { en: "🍟", hu: "🍟", de: "🍟", ro: "🍟" } },
      { id: "d6", isTarget: false, label: { en: "🍩", hu: "🍩", de: "🍩", ro: "🍩" } },
      { id: "d7", isTarget: false, label: { en: "🍫", hu: "🍫", de: "🍫", ro: "🍫" } },
      { id: "d8", isTarget: false, label: { en: "🍕", hu: "🍕", de: "🍕", ro: "🍕" } },
      { id: "d9", isTarget: false, label: { en: "🌭", hu: "🌭", de: "🌭", ro: "🌭" } },
      { id: "d10", isTarget: false, label: { en: "🍦", hu: "🍦", de: "🍦", ro: "🍦" } },
      { id: "d11", isTarget: false, label: { en: "🍰", hu: "🍰", de: "🍰", ro: "🍰" } },
      { id: "d12", isTarget: false, label: { en: "🍬", hu: "🍬", de: "🍬", ro: "🍬" } },
    ]
  },
  {
    id: "r2",
    target: { label: { en: "Trees", hu: "Fák", de: "Bäume", ro: "Copaci" } },
    requiredFinds: 4,
    distractors: [
      { id: "d1", isTarget: true, label: { en: "🌳", hu: "🌳", de: "🌳", ro: "🌳" } },
      { id: "d2", isTarget: true, label: { en: "🌲", hu: "🌲", de: "🌲", ro: "🌲" } },
      { id: "d3", isTarget: true, label: { en: "🌳", hu: "🌳", de: "🌳", ro: "🌳" } },
      { id: "d4", isTarget: true, label: { en: "🌴", hu: "🌴", de: "🌴", ro: "🌴" } },
      { id: "d5", isTarget: false, label: { en: "🌼", hu: "🌼", de: "🌼", ro: "🌼" } },
      { id: "d6", isTarget: false, label: { en: "🍄", hu: "🍄", de: "🍄", ro: "🍄" } },
      { id: "d7", isTarget: false, label: { en: "🌻", hu: "🌻", de: "🌻", ro: "🌻" } },
      { id: "d8", isTarget: false, label: { en: "🌵", hu: "🌵", de: "🌵", ro: "🌵" } },
      { id: "d9", isTarget: false, label: { en: "🌷", hu: "🌷", de: "🌷", ro: "🌷" } },
      { id: "d10", isTarget: false, label: { en: "🌹", hu: "🌹", de: "🌹", ro: "🌹" } },
      { id: "d11", isTarget: false, label: { en: "🥀", hu: "🥀", de: "🥀", ro: "🥀" } },
      { id: "d12", isTarget: false, label: { en: "🌿", hu: "🌿", de: "🌿", ro: "🌿" } },
    ]
  },
  {
    id: "r3",
    target: { label: { en: "Flying Animals", hu: "Repülő állatok", de: "Fliegende Tiere", ro: "Animale zburătoare" } },
    requiredFinds: 5,
    distractors: [
      { id: "d1", isTarget: true, label: { en: "🦅", hu: "🦅", de: "🦅", ro: "🦅" } },
      { id: "d2", isTarget: true, label: { en: "🦇", hu: "🦇", de: "🦇", ro: "🦇" } },
      { id: "d3", isTarget: true, label: { en: "🦋", hu: "🦋", de: "🦋", ro: "🦋" } },
      { id: "d4", isTarget: true, label: { en: "🐝", hu: "🐝", de: "🐝", ro: "🐝" } },
      { id: "d5", isTarget: true, label: { en: "🦉", hu: "🦉", de: "🦉", ro: "🦉" } },
      { id: "d6", isTarget: false, label: { en: "🐈", hu: "🐈", de: "🐈", ro: "🐈" } },
      { id: "d7", isTarget: false, label: { en: "🐕", hu: "🐕", de: "🐕", ro: "🐕" } },
      { id: "d8", isTarget: false, label: { en: "🐄", hu: "🐄", de: "🐄", ro: "🐄" } },
      { id: "d9", isTarget: false, label: { en: "🐖", hu: "🐖", de: "🐖", ro: "🐖" } },
      { id: "d10", isTarget: false, label: { en: "🐘", hu: "🐘", de: "🐘", ro: "🐘" } },
      { id: "d11", isTarget: false, label: { en: "🦒", hu: "🦒", de: "🦒", ro: "🦒" } },
      { id: "d12", isTarget: false, label: { en: "🦏", hu: "🦏", de: "🦏", ro: "🦏" } },
    ]
  }
];
