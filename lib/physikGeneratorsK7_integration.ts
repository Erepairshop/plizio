// ─── K7 PHYSICS GENERATORS INTEGRATION LAYER ──────────────────────────────
// Maps all K7 generator files to curriculum subtopic IDs
// This file serves as the single source of truth for K7 generator wiring
//
// Curriculum structure (32 subtopics):
// - mechanics (5): speed_velocity, acceleration, newton_first, newton_second, newton_third
// - work_power (5): work, power, kinetic_energy_calc, potential_energy_calc, mechanical_advantage
// - optics (5): lenses_convex, lenses_concave, image_formation, eye_optics, optical_instruments
// - thermal (4): thermal_expansion, specific_heat, phase_changes, heat_engines
// - magnetism (4): magnetic_basics, earth_magnetism, electromagnets, electromagnetic_induction
// - waves (4): wave_equation, electromagnetic_spectrum, infrared_uv, wave_interference
// - earth_space (5): gravity_universal, solar_system, orbits, seasons_tides, space_exploration

import type { CurriculumQuestion } from "./curriculumTypes";
import { setK7GeneratorMap, type PhysikGeneratorMap } from "./physikCurriculum7";

// Import all existing generator files
import { K7_FORCES_GENERATORS } from "./physikGeneratorsK7_forces";
import { K7_OPTICS_GENERATORS } from "./physikGeneratorsK7_optics";
import { K7_THERMO_GENERATORS } from "./physikGeneratorsK7_thermo";
import { K7_WORK_POWER_GENERATORS } from "./physikGeneratorsK7_workpower";
import { K7_EARTH_SPACE_GENERATORS } from "./physikGeneratorsK7_earthspace";
import { K7_WAVES_GENERATORS } from "./physikGeneratorsK7_waves";
import { K7_MAGNETISM_GENERATORS } from "./physikGeneratorsK7_magnetism";

// ─── TEMPORARY GENERATORS FOR MISSING SUBTOPICS ────────────────────────────
// These are placeholder implementations - to be replaced with full generators

function createPlaceholder(subtopicId: string): (lang?: string, seed?: number) => CurriculumQuestion[] {
  return (lang = "en", seed = 0) => [
    {
      type: "mcq" as const,
      topic: "placeholder",
      question: `[PLACEHOLDER] ${subtopicId} MCQ question`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 0,
      subtopic: subtopicId,
    },
  ];
}

// ─── BUILD UNIFIED GENERATOR MAP (NESTED STRUCTURE) ─────────────────────────
// The curriculum expects: K7_GENERATOR_MAP[theme][subtopic_id] = generatorFn
// This structure allows the lookup loop to find generators by subtopic ID

const K7_GENERATOR_MAP: PhysikGeneratorMap = {
  mechanics: {},
  work_power: {},
  optics: {},
  thermal: {},
  magnetism: {},
  waves: {},
  earth_space: {},
};

// MECHANICS (forces file)
// Note: K7_FORCES_GENERATORS has mixed content:
// - basics: force definitions, types → acceleration foundational content
// - speed: BOTH speed_velocity AND acceleration (kinematics)
// - newton: Newton's 1st & 2nd laws → newton_first, newton_second
// - friction: friction forces → newton_second (F=ma applications)

// Speed function covers kinematics (speed and acceleration)
K7_GENERATOR_MAP.mechanics["speed_velocity"] = K7_FORCES_GENERATORS.speed || createPlaceholder("speed_velocity");
K7_GENERATOR_MAP.mechanics["speed_velocity_typing"] = K7_FORCES_GENERATORS.speed_typing || createPlaceholder("speed_velocity_typing");
K7_GENERATOR_MAP.mechanics["acceleration"] = K7_FORCES_GENERATORS.speed || createPlaceholder("acceleration");
K7_GENERATOR_MAP.mechanics["acceleration_typing"] = K7_FORCES_GENERATORS.speed_typing || createPlaceholder("acceleration_typing");

