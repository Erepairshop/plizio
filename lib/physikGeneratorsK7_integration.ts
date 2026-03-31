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

import { setK7GeneratorMap, type PhysikGeneratorMap } from "./physikCurriculum7";

// Import all existing generator files
import { K7_FORCES_GENERATORS } from "./physikGeneratorsK7_forces";
import { K7_OPTICS_GENERATORS } from "./physikGeneratorsK7_optics";
import { K7_THERMO_GENERATORS } from "./physikGeneratorsK7_thermo";
import { K7_WORK_POWER_GENERATORS } from "./physikGeneratorsK7_workpower";
import { K7_EARTH_SPACE_GENERATORS } from "./physikGeneratorsK7_earthspace";
import { K7_WAVES_GENERATORS } from "./physikGeneratorsK7_waves";
import { K7_MAGNETISM_GENERATORS } from "./physikGeneratorsK7_magnetism";

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
// - basics: force definitions, types
// - speed: BOTH speed_velocity AND acceleration (kinematics)
// - newton: Newton's 1st & 2nd laws
// - friction: friction forces (F=ma applications)

K7_GENERATOR_MAP.mechanics["speed_velocity"] = K7_FORCES_GENERATORS.speed;
K7_GENERATOR_MAP.mechanics["speed_velocity_typing"] = K7_FORCES_GENERATORS.speed_typing;

// Acceleration uses speed (kinematics) + basics (foundational forces)
K7_GENERATOR_MAP.mechanics["acceleration"] = (lang = "en", seed = 0) => [
  ...K7_FORCES_GENERATORS.speed(lang, seed),
  ...K7_FORCES_GENERATORS.basics(lang, seed + 1000)
];
K7_GENERATOR_MAP.mechanics["acceleration_typing"] = (lang = "en", seed = 0) => [
  ...K7_FORCES_GENERATORS.speed_typing(lang, seed),
  ...K7_FORCES_GENERATORS.basics_typing(lang, seed + 1000)
];

// Newton's laws - 1st (basics/inertia), 2nd (friction/f=ma), 3rd (action-reaction)
K7_GENERATOR_MAP.mechanics["newton_first"] = (lang = "en", seed = 0) => [
  ...K7_FORCES_GENERATORS.basics(lang, seed),
  ...K7_FORCES_GENERATORS.newton(lang, seed + 1000)
];
K7_GENERATOR_MAP.mechanics["newton_first_typing"] = K7_FORCES_GENERATORS.newton_typing;

K7_GENERATOR_MAP.mechanics["newton_second"] = (lang = "en", seed = 0) => [
  ...K7_FORCES_GENERATORS.friction(lang, seed),
  ...K7_FORCES_GENERATORS.newton(lang, seed + 1000)
];
K7_GENERATOR_MAP.mechanics["newton_second_typing"] = (lang = "en", seed = 0) => [
  ...K7_FORCES_GENERATORS.friction_typing(lang, seed),
  ...K7_FORCES_GENERATORS.newton_typing(lang, seed + 1000)
];

K7_GENERATOR_MAP.mechanics["newton_third"] = K7_FORCES_GENERATORS.newton;
K7_GENERATOR_MAP.mechanics["newton_third_typing"] = K7_FORCES_GENERATORS.newton_typing;

