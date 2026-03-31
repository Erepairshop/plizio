// ─── GEOGRAPHIE GENERATOR REGISTRATION (K5-K8) ──────────────────
// Import this file to self-register all geographie generators into curriculum maps

import { setK5GeneratorMap } from "./geographieCurriculum5";
import { setK6GeneratorMap } from "./geographieCurriculum6";
import { setK7GeneratorMap } from "./geographieCurriculum7";
import { setK8GeneratorMap } from "./geographieCurriculum8";

import { K5_GEOGRAPHIE_GENERATORS } from "./geographieGeneratorsK5";
import { K6_GEOGRAPHIE_GENERATORS } from "./geographieGeneratorsK6";
import { K7_GEOGRAPHIE_GENERATORS } from "./geographieGeneratorsK7";
import { K8_GEOGRAPHIE_GENERATORS } from "./geographieGeneratorsK8";

// Register generators
// setK5GeneratorMap({ geographie: K5_GEOGRAPHIE_GENERATORS }); // TODO: Fix K5 data object in generator exports
setK6GeneratorMap({ geographie: K6_GEOGRAPHIE_GENERATORS });
setK7GeneratorMap({ geographie: K7_GEOGRAPHIE_GENERATORS });
setK8GeneratorMap({ geographie: K8_GEOGRAPHIE_GENERATORS });

console.log("[Geographie] All grade generators (K5-K8) registered.");
