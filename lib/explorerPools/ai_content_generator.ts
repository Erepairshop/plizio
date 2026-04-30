import type { PoolTopicDef } from "./types";
import { k5_data } from "./ai_content_db";
import { k6_data } from "./ai_content_db";
import { k7_data } from "./ai_content_db2";
import { k8_data } from "./ai_content_db2";

const DB: any = { 5: k5_data, 6: k6_data, 7: k7_data, 8: k8_data };

const distractors = {
  hu: ["Fa", "VÃ­z", "KÅ‘", "Sajt", "FelhÅ‘", "MadÃ¡r", "Asztal", "CipÅ‘", "Nap", "FÅ±", "Kavics", "LevÃ©l", "Homok", "TÃ³", "Hegy"],
  en: ["Tree", "Water", "Stone", "Cheese", "Cloud", "Bird", "Table", "Shoe", "Sun", "Grass", "Pebble", "Leaf", "Sand", "Lake", "Mountain"],
  de: ["Baum", "Wasser", "Stein", "KÃ¤se", "Wolke", "Vogel", "Tisch", "Schuh", "Sonne", "Gras", "Kiesel", "Blatt", "Sand", "See", "Berg"],
  ro: ["Copac", "ApÄƒ", "PiatrÄƒ", "BrÃ¢nzÄƒ", "Nor", "PasÄƒre", "MasÄƒ", "Pantof", "Soare", "IarbÄƒ", "PietricicÄƒ", "FrunzÄƒ", "Nisip", "Lac", "Munte"]
};

const ui = {
  hu: { inst: "PÃ¡rosÃ­tsd be:", h1: "Gondolj a tÃ©mÃ¡ra!", h2: "Keresd a pÃ¡rokat!", q: "Mi jellemzÅ‘ erre:", l1: "RÃ©sz", l2: "TÃ­pus", l3: "PÃ©lda", r1: "Adat", r2: "GÃ©p", r3: "Program" },
  en: { inst: "Match the pairs:", h1: "Think about it!", h2: "Find the pairs!", q: "What describes this:", l1: "Part", l2: "Type", l3: "Example", r1: "Data", r2: "Machine", r3: "Program" },
  de: { inst: "Ordne die Paare zu:", h1: "Denk nach!", h2: "Finde die Paare!", q: "Was beschreibt das:", l1: "Teil", l2: "Art", l3: "Beispiel", r1: "Daten", r2: "Maschine", r3: "Programm" },
  ro: { inst: "AsociazÄƒ perechile:", h1: "GÃ¢ndeÈ™te-te!", h2: "GÄƒseÈ™te perechile!", q: "Ce descrie asta:", l1: "Parte", l2: "Tip", l3: "Exemplu", r1: "Date", r2: "MaÈ™inÄƒ", r3: "Program" }
};

export function generateAiPool(level: number, island: number) {
  const data = DB[level]?.[`i${island}`];
  if (!data) throw new Error(`Missing data for K${level} i${island}`);
  
  const labels: any = { hu: {}, en: {}, de: {}, ro: {} };
  const pool: PoolTopicDef[] = [];
  
  for (const lang of ["hu", "en", "de", "ro"] as const) {
    labels[lang].explorer_title = data.titles[lang][0];
    for (let i = 1; i <= 15; i++) {
      const title = data.titles[lang][i-1] || `${data.titles[lang][0]} ${i}`;
      const ans = data.answers[lang][i-1] || `Ans ${i}`;
      
      labels[lang][`t${i}_title`] = title;
      labels[lang][`t${i}_text`] = `${title}. ${ans}.`;
      labels[lang][`t${i}_inst`] = ui[lang].inst;
      labels[lang][`t${i}_h1`] = ui[lang].h1;
      labels[lang][`t${i}_h2`] = ui[lang].h2;
      labels[lang][`t${i}_q`] = `${ui[lang].q} ${title}?`;
      labels[lang][`t${i}_qa`] = ans;
      
      // Fixed random distractors based on index to ensure hydration matches
      const dist = distractors[lang];
      labels[lang][`t${i}_qb`] = dist[(i * 2) % dist.length];
      labels[lang][`t${i}_qc`] = dist[(i * 3 + 1) % dist.length];
      labels[lang][`t${i}_qd`] = dist[(i * 5 + 2) % dist.length];
      
      labels[lang][`t${i}_l1`] = ui[lang].l1;
      labels[lang][`t${i}_r1`] = ui[lang].r1;
      labels[lang][`t${i}_l2`] = ui[lang].l2;
      labels[lang][`t${i}_r2`] = ui[lang].r2;
      labels[lang][`t${i}_l3`] = ui[lang].l3;
      labels[lang][`t${i}_r3`] = ui[lang].r3;
    }
  }

  for (let i = 1; i <= 15; i++) {
    pool.push({
      infoTitle: `t${i}_title`,
      infoText: `t${i}_text`,
      svg: { type: "simple-icon", icon: "ðŸ¤–", color: "#3B82F6" },
      interactive: {
        type: "match-pairs",
        instruction: `t${i}_inst`,
        hint1: `t${i}_h1`,
        hint2: `t${i}_h2`,
        pairs: [
          { left: `t${i}_l1`, right: `t${i}_r1` },
          { left: `t${i}_l2`, right: `t${i}_r2` },
          { left: `t${i}_l3`, right: `t${i}_r3` },
        ],
      },
      quiz: {
        question: `t${i}_q`,
        choices: [`t${i}_qa`, `t${i}_qb`, `t${i}_qc`, `t${i}_qd`],
        answer: `t${i}_qa`
      }
    });
  }

  return { labels, pool };
}