// WORK & POWER (K7_WORK_POWER_GENERATORS)
K7_GENERATOR_MAP.work_power["work"] = K7_WORK_POWER_GENERATORS.work;
K7_GENERATOR_MAP.work_power["work_typing"] = K7_WORK_POWER_GENERATORS.work_typing;
K7_GENERATOR_MAP.work_power["power"] = K7_WORK_POWER_GENERATORS.power;
K7_GENERATOR_MAP.work_power["power_typing"] = K7_WORK_POWER_GENERATORS.power_typing;
K7_GENERATOR_MAP.work_power["kinetic_energy_calc"] = K7_WORK_POWER_GENERATORS.kinetic_energy_calc;
K7_GENERATOR_MAP.work_power["kinetic_energy_calc_typing"] = K7_WORK_POWER_GENERATORS.kinetic_energy_calc_typing;
K7_GENERATOR_MAP.work_power["potential_energy_calc"] = K7_WORK_POWER_GENERATORS.potential_energy_calc;
K7_GENERATOR_MAP.work_power["potential_energy_calc_typing"] = K7_WORK_POWER_GENERATORS.potential_energy_calc_typing;
K7_GENERATOR_MAP.work_power["mechanical_advantage"] = K7_WORK_POWER_GENERATORS.mechanical_advantage;
K7_GENERATOR_MAP.work_power["mechanical_advantage_typing"] = K7_WORK_POWER_GENERATORS.mechanical_advantage_typing;

// OPTICS (K7_OPTICS_GENERATORS)
K7_GENERATOR_MAP.optics["lenses_convex"] = K7_OPTICS_GENERATORS.lenses_convex;
K7_GENERATOR_MAP.optics["lenses_convex_typing"] = K7_OPTICS_GENERATORS.lenses_convex_typing;
K7_GENERATOR_MAP.optics["lenses_concave"] = K7_OPTICS_GENERATORS.lenses_concave;
K7_GENERATOR_MAP.optics["lenses_concave_typing"] = K7_OPTICS_GENERATORS.lenses_concave_typing;
K7_GENERATOR_MAP.optics["image_formation"] = K7_OPTICS_GENERATORS.image_formation;
K7_GENERATOR_MAP.optics["image_formation_typing"] = K7_OPTICS_GENERATORS.image_formation_typing;
K7_GENERATOR_MAP.optics["eye_optics"] = K7_OPTICS_GENERATORS.eye_optics;
K7_GENERATOR_MAP.optics["eye_optics_typing"] = K7_OPTICS_GENERATORS.eye_optics_typing;
K7_GENERATOR_MAP.optics["optical_instruments"] = K7_OPTICS_GENERATORS.optical_instruments;
K7_GENERATOR_MAP.optics["optical_instruments_typing"] = K7_OPTICS_GENERATORS.optical_instruments_typing;

// THERMAL (uses .combined and ._typing structure)
K7_GENERATOR_MAP.thermal["thermal_expansion"] = K7_THERMO_GENERATORS.expansion.combined;
K7_GENERATOR_MAP.thermal["thermal_expansion_typing"] = K7_THERMO_GENERATORS.expansion._typing;
K7_GENERATOR_MAP.thermal["specific_heat"] = K7_THERMO_GENERATORS.specific_heat.combined;
K7_GENERATOR_MAP.thermal["specific_heat_typing"] = K7_THERMO_GENERATORS.specific_heat._typing;
K7_GENERATOR_MAP.thermal["phase_changes"] = K7_THERMO_GENERATORS.states.combined;
K7_GENERATOR_MAP.thermal["phase_changes_typing"] = K7_THERMO_GENERATORS.states._typing;

// Heat engines uses heat transfer (energy) + mechanical advantage (efficiency proxy)
K7_GENERATOR_MAP.thermal["heat_engines"] = (lang = "en", seed = 0) => [
  ...K7_THERMO_GENERATORS.heat_transfer.combined(lang, seed),
  ...K7_WORK_POWER_GENERATORS.mechanical_advantage(lang, seed + 1000)
];
K7_GENERATOR_MAP.thermal["heat_engines_typing"] = (lang = "en", seed = 0) => [
  ...K7_THERMO_GENERATORS.heat_transfer._typing(lang, seed),
  ...K7_WORK_POWER_GENERATORS.mechanical_advantage_typing(lang, seed + 1000)
];

