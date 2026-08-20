import { AI_DIAGRAM_FAMILY, AI_DIAGRAM_IDS, aiDiagramSvgMarkup } from "../components/ai-visual/AITestDiagrams";
import { AI_MISSIONS, localizedAIMissions } from "../lib/aiVisualContent";
import { AI_VISUAL_TRIGGERS, getLocalizedAIVisualTypes } from "../lib/aiVisualGenerators";
import { AI_K5_CURRICULUM, getAIK5Questions } from "../lib/aiCurriculum5";
import { AI_K6_CURRICULUM, getAIK6Questions } from "../lib/aiCurriculum6";
import { AI_K7_CURRICULUM, getAIK7Questions } from "../lib/aiCurriculum7";
import { AI_K8_CURRICULUM, getAIK8Questions } from "../lib/aiCurriculum8";
const grades=[5,6,7,8] as const,langs=["de","hu","ro","en"] as const;
const countries={de:"DE",hu:"HU",ro:"RO",en:"US"} as const;
const curricula={5:AI_K5_CURRICULUM,6:AI_K6_CURRICULUM,7:AI_K7_CURRICULUM,8:AI_K8_CURRICULUM};
const getters={5:getAIK5Questions,6:getAIK6Questions,7:getAIK7Questions,8:getAIK8Questions};
const fail=(message:string):never=>{throw new Error(message);};
const normalize=(value:string)=>value.normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();
if(AI_DIAGRAM_IDS.length!==24||new Set(AI_DIAGRAM_IDS).size!==24)fail("Expected 24 unique AI diagrams");
if(AI_MISSIONS.length!==24||new Set(AI_MISSIONS.map(item=>item.id)).size!==24)fail("Expected 24 unique AI missions");
for(const id of AI_DIAGRAM_IDS)if(!AI_DIAGRAM_FAMILY[id])fail(id+": missing family");
for(const grade of grades){
  const missions=AI_MISSIONS.filter(item=>item.grade===grade);
  if(missions.length!==6)fail("K"+grade+": expected 6 missions");
  const subtopics=new Set(curricula[grade].flatMap(theme=>theme.subtopics.map(topic=>topic.id)));
  for(const trigger of AI_VISUAL_TRIGGERS[grade])if(!subtopics.has(trigger))fail("K"+grade+": invalid trigger "+trigger);
  for(const lang of langs){
    const localized=localizedAIMissions(grade,lang);
    if(localized.some(item=>!item.title.trim()||!item.clue.trim()))fail("K"+grade+"/"+lang+": empty mission copy");
    const type=getLocalizedAIVisualTypes(lang).find(item=>item.type.endsWith("k"+grade))!;
    const generated=type.generate(6);
    if(generated.length!==6||new Set(generated.map(item=>item.id)).size!==6)fail("K"+grade+"/"+lang+": visual diversity failed");
    for(const question of generated){
      const svg=aiDiagramSvgMarkup(question.id,question.title);
      if(!svg.startsWith("<svg")||svg.includes('<rect x="0"')||svg.includes('<rect x="1"'))fail(question.id+": framed SVG");
      const given=question.mode==="choice"?question.correctAnswer:question.correctOrder.join("|");
      if(!type.gradeAnswer(question,given).correct)fail(question.id+": grading failed");
    }
    const sample=getters[grade]([...subtopics],300,lang) as Array<{question?:string;options?:string[]}>;
    const keys=sample.map(item=>normalize(item.question??""));
    if(keys.some(key=>!key)||new Set(keys).size!==keys.length)fail("K"+grade+"/"+lang+": repeated or empty question");
    for(const item of sample)if(item.options&&new Set(item.options.map(normalize)).size!==item.options.length)fail("K"+grade+"/"+lang+": duplicate option");
  }
}
console.log("AI test route audit passed: 24 diagrams, 24 missions, 4 grades, 4 languages.");