// Newton's laws
K7_GENERATOR_MAP.mechanics["newton_first"] = K7_FORCES_GENERATORS.newton || createPlaceholder("newton_first");
K7_GENERATOR_MAP.mechanics["newton_first_typing"] = K7_FORCES_GENERATORS.newton_typing || createPlaceholder("newton_first_typing");
K7_GENERATOR_MAP.mechanics["newton_second"] = (K7_FORCES_GENERATORS.friction || K7_FORCES_GENERATORS.newton) || createPlaceholder("newton_second");
K7_GENERATOR_MAP.mechanics["newton_second_typing"] = (K7_FORCES_GENERATORS.friction_typing || K7_FORCES_GENERATORS.newton_typing) || createPlaceholder("newton_second_typing");
K7_GENERATOR_MAP.mechanics["newton_third"] = K7_FORCES_GENERATORS.newton || createPlaceholder("newton_third");
K7_GENERATOR_MAP.mechanics["newton_third_typing"] = K7_FORCES_GENERATORS.newton_typing || createPlaceholder("newton_third_typing");

// WORK & POWER (K7_WORK_POWER_GENERATORS)
K7_GENERATOR_MAP.work_power["work"] = K7_WORK_POWER_GENERATORS.work || createPlaceholder("work");
K7_GENERATOR_MAP.work_power["work_typing"] = K7_WORK_POWER_GENERATORS.work_typing || createPlaceholder("work_typing");
K7_GENERATOR_MAP.work_power["power"] = K7_WORK_POWER_GENERATORS.power || createPlaceholder("power");
K7_GENERATOR_MAP.work_power["power_typing"] = K7_WORK_POWER_GENERATORS.power_typing || createPlaceholder("power_typing");
K7_GENERATOR_MAP.work_power["kinetic_energy_calc"] = K7_WORK_POWER_GENERATORS.kinetic_energy_calc || createPlaceholder("kinetic_energy_calc");
K7_GENERATOR_MAP.work_power["kinetic_energy_calc_typing"] = K7_WORK_POWER_GENERATORS.kinetic_energy_calc_typing || createPlaceholder("kinetic_energy_calc_typing");
K7_GENERATOR_MAP.work_power["potential_energy_calc"] = K7_WORK_POWER_GENERATORS.potential_energy_calc || createPlaceholder("potential_energy_calc");
K7_GENERATOR_MAP.work_power["potential_energy_calc_typing"] = K7_WORK_POWER_GENERATORS.potential_energy_calc_typing || createPlaceholder("potential_energy_calc_typing");
K7_GENERATOR_MAP.work_power["mechanical_advantage"] = K7_WORK_POWER_GENERATORS.mechanical_advantage || createPlaceholder("mechanical_advantage");
K7_GENERATOR_MAP.work_power["mechanical_advantage_typing"] = K7_WORK_POWER_GENERATORS.mechanical_advantage_typing || createPlaceholder("mechanical_advantage_typing");

