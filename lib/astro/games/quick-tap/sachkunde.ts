import { QuickTapRound } from "../../../../components/astro-games/views/m2/QuickTapView";

export const sachkundeQuickTapPool: QuickTapRound[] = [
  {
    id: "qt-sk-1",
    taskDescription: {
      de: "Tippe auf alle Säugetiere!",
      hu: "Koppints az összes emlősre!",
      en: "Tap all mammals!",
      ro: "Atinge toate mamiferele!"
    },
    items: [
      { id: "i1", content: "🐶", isTarget: true },
      { id: "i2", content: "🦅", isTarget: false },
      { id: "i3", content: "🐱", isTarget: true },
      { id: "i4", content: "🐍", isTarget: false },
      { id: "i5", content: "🐘", isTarget: true },
      { id: "i6", content: "🦈", isTarget: false },
      { id: "i7", content: "🐭", isTarget: true },
      { id: "i8", content: "🐊", isTarget: false },
      { id: "i9", content: "🐸", isTarget: false },
      { id: "i10", content: "🐻", isTarget: true },
      { id: "i11", content: "🦋", isTarget: false },
      { id: "i12", content: "🐢", isTarget: false },
    ]
  },
  {
    id: "qt-sk-2",
    taskDescription: {
      de: "Tippe auf alle Transportmittel auf dem Wasser!",
      hu: "Koppints az összes vízi járműre!",
      en: "Tap all water transportations!",
      ro: "Atinge toate mijloacele de transport pe apă!"
    },
    items: [
      { id: "i1", content: "⛵", isTarget: true },
      { id: "i2", content: "🚗", isTarget: false },
      { id: "i3", content: "⛴️", isTarget: true },
      { id: "i4", content: "✈️", isTarget: false },
      { id: "i5", content: "🛥️", isTarget: true },
      { id: "i6", content: "🚁", isTarget: false },
      { id: "i7", content: "🚢", isTarget: true },
      { id: "i8", content: "🚂", isTarget: false },
      { id: "i9", content: "🛶", isTarget: true },
      { id: "i10", content: "🚀", isTarget: false },
      { id: "i11", content: "🚲", isTarget: false },
      { id: "i12", content: "🚤", isTarget: true },
    ]
  },
  {
    id: "qt-sk-3",
    taskDescription: {
      de: "Tippe auf alles, was man essen kann!",
      hu: "Koppints arra, amit meg lehet enni!",
      en: "Tap on everything you can eat!",
      ro: "Atinge tot ce se poate mânca!"
    },
    items: [
      { id: "i1", content: "🍎", isTarget: true },
      { id: "i2", content: "⚽", isTarget: false },
      { id: "i3", content: "🍞", isTarget: true },
      { id: "i4", content: "📱", isTarget: false },
      { id: "i5", content: "🍕", isTarget: true },
      { id: "i6", content: "🚗", isTarget: false },
      { id: "i7", content: "🍌", isTarget: true },
      { id: "i8", content: "🎸", isTarget: false },
      { id: "i9", content: "🧀", isTarget: true },
      { id: "i10", content: "👟", isTarget: false },
      { id: "i11", content: "🍔", isTarget: true },
      { id: "i12", content: "📚", isTarget: false },
    ]
  }
];

export const rounds = sachkundeQuickTapPool;