// MAGNETISM (nested format with .combined and ._typing)
K7_GENERATOR_MAP.magnetism["magnetic_basics"] = K7_MAGNETISM_GENERATORS.basics.combined;
K7_GENERATOR_MAP.magnetism["magnetic_basics_typing"] = K7_MAGNETISM_GENERATORS.basics._typing;
K7_GENERATOR_MAP.magnetism["earth_magnetism"] = K7_MAGNETISM_GENERATORS.earth.combined;
K7_GENERATOR_MAP.magnetism["earth_magnetism_typing"] = K7_MAGNETISM_GENERATORS.earth._typing;
K7_GENERATOR_MAP.magnetism["electromagnets"] = K7_MAGNETISM_GENERATORS.electromagnets.combined;
K7_GENERATOR_MAP.magnetism["electromagnets_typing"] = K7_MAGNETISM_GENERATORS.electromagnets._typing;
K7_GENERATOR_MAP.magnetism["electromagnetic_induction"] = K7_MAGNETISM_GENERATORS.induction.combined;
K7_GENERATOR_MAP.magnetism["electromagnetic_induction_typing"] = K7_MAGNETISM_GENERATORS.induction._typing;

// WAVES
K7_GENERATOR_MAP.waves["wave_equation"] = K7_WAVES_GENERATORS.wave_equation;
K7_GENERATOR_MAP.waves["wave_equation_typing"] = K7_WAVES_GENERATORS.wave_equation_typing;
K7_GENERATOR_MAP.waves["electromagnetic_spectrum"] = K7_WAVES_GENERATORS.electromagnetic_spectrum;
K7_GENERATOR_MAP.waves["electromagnetic_spectrum_typing"] = K7_WAVES_GENERATORS.electromagnetic_spectrum_typing;
K7_GENERATOR_MAP.waves["infrared_uv"] = K7_WAVES_GENERATORS.infrared_uv;
K7_GENERATOR_MAP.waves["infrared_uv_typing"] = K7_WAVES_GENERATORS.infrared_uv_typing;
K7_GENERATOR_MAP.waves["wave_interference"] = K7_WAVES_GENERATORS.wave_interference;
K7_GENERATOR_MAP.waves["wave_interference_typing"] = K7_WAVES_GENERATORS.wave_interference_typing;

// EARTH & SPACE
K7_GENERATOR_MAP.earth_space["gravity_universal"] = K7_EARTH_SPACE_GENERATORS.gravity_universal;
K7_GENERATOR_MAP.earth_space["gravity_universal_typing"] = K7_EARTH_SPACE_GENERATORS.gravity_universal_typing;
K7_GENERATOR_MAP.earth_space["solar_system"] = K7_EARTH_SPACE_GENERATORS.solar_system;
K7_GENERATOR_MAP.earth_space["solar_system_typing"] = K7_EARTH_SPACE_GENERATORS.solar_system_typing;
K7_GENERATOR_MAP.earth_space["orbits"] = K7_EARTH_SPACE_GENERATORS.orbits;
K7_GENERATOR_MAP.earth_space["orbits_typing"] = K7_EARTH_SPACE_GENERATORS.orbits_typing;
K7_GENERATOR_MAP.earth_space["seasons_tides"] = K7_EARTH_SPACE_GENERATORS.seasons_tides;
K7_GENERATOR_MAP.earth_space["seasons_tides_typing"] = K7_EARTH_SPACE_GENERATORS.seasons_tides_typing;
K7_GENERATOR_MAP.earth_space["space_exploration"] = K7_EARTH_SPACE_GENERATORS.space_exploration;
K7_GENERATOR_MAP.earth_space["space_exploration_typing"] = K7_EARTH_SPACE_GENERATORS.space_exploration_typing;

// ─── INITIALIZE CURRICULUM WITH GENERATORS ────────────────────────────────

setK7GeneratorMap(K7_GENERATOR_MAP);

console.log(`[K7 Integration] Registered ${Object.keys(K7_GENERATOR_MAP).length} theme groups for 32 subtopics`);
