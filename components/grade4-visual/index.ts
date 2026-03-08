export { default as LengthDrawing } from './LengthDrawing';
export { default as LengthMeasurement } from './LengthMeasurement';
export { default as AnalogClock } from './AnalogClock';
export { default as GridAreaCounter } from './GridAreaCounter';
// Phase 2-4 components are loaded via dynamic imports in SchoolTaskBlock.tsx
// to keep the initial bundle small. They are:
// PlaceValueGrid, FractionPizzaAdder, SymmetryMirror, SequenceBuilder,
// TimelineDuration, NumberLineRounding, AngleDrawer, CircleDrawer, MoneyCalculator
