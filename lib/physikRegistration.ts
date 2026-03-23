// ─── PHYSIK GENERATOR REGISTRATION (ALL GRADES K5-K8) ──────────────────
// Import this file to self-register all physics generators into curriculum maps

import { setK5GeneratorMap } from "./physikCurriculum5";
import { setK6GeneratorMap } from "./physikCurriculum6";
// K7 self-registers via physikCurriculum7 → physikGeneratorsK7_integration
// K8 needs manual registration
import { setK8GeneratorMap } from "./physikCurriculum8";

// ─── K5 ──────────────────────────────────────────────────────────────────
import { FORCES_GENERATORS } from "./physikGeneratorsK5_forces";
import { ENERGY_GENERATORS } from "./physikGeneratorsK5_energy";
import { LIGHT_GENERATORS } from "./physikGeneratorsK5_light";
import { MAGNETISM_GENERATORS } from "./physikGeneratorsK5_magnetism";
import { SOUND_GENERATORS } from "./physikGeneratorsK5_sound";
import {
  generateTemperatureMCQ, generateTemperatureTyping,
  generateHeatTransferMCQ, generateHeatTransferTyping,
  generateStatesOfMatterMCQ, generateStatesOfMatterTyping,
  generateMeltingBoilingMCQ, generateMeltingBoilingTyping,
} from "./physikGeneratorsK5_heat";

const HEAT_GENERATORS: Record<string, (lang?: string, seed?: number) => any[]> = {
  temperature: (l = "en", s = 0) => [...generateTemperatureMCQ(l, s), ...generateTemperatureTyping(l, s)],
  temperature_mcq: generateTemperatureMCQ,
  temperature_typing: generateTemperatureTyping,
  heat_transfer: (l = "en", s = 0) => [...generateHeatTransferMCQ(l, s), ...generateHeatTransferTyping(l, s)],
  heat_transfer_mcq: generateHeatTransferMCQ,
  heat_transfer_typing: generateHeatTransferTyping,
  states_of_matter: (l = "en", s = 0) => [...generateStatesOfMatterMCQ(l, s), ...generateStatesOfMatterTyping(l, s)],
  states_of_matter_mcq: generateStatesOfMatterMCQ,
  states_of_matter_typing: generateStatesOfMatterTyping,
  melting_boiling: (l = "en", s = 0) => [...generateMeltingBoilingMCQ(l, s), ...generateMeltingBoilingTyping(l, s)],
  melting_boiling_mcq: generateMeltingBoilingMCQ,
  melting_boiling_typing: generateMeltingBoilingTyping,
};

setK5GeneratorMap({
  forces: FORCES_GENERATORS,
  energy: ENERGY_GENERATORS,
  heat: HEAT_GENERATORS,
  light: LIGHT_GENERATORS,
  sound: SOUND_GENERATORS,
  magnetism: MAGNETISM_GENERATORS,
});

// ─── K6 ──────────────────────────────────────────────────────────────────
import { K6_DENSITY_GENERATORS } from "./physikGeneratorsK6_density";
import { K6_ELECTRICITY_GENERATORS } from "./physikGeneratorsK6_electricity";
import { K6_ENERGY_TRANSFER_GENERATORS } from "./physikGeneratorsK6_energy_transfer";
import { K6_MACHINES_GENERATORS } from "./physikGeneratorsK6_machines";
import { K6_PRESSURE_GENERATORS } from "./physikGeneratorsK6_pressure";
import { K6_WAVES_SOUND_GENERATORS } from "./physikGeneratorsK6_waves_sound";

setK6GeneratorMap({
  density: K6_DENSITY_GENERATORS,
  electricity: K6_ELECTRICITY_GENERATORS,
  energy_transfer: K6_ENERGY_TRANSFER_GENERATORS,
  machines: K6_MACHINES_GENERATORS,
  pressure: K6_PRESSURE_GENERATORS,
  waves_sound: K6_WAVES_SOUND_GENERATORS,
});

// ─── K7 (auto-registered via physikCurriculum7 import chain) ──────────
// physikCurriculum7 → import "@/lib/physikGeneratorsK7_integration"
// → registers all K7 generators via setK7GeneratorMap()

// ─── K8 ──────────────────────────────────────────────────────────────────
import { K8_ELECTRICITY_GENERATORS } from "./physikGeneratorsK8_electricity";
import { K8_ELECTROMAGNETISM_GENERATORS } from "./physikGeneratorsK8_electromagnetism";
import { K8_ENERGY_COMMUNICATION_GENERATORS } from "./physikGeneratorsK8_energyCommunication";
import { K8_NUCLEAR_MODERN_GENERATORS } from "./physikGeneratorsK8_nuclearModern";

setK8GeneratorMap({
  electricity: K8_ELECTRICITY_GENERATORS,
  electromagnetism: K8_ELECTROMAGNETISM_GENERATORS,
  energy_communication: K8_ENERGY_COMMUNICATION_GENERATORS,
  nuclear_modern: K8_NUCLEAR_MODERN_GENERATORS,
});
