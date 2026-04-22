import type { PoolTopicDef } from "./types";

const getLabels = (topic: string) => {
  const t = { hu: `Téma`, en: `Topic`, de: `Thema`, ro: `Tema` };
  const d: any = { hu: {}, en: {}, de: {}, ro: {} };
  for (const lang of ["hu", "en", "de", "ro"] as const) {
    d[lang]["explorer_title"] = `${topic} Explorer`;
    for (let i = 1; i <= 15; i++) {
      d[lang][`t${i}_title`] = `${t[lang]} ${i}`;
      d[lang][`t${i}_text`] = `This is ${t[lang]} ${i} about ${topic}.`;
      d[lang][`t${i}_q`] = `Question ${i}?`;
      d[lang][`t${i}_qa`] = `A`; d[lang][`t${i}_qb`] = `B`;
      d[lang][`t${i}_qc`] = `C`; d[lang][`t${i}_qd`] = `D`;
    }
  }
  return d;
};

export const AI_K5_I8_LABELS = getLabels("AI biztonság");
export const AI_K5_I8_POOL: PoolTopicDef[] = Array.from({length: 15}, (_, i) => ({
  infoTitle: `t${i+1}_title`, infoText: `t${i+1}_text`,
  svg: { type: "simple-icon", icon: "🛡️", color: "#3B82F6" },
  quiz: { question: `t${i+1}_q`, choices: [`t${i+1}_qa`, `t${i+1}_qb`, `t${i+1}_qc`, `t${i+1}_qd`], answer: `t${i+1}_qa` }
}));
