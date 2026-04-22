import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";
import { generateAiPool } from "./explorerPools/ai_content_generator";

export const AI_K7_CURRICULUM: KemiaTheme[] = Array.from({length: 9}, (_, th) => {
  const i = th + 1;
  const poolData = generateAiPool(7, i);
  return {
    id: `ai_k7_th${i}`,
    name: poolData.labels.hu.explorer_title,
    icon: "💡",
    color: "#F59E0B",
    subtopics: Array.from({length: 15}, (_, sub) => {
      const topicIndex = sub + 1;
      return {
        id: `ai_k7_t${i}_${topicIndex}`,
        name: {
          de: poolData.labels.de[`t${topicIndex}_title`],
          en: poolData.labels.en[`t${topicIndex}_title`],
          hu: poolData.labels.hu[`t${topicIndex}_title`],
          ro: poolData.labels.ro[`t${topicIndex}_title`]
        },
        questions: poolData.pool[sub].quiz ? [{
          type: "mcq",
          topic: "ai",
          subtopic: `ai_k7_t${i}_${topicIndex}`,
          question: poolData.labels.hu[`t${topicIndex}_q`],
          options: poolData.pool[sub].quiz!.choices.map((c: string) => poolData.labels.hu[c]),
          correct: 0
        }] : [],
        hasGenerator: false
      };
    })
  };
});

export function getAIK7Questions(subtopicIds: string[], count?: number): KemiaQuestion[] {
  const pool: KemiaQuestion[] = [];
  for (const theme of AI_K7_CURRICULUM) {
    for (const sub of theme.subtopics) {
      if (subtopicIds.includes(sub.id)) pool.push(...sub.questions);
    }
  }
  if (!count) return pool;
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
