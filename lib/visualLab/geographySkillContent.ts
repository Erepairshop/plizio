import "@/lib/geographieRegistration";

import { K5_CURRICULUM, getK5Questions } from "@/lib/geographieCurriculum5";
import { K6_CURRICULUM, getK6Questions } from "@/lib/geographieCurriculum6";
import { K7_CURRICULUM, getK7Questions } from "@/lib/geographieCurriculum7";
import { K8_CURRICULUM, getK8Questions } from "@/lib/geographieCurriculum8";
import type { CurriculumMCQ, CurriculumQuestion } from "@/lib/curriculumTypes";
import type { GeographieTheme } from "@/lib/geographieCurriculumShared";
import type { GeographyLevel, GeographySkillGameId } from "./geographyCurriculum";
import { buildGeographyDataRounds } from "./geographyDataRounds";

export type GeographySkillLang = "de" | "en" | "hu" | "ro";

export interface GeographySkillRound {
  id: string;
  gameId: GeographySkillGameId;
  grade: 5 | 6 | 7 | 8;
  level: GeographyLevel;
  title: string;
  instruction: string;
  context: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

type Grade = GeographySkillRound["grade"];

const CURRICULA: Record<Grade, GeographieTheme[]> = {
  5: K5_CURRICULUM,
  6: K6_CURRICULUM,
  7: K7_CURRICULUM,
  8: K8_CURRICULUM,
};

const GET_QUESTIONS: Record<Grade, (topicIds: string[], lang: string, count: number) => CurriculumQuestion[]> = {
  5: getK5Questions,
  6: getK6Questions,
  7: getK7Questions,
  8: getK8Questions,
};

const TOPICS: Record<Grade, Record<GeographySkillGameId, string[]>> = {
  5: {
    "karten-kompass": ["compass_directions", "map_symbols", "globe_vs_map", "scale_basics"],
    "landschaft-detektiv": ["continents_oceans", "earth_layers", "lowlands_north", "central_uplands", "alps_foothills", "europe_mountains_rivers"],
    "klima-labor": ["weather_elements", "zones_light", "europe_climates", "coasts_north_baltic"],
    "weltregionen-atlas": ["germany_states", "europe_countries_capitals", "europe_mountains_rivers", "eu_basics"],
    "mensch-raum-netz": ["village_life", "city_functions", "agriculture_basics", "industry_zones"],
    "geo-daten-check": ["compass_directions", "map_symbols", "scale_basics", "city_functions", "europe_countries_capitals"],
    "zukunfts-planer": ["national_parks", "waste_recycling", "energy_saving"],
  },
  6: {
    "karten-kompass": ["atlas_usage", "contour_lines", "gps_gis_basics", "time_zones"],
    "landschaft-detektiv": ["eu_mountain_ranges", "eu_rivers_seas", "rivers_life", "glaciers_ice", "ocean_currents"],
    "klima-labor": ["climate_zones_basics", "temperate_zone", "tropical_zone", "subtropical_zone", "polar_zone", "vegetation_zones", "climate_zones_eu"],
    "weltregionen-atlas": ["eu_geography", "central_europe_neighbors", "northern_europe", "western_europe", "southern_europe", "eastern_europe", "balkans"],
    "mensch-raum-netz": ["population_europe", "eu_economy", "eu_industry", "transport_europe", "mediterranean_farming", "food_supply_chains", "city_trips"],
    "geo-daten-check": ["contour_lines", "time_zones", "population_europe", "transport_europe", "soil_types", "water_cycle_detailed"],
    "zukunfts-planer": ["water_scarcity", "organic_farming", "glaciers_ice", "water_cycle_detailed"],
  },
  7: {
    "karten-kompass": ["climate_graphs_analysis", "population_density_global", "usa_landscapes", "monsoon_mechanics"],
    "landschaft-detektiv": ["plate_tectonics", "earthquakes_measuring", "volcanism_types", "mountain_formation", "usa_landscapes", "japan_hazards_high_tech"],
    "klima-labor": ["atmosphere_layers", "global_wind_systems", "high_low_pressure", "climate_graphs_analysis", "monsoon_mechanics", "desertification_sahel"],
    "weltregionen-atlas": ["usa_landscapes", "canada_overview", "monsoon_mechanics", "china_rise_economy", "india_population_dev", "japan_hazards_high_tech"],
    "mensch-raum-netz": ["population_density_global", "demographic_transition", "migration_push_pull", "urbanization_megacities", "belt_system_agriculture", "silicon_valley_high_tech", "china_rise_economy"],
    "geo-daten-check": ["earthquakes_measuring", "climate_graphs_analysis", "population_density_global", "demographic_transition", "global_warming_basics"],
    "zukunfts-planer": ["global_warming_basics", "tropical_rainforest_destruction", "desertification_sahel", "ocean_pollution_plastic", "migration_push_pull", "urbanization_megacities"],
  },
  8: {
    "karten-kompass": ["world_trade_routes", "locational_factors", "fluvial_landforms", "glacial_landforms", "aeolian_landforms"],
    "landschaft-detektiv": ["weathering_erosion", "fluvial_landforms", "glacial_landforms", "aeolian_landforms", "andes_mining_climate", "australia_outback_resources"],
    "klima-labor": ["africa_climate_zones", "amazon_rainforest_use", "andes_mining_climate", "great_barrier_reef_env", "antarctica_research", "oceania_islands_threat"],
    "weltregionen-atlas": ["brazil_economic_power", "central_america_islands", "africa_climate_zones", "africa_megacities_dev", "australia_outback_resources", "oceania_islands_threat", "antarctica_research"],
    "mensch-raum-netz": ["economic_sectors", "locational_factors", "world_trade_routes", "globalization_impact", "africa_megacities_dev", "future_cities_planning"],
    "geo-daten-check": ["economic_sectors", "world_trade_routes", "locational_factors", "hunger_resource_conflict", "digitalization_world", "future_cities_planning"],
    "zukunfts-planer": ["energy_transition_global", "sustainable_development_goals", "digitalization_world", "future_cities_planning", "great_barrier_reef_env", "oceania_islands_threat", "developing_aid_projects"],
  },
};

const COPY: Record<GeographySkillLang, Record<GeographySkillGameId, { title: string; instruction: string }>> = {
  de: {
    "karten-kompass": { title: "Karten-Kompass", instruction: "Lies Karten, Maßstäbe und räumliche Hinweise immer genauer." },
    "landschaft-detektiv": { title: "Landschafts-Detektiv", instruction: "Erkenne Formen, Prozesse und Zusammenhänge der Erdoberfläche." },
    "klima-labor": { title: "Klima-Labor", instruction: "Untersuche Wetter, Klima und Vegetation mit jedem Level tiefer." },
    "weltregionen-atlas": { title: "Weltregionen-Atlas", instruction: "Ordne Räume, Länder und regionale Besonderheiten sicher ein." },
    "mensch-raum-netz": { title: "Mensch-Raum-Netz", instruction: "Verknüpfe Bevölkerung, Siedlung, Wirtschaft und Verkehr." },
    "geo-daten-check": { title: "Geo-Daten-Check", instruction: "Lies geografische Angaben kritisch und ziehe die richtige Schlussfolgerung." },
    "zukunfts-planer": { title: "Zukunfts-Planer", instruction: "Bewerte Umweltprobleme und nachhaltige Handlungsmöglichkeiten." },
  },
  en: {
    "karten-kompass": { title: "Map Compass", instruction: "Read maps, scales and spatial clues with growing precision." },
    "landschaft-detektiv": { title: "Landscape Detective", instruction: "Recognise landforms, processes and physical connections." },
    "klima-labor": { title: "Climate Lab", instruction: "Investigate weather, climate and vegetation in increasing depth." },
    "weltregionen-atlas": { title: "World Regions Atlas", instruction: "Place regions, countries and their characteristics correctly." },
    "mensch-raum-netz": { title: "Human-Space Network", instruction: "Connect population, settlement, economy and transport." },
    "geo-daten-check": { title: "Geo Data Check", instruction: "Read geographic evidence critically and draw the right conclusion." },
    "zukunfts-planer": { title: "Future Planner", instruction: "Evaluate environmental challenges and sustainable choices." },
  },
  hu: {
    "karten-kompass": { title: "Térképes iránytű", instruction: "Olvasd egyre pontosabban a térképeket, arányokat és térbeli jeleket." },
    "landschaft-detektiv": { title: "Tájdetektív", instruction: "Ismerd fel a felszínformákat, folyamatokat és kapcsolataikat." },
    "klima-labor": { title: "Klímalabor", instruction: "Vizsgáld egyre mélyebben az időjárást, az éghajlatot és a növényzetet." },
    "weltregionen-atlas": { title: "Világrégió-atlasz", instruction: "Helyezd el biztosan a térségeket, országokat és sajátosságaikat." },
    "mensch-raum-netz": { title: "Ember és tér háló", instruction: "Kapcsold össze a népességet, települést, gazdaságot és közlekedést." },
    "geo-daten-check": { title: "Földrajzi adatvizsgáló", instruction: "Értelmezd kritikusan az adatokat, majd vond le a helyes következtetést." },
    "zukunfts-planer": { title: "Jövőtervező", instruction: "Mérlegeld a környezeti gondokat és a fenntartható megoldásokat." },
  },
  ro: {
    "karten-kompass": { title: "Busola hărților", instruction: "Citește din ce în ce mai precis hărți, scări și indicii spațiale." },
    "landschaft-detektiv": { title: "Detectivul peisajelor", instruction: "Recunoaște formele de relief, procesele și legăturile lor." },
    "klima-labor": { title: "Laborator climatic", instruction: "Analizează tot mai profund vremea, clima și vegetația." },
    "weltregionen-atlas": { title: "Atlasul regiunilor lumii", instruction: "Localizează corect regiuni, țări și particularitățile lor." },
    "mensch-raum-netz": { title: "Rețeaua om-spațiu", instruction: "Leagă populația, așezările, economia și transportul." },
    "geo-daten-check": { title: "Verificarea datelor geo", instruction: "Interpretează critic datele și trage concluzia corectă." },
    "zukunfts-planer": { title: "Planificatorul viitorului", instruction: "Evaluează problemele de mediu și soluțiile durabile." },
  },
};

const EXPLANATION: Record<GeographySkillLang, (answer: string, topic: string) => string> = {
  de: (answer, topic) => `Die richtige Lösung ist „${answer}“. Sie gehört zum Themenfeld ${topic}.`,
  en: (answer, topic) => `The correct answer is “${answer}”. It belongs to the topic ${topic}.`,
  hu: (answer, topic) => `A helyes válasz: „${answer}”. A feladat témája: ${topic}.`,
  ro: (answer, topic) => `Răspunsul corect este „${answer}”. Întrebarea aparține temei ${topic}.`,
};

function normalizeGrade(grade: number): Grade {
  return Math.max(5, Math.min(8, Math.floor(grade) || 5)) as Grade;
}

function normalizeLang(lang: string): GeographySkillLang {
  return lang === "de" || lang === "en" || lang === "hu" || lang === "ro" ? lang : "de";
}

function topicsForLevel(allTopics: string[], level: GeographyLevel): string[] {
  const count = Math.max(1, Math.ceil((allTopics.length * level) / 5));
  return allTopics.slice(0, count);
}

function topicLabel(grade: Grade, topicId: string, lang: GeographySkillLang): string {
  for (const theme of CURRICULA[grade]) {
    const subtopic = theme.subtopics.find((item) => item.id === topicId);
    if (!subtopic) continue;
    return subtopic.name[lang] ?? subtopic.name.de ?? topicId;
  }
  return topicId.replaceAll("_", " ");
}

function hash(value: string): number {
  let result = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    result ^= value.charCodeAt(index);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function validMcq(question: CurriculumQuestion): question is CurriculumMCQ {
  if (question.type !== "mcq") return false;
  const candidate = question as CurriculumMCQ;
  return Array.isArray(candidate.options)
    && candidate.options.length >= 2
    && candidate.question.trim().length > 0
    && candidate.options.every((option) => typeof option === "string" && option.trim().length > 0)
    && new Set(candidate.options).size === candidate.options.length
    && Number.isInteger(candidate.correct)
    && candidate.correct >= 0
    && candidate.correct < candidate.options.length;
}

function complexity(question: CurriculumMCQ): number {
  const optionWeight = question.options.reduce((sum, option) => sum + option.length, 0) / question.options.length;
  const reasoningSignals = /warum|weshalb|folge|wirkung|zusammenhang|why|effect|because|miért|hatás|összefügg|de ce|efect|legătur/i.test(question.question)
    ? 35
    : 0;
  return question.question.length + optionWeight + reasoningSignals;
}

const GAME_TOPIC_SIGNAL: Record<GeographySkillGameId, RegExp> = {
  "karten-kompass": /map|kart|compass|kompass|scale|maßstab|atlas|gps|gis|time.zone|zeitzone|density|dichte|route|location|lage/i,
  "landschaft-detektiv": /earth|erde|relief|mountain|berg|river|fluss|glacier|gletscher|volcan|vulkan|tecton|landform|weathering|erosion|ocean/i,
  "klima-labor": /weather|wetter|climate|klima|vegetation|atmosphere|wind|pressure|druck|monsoon|monsun|desert|wüste|polar|ocean.current/i,
  "weltregionen-atlas": /country|land|capital|hauptstadt|state|region|europe|europa|america|amerika|africa|afrika|asia|asien|austral|oceania|antarct|brazil|china|india|japan/i,
  "mensch-raum-netz": /population|bevölkerung|city|stadt|village|dorf|econom|wirtschaft|industry|industrie|transport|verkehr|agricultur|landwirtschaft|migration|urban|trade|handel|global|digital/i,
  "geo-daten-check": /data|daten|scale|maßstab|time.zone|zeitzone|height|höhe|climate.graph|klimadiagramm|density|dichte|population|bevölkerung|sector|sektor|trade|handel/i,
  "zukunfts-planer": /sustain|nachhalt|energy|energie|waste|abfall|recycl|national.park|water|wasser|warming|erwärmung|rainforest|regenwald|pollution|verschmutz|future|zukunft|development|entwicklung|hunger/i,
};

function spread<T>(values: T[], count: number): T[] {
  if (values.length <= count) return [...values];
  return Array.from({ length: count }, (_, index) => values[Math.floor((index * values.length) / count)]);
}

function distinctQuestionBank(gameId: GeographySkillGameId, grade: Grade, lang: GeographySkillLang): CurriculumMCQ[] {
  const primaryTopics = new Set(TOPICS[grade][gameId]);
  const allTopicIds = CURRICULA[grade].flatMap((theme) => theme.subtopics.map((subtopic) => subtopic.id));
  const raw = GET_QUESTIONS[grade](allTopicIds, lang, 5000).filter(validMcq);
  const unique = [...new Map(raw.map((question) => [question.question.toLocaleLowerCase(lang).replace(/\s+/g, " ").trim(), question])).values()]
    .sort((left, right) => complexity(left) - complexity(right) || left.question.localeCompare(right.question, lang));
  const primary = unique.filter((question) => primaryTopics.has(question.subtopic));
  const primaryKeys = new Set(primary.map((question) => question.question));
  const related = unique.filter((question) => !primaryKeys.has(question.question) && GAME_TOPIC_SIGNAL[gameId].test(`${question.topic} ${question.subtopic} ${question.question}`));
  const used = new Set<string>();
  const selected: CurriculumMCQ[] = [];
  const append = (items: CurriculumMCQ[], limit: number) => {
    for (const item of spread(items.filter((question) => !used.has(question.question)), limit)) {
      if (selected.length >= 40 || used.has(item.question)) continue;
      selected.push(item);
      used.add(item.question);
    }
  };
  append(primary, Math.min(40, primary.length));
  append(related, 40 - selected.length);
  append(unique, 40 - selected.length);
  return selected.sort((left, right) => complexity(left) - complexity(right) || left.question.localeCompare(right.question, lang));
}

export function buildGeographySkillRounds(
  gameId: GeographySkillGameId,
  gradeInput: number,
  langInput: string,
  level: GeographyLevel,
  count: number,
): GeographySkillRound[] {
  const grade = normalizeGrade(gradeInput);
  const lang = normalizeLang(langInput);
  if (gameId === "geo-daten-check") {
    return buildGeographyDataRounds(grade, lang, level, count);
  }
  const topicIds = TOPICS[grade][gameId];
  const bank = distinctQuestionBank(gameId, grade, lang);
  if (bank.length === 0) return [];
  const levelStart = (level - 1) * 8;
  const reserved = bank.slice(levelStart, levelStart + 8);
  const levelPool = reserved.length >= count ? reserved : bank;
  const offset = hash(`${gameId}:${grade}:${lang}:${level}:${levelPool.length}`) % levelPool.length;
  const ordered = [...levelPool.slice(offset), ...levelPool.slice(0, offset)];
  const copy = COPY[lang][gameId];

  return Array.from({ length: Math.max(1, count) }, (_, index) => {
    const question = ordered[index % ordered.length];
    const correctAnswer = question.options[question.correct];
    const sourceTopic = question.subtopic || topicIds[index % topicIds.length];
    const context = topicLabel(grade, sourceTopic, lang);
    return {
      id: `${gameId}-g${grade}-l${level}-${hash(`${question.question}:${index}`).toString(36)}`,
      gameId,
      grade,
      level,
      title: copy.title,
      instruction: copy.instruction,
      context,
      prompt: question.question,
      options: [...question.options],
      correctAnswer,
      explanation: EXPLANATION[lang](correctAnswer, context),
    };
  });
}

export function geographySkillCoverage(): Record<Grade, Record<GeographySkillGameId, string[]>> {
  return TOPICS;
}
