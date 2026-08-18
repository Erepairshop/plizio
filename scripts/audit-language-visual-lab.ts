import { ASTRO_LANGUAGE_POOLS } from "../lib/visualLab/pools/astroLanguagePools";
import { ASTRO_ENGLISH_LANGUAGE_POOL } from "../lib/visualLab/pools/astroEnglishLanguagePools";
import { ASTRO_MAGYAR_LANGUAGE_POOL } from "../lib/visualLab/pools/astroMagyarLanguagePools";
import { ASTRO_ROMANA_LANGUAGE_POOL } from "../lib/visualLab/pools/astroRomanaLanguagePools";
import { isLanguageGameAvailableForGrade, LANGUAGE_LEVEL_ROUNDS, type LanguageLevel } from "../lib/visualLab/languageCurriculum";
import { buildLanguageSkillRounds, LANGUAGE_SKILL_GAME_IDS, type LanguageSkillLang } from "../lib/visualLab/languageSkillContent";
import { prepareLegacyLanguageRounds } from "../lib/visualLab/prepareLegacyLanguageRounds";
import type { LanguageGradePool } from "../lib/visualLab/languageTypes";

const pools: Record<LanguageSkillLang, Record<number, LanguageGradePool>> = {
  de: ASTRO_LANGUAGE_POOLS.de,
  en: ASTRO_ENGLISH_LANGUAGE_POOL,
  hu: ASTRO_MAGYAR_LANGUAGE_POOL,
  ro: ASTRO_ROMANA_LANGUAGE_POOL,
};

const legacyKeys = {
  "tipp-sturm": "tippSturm",
  "wort-waechter": "wortWaechter",
  "artikel-asteroids": "artikelAsteroids",
  "satzbau-sniper": "satzbauSniper",
  "silben-slicer": "silbenSlicer",
  "verben-vortex": "verbenVortex",
} as const;

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

let generated = 0;
for (const lang of ["de", "hu", "ro", "en"] as LanguageSkillLang[]) {
  for (let grade = 1; grade <= 8; grade += 1) {
    const pool = pools[lang][grade];
    assert(pool, `${lang} grade ${grade}: missing pool`);

    for (const [gameId, key] of Object.entries(legacyKeys)) {
      if (!isLanguageGameAvailableForGrade(gameId, grade)) continue;
      const source = pool[key as keyof typeof pool];
      assert(Array.isArray(source) && source.length > 0, `${lang} grade ${grade} ${gameId}: empty source`);
      for (let level = 1; level <= 5; level += 1) {
        const prepared = prepareLegacyLanguageRounds(gameId, source as never[], level as LanguageLevel);
        assert(prepared.length >= LANGUAGE_LEVEL_ROUNDS[level as LanguageLevel], `${lang} grade ${grade} ${gameId} level ${level}: too few prepared rounds`);
        assert(new Set(prepared.map((round) => round.id)).size === prepared.length, `${lang} grade ${grade} ${gameId}: duplicate prepared ids`);
      }
    }

    for (const gameId of LANGUAGE_SKILL_GAME_IDS) {
      if (!isLanguageGameAvailableForGrade(gameId, grade)) continue;
      for (let level = 1; level <= 5; level += 1) {
        const expected = LANGUAGE_LEVEL_ROUNDS[level as LanguageLevel];
        const rounds = buildLanguageSkillRounds(gameId, lang, grade, level as LanguageLevel, expected);
        assert(rounds.length === expected, `${lang} grade ${grade} ${gameId} level ${level}: wrong count`);
        for (const round of rounds) {
          assert(round.gameId === gameId, `${round.id}: wrong game mechanic id`);
          assert(round.context && round.prompt && round.explanation, `${round.id}: missing text`);
          assert(round.options.length === 3 && new Set(round.options).size === 3, `${round.id}: options not unique`);
          assert(round.options.filter((option) => option === round.correctAnswer).length === 1, `${round.id}: correct answer mismatch`);
          generated += 1;
        }
      }
    }
  }
}

assert(!isLanguageGameAvailableForGrade("literatur-lupe", 4), "Literature must stay hidden before grade 5");
assert(isLanguageGameAvailableForGrade("literatur-lupe", 5), "Literature must open in grade 5");
assert(!isLanguageGameAvailableForGrade("silben-slicer", 5), "Syllable game must stay hidden after grade 4");

console.log(`Language Visual Lab audit passed: ${generated} generated skill rounds plus legacy pools.`);
