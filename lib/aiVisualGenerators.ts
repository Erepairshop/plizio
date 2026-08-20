import AIMissionQuestion from "@/components/ai-visual/AIMissionQuestion";
import { aiDiagramSvgMarkup } from "@/components/ai-visual/AITestDiagrams";
import type { VisualQuestionType } from "./languageTestTypes";
import { AI_VISUAL_UI, aiVisualLang, localizedAIMissions } from "./aiVisualContent";
function shuffle<T>(items:T[]):T[]{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export const AI_VISUAL_TRIGGERS:Record<number,string[]>={
  5:["ai_k5_t1_1","ai_k5_t1_2","ai_k5_t1_3","ai_k5_t1_4","ai_k5_t2_3","ai_k5_t3_5"],
  6:["ai_k6_t1_1","ai_k6_t1_2","ai_k6_t1_4","ai_k6_t1_3","ai_k6_t2_4","ai_k6_t3_1"],
  7:["ai_k7_t1_2","ai_k7_t1_3","ai_k7_t1_4","ai_k7_t2_2","ai_k7_t2_1","ai_k7_t3_6"],
  8:["ai_k8_t1_1","ai_k8_t3_5","ai_k8_t3_6","ai_k8_t3_2","ai_k8_t3_1","ai_k8_t2_6"],
};
function build(grade:5|6|7|8,lang?:string):VisualQuestionType{const active=aiVisualLang(lang),ui=AI_VISUAL_UI[active];return{type:"ai-mission-k"+grade,label:"🧠 "+ui.label,printLabel:ui.label,component:AIMissionQuestion,subtopicIds:AI_VISUAL_TRIGGERS[grade],generate:count=>shuffle(localizedAIMissions(grade,active)).slice(0,count).map(m=>{const common={...m,prompt:ui.label,question:ui.label+": "+m.title,printSvg:aiDiagramSvgMarkup(m.id,m.title+". "+m.clue),lang:active};if(m.mode==="choice"){const options=shuffle(m.options);return{...common,options,correctAnswer:m.answer,correctIndex:options.indexOf(m.answer)};}return{...common,items:m.stages,correctOrder:m.stages};}),gradeAnswer:(q,given)=>q.mode==="choice"?{correct:given===q.correctAnswer,expected:q.correctAnswer}:{correct:given===q.correctOrder.join("|"),expected:q.correctOrder.join(" → ")},mapProps:(q,userAnswer,submitted,onAnswer)=>({mode:q.mode,diagramId:q.id,prompt:q.prompt,title:q.title,clue:q.clue,options:q.options,items:q.items,correctAnswer:q.correctAnswer,correctOrder:q.correctOrder,orderLabel:ui.order,tapLabel:ui.tap,resetLabel:ui.reset,correctLabel:ui.correct,solutionLabel:ui.solution,userAnswer,submitted,onAnswer}),renderPrint:q=>q.title+": "+q.clue};}
export function getLocalizedAIVisualTypes(lang?:string):VisualQuestionType[]{return([5,6,7,8] as const).map(grade=>build(grade,lang));}