// OPTICS (K7_OPTICS_GENERATORS — refactored for K7 curriculum)
K7_GENERATOR_MAP.optics["lenses_convex"] = K7_OPTICS_GENERATORS.lenses_convex || createPlaceholder("lenses_convex");
K7_GENERATOR_MAP.optics["lenses_convex_typing"] = K7_OPTICS_GENERATORS.lenses_convex_typing || createPlaceholder("lenses_convex_typing");
K7_GENERATOR_MAP.optics["lenses_concave"] = K7_OPTICS_GENERATORS.lenses_concave || createPlaceholder("lenses_concave");
K7_GENERATOR_MAP.optics["lenses_concave_typing"] = K7_OPTICS_GENERATORS.lenses_concave_typing || createPlaceholder("lenses_concave_typing");
K7_GENERATOR_MAP.optics["image_formation"] = K7_OPTICS_GENERATORS.image_formation || createPlaceholder("image_formation");
K7_GENERATOR_MAP.optics["image_formation_typing"] = K7_OPTICS_GENERATORS.image_formation_typing || createPlaceholder("image_formation_typing");
K7_GENERATOR_MAP.optics["eye_optics"] = K7_OPTICS_GENERATORS.eye_optics || createPlaceholder("eye_optics");
K7_GENERATOR_MAP.optics["eye_optics_typing"] = K7_OPTICS_GENERATORS.eye_optics_typing || createPlaceholder("eye_optics_typing");
K7_GENERATOR_MAP.optics["optical_instruments"] = K7_OPTICS_GENERATORS.optical_instruments || createPlaceholder("optical_instruments");
K7_GENERATOR_MAP.optics["optical_instruments_typing"] = K7_OPTICS_GENERATORS.optical_instruments_typing || createPlaceholder("optical_instruments_typing");

// THERMAL
K7_GENERATOR_MAP.thermal["thermal_expansion"] = (K7_THERMO_GENERATORS.expansion?.combined) || createPlaceholder("thermal_expansion");
K7_GENERATOR_MAP.thermal["thermal_expansion_typing"] = (K7_THERMO_GENERATORS.expansion?._typing) || createPlaceholder("thermal_expansion_typing");
K7_GENERATOR_MAP.thermal["specific_heat"] = (K7_THERMO_GENERATORS.specific_heat?.combined) || createPlaceholder("specific_heat");
K7_GENERATOR_MAP.thermal["specific_heat_typing"] = (K7_THERMO_GENERATORS.specific_heat?._typing) || createPlaceholder("specific_heat_typing");
K7_GENERATOR_MAP.thermal["phase_changes"] = (K7_THERMO_GENERATORS.states?.combined) || createPlaceholder("phase_changes");
K7_GENERATOR_MAP.thermal["phase_changes_typing"] = (K7_THERMO_GENERATORS.states?._typing) || createPlaceholder("phase_changes_typing");
K7_GENERATOR_MAP.thermal["heat_engines"] = (K7_THERMO_GENERATORS.heat_transfer?.combined) || createPlaceholder("heat_engines");
K7_GENERATOR_MAP.thermal["heat_engines_typing"] = (K7_THERMO_GENERATORS.heat_transfer?._typing) || createPlaceholder("heat_engines_typing");

// MAGNETISM (K7_MAGNETISM_GENERATORS — nested format with .combined and ._typing)
K7_GENERATOR_MAP.magnetism["magnetic_basics"] = (K7_MAGNETISM_GENERATORS.basics?.combined) || createPlaceholder("magnetic_basics");
K7_GENERATOR_MAP.magnetism["magnetic_basics_typing"] = (K7_MAGNETISM_GENERATORS.basics?._typing) || createPlaceholder("magnetic_basics_typing");
K7_GENERATOR_MAP.magnetism["earth_magnetism"] = (K7_MAGNETISM_GENERATORS.earth?.combined) || createPlaceholder("earth_magnetism");
K7_GENERATOR_MAP.magnetism["earth_magnetism_typing"] = (K7_MAGNETISM_GENERATORS.earth?._typing) || createPlaceholder("earth_magnetism_typing");
K7_GENERATOR_MAP.magnetism["electromagnets"] = (K7_MAGNETISM_GENERATORS.electromagnets?.combined) || createPlaceholder("electromagnets");
K7_GENERATOR_MAP.magnetism["electromagnets_typing"] = (K7_MAGNETISM_GENERATORS.electromagnets?._typing) || createPlaceholder("electromagnets_typing");
K7_GENERATOR_MAP.magnetism["electromagnetic_induction"] = (K7_MAGNETISM_GENERATORS.induction?.combined) || createPlaceholder("electromagnetic_induction");
K7_GENERATOR_MAP.magnetism["electromagnetic_induction_typing"] = (K7_MAGNETISM_GENERATORS.induction?._typing) || createPlaceholder("electromagnetic_induction_typing");

