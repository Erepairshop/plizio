import type { StarholdModuleId, StarholdModuleState } from "./types";

export interface StarholdModuleDefinition {
  id: StarholdModuleId;
  name: string;
  startsOnline: boolean;
  integrity: number;
  load: number;
}

export const STARHOLD_MODULE_DEFINITIONS: StarholdModuleDefinition[] = [
  { id: "reactor", name: "Reactor", startsOnline: true, integrity: 51, load: 72 },
  { id: "logistics", name: "Logistics", startsOnline: false, integrity: 34, load: 0 },
  { id: "core", name: "Core Chamber", startsOnline: false, integrity: 63, load: 12 },
  { id: "sensor", name: "Sensor Node", startsOnline: false, integrity: 47, load: 0 },
];

export function createInitialModules(): Record<StarholdModuleId, StarholdModuleState> {
  return STARHOLD_MODULE_DEFINITIONS.reduce(
    (acc, definition) => {
      acc[definition.id] = {
        id: definition.id,
        name: definition.name,
        online: definition.startsOnline,
        integrity: definition.integrity,
        load: definition.load,
      };
      return acc;
    },
    {} as Record<StarholdModuleId, StarholdModuleState>
  );
}