// WAVES (K7_WAVES_GENERATORS — wave physics, EM spectrum, interference)
K7_GENERATOR_MAP.waves["wave_equation"] = K7_WAVES_GENERATORS.wave_equation || createPlaceholder("wave_equation");
K7_GENERATOR_MAP.waves["wave_equation_typing"] = K7_WAVES_GENERATORS.wave_equation_typing || createPlaceholder("wave_equation_typing");
K7_GENERATOR_MAP.waves["electromagnetic_spectrum"] = K7_WAVES_GENERATORS.electromagnetic_spectrum || createPlaceholder("electromagnetic_spectrum");
K7_GENERATOR_MAP.waves["electromagnetic_spectrum_typing"] = K7_WAVES_GENERATORS.electromagnetic_spectrum_typing || createPlaceholder("electromagnetic_spectrum_typing");
K7_GENERATOR_MAP.waves["infrared_uv"] = K7_WAVES_GENERATORS.infrared_uv || createPlaceholder("infrared_uv");
K7_GENERATOR_MAP.waves["infrared_uv_typing"] = K7_WAVES_GENERATORS.infrared_uv_typing || createPlaceholder("infrared_uv_typing");
K7_GENERATOR_MAP.waves["wave_interference"] = K7_WAVES_GENERATORS.wave_interference || createPlaceholder("wave_interference");
K7_GENERATOR_MAP.waves["wave_interference_typing"] = K7_WAVES_GENERATORS.wave_interference_typing || createPlaceholder("wave_interference_typing");

// EARTH & SPACE (K7_EARTH_SPACE_GENERATORS)
K7_GENERATOR_MAP.earth_space["gravity_universal"] = K7_EARTH_SPACE_GENERATORS.gravity_universal || createPlaceholder("gravity_universal");
K7_GENERATOR_MAP.earth_space["gravity_universal_typing"] = K7_EARTH_SPACE_GENERATORS.gravity_universal_typing || createPlaceholder("gravity_universal_typing");
K7_GENERATOR_MAP.earth_space["solar_system"] = K7_EARTH_SPACE_GENERATORS.solar_system || createPlaceholder("solar_system");
K7_GENERATOR_MAP.earth_space["solar_system_typing"] = K7_EARTH_SPACE_GENERATORS.solar_system_typing || createPlaceholder("solar_system_typing");
K7_GENERATOR_MAP.earth_space["orbits"] = K7_EARTH_SPACE_GENERATORS.orbits || createPlaceholder("orbits");
K7_GENERATOR_MAP.earth_space["orbits_typing"] = K7_EARTH_SPACE_GENERATORS.orbits_typing || createPlaceholder("orbits_typing");
K7_GENERATOR_MAP.earth_space["seasons_tides"] = K7_EARTH_SPACE_GENERATORS.seasons_tides || createPlaceholder("seasons_tides");
K7_GENERATOR_MAP.earth_space["seasons_tides_typing"] = K7_EARTH_SPACE_GENERATORS.seasons_tides_typing || createPlaceholder("seasons_tides_typing");
K7_GENERATOR_MAP.earth_space["space_exploration"] = K7_EARTH_SPACE_GENERATORS.space_exploration || createPlaceholder("space_exploration");
K7_GENERATOR_MAP.earth_space["space_exploration_typing"] = K7_EARTH_SPACE_GENERATORS.space_exploration_typing || createPlaceholder("space_exploration_typing");

// ─── INITIALIZE CURRICULUM WITH GENERATORS ────────────────────────────────

setK7GeneratorMap(K7_GENERATOR_MAP);

console.log(`[K7 Integration] Registered ${Object.keys(K7_GENERATOR_MAP).length} theme groups for 32 subtopics`);
