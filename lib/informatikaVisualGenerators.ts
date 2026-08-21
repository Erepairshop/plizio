import InformaticsMissionQuestion from "@/components/informatika-visual/InformaticsMissionQuestion";
import { informaticsDiagramSvgMarkup } from "@/components/informatika-visual/InformaticsTestDiagrams";
import type { VisualQuestionType } from "./languageTestTypes";
import { INFORMATICS_VISUAL_UI, informaticsVisualLang, localizedInformaticsMissions } from "./informatikaVisualContent";

function shuffle<T>(items:T[]):T[]{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export const INFORMATICS_VISUAL_TRIGGERS:Record<number,string[]>={
  5:["info_k5_t02","info_k5_t05","info_k5_t17","info_k5_t21","info_k5_t25","info_k5_t28"],
  6:["info_k6_t02","info_k6_t04","info_k6_t12","info_k6_t17","info_k6_t23","info_k6_t29"],
  7:["info_k7_network","info_k7_security","info_k7_db","info_k7_css","info_k7_hardware","info_k7_image"],
  8:["info_k8_control","info_k8_http","info_k8_sql","info_k8_crypto","info_k8_git","info_k8_ai"],
};
function build(grade:5|6|7|8,lang?:string):VisualQuestionType{
  const active=informaticsVisualLang(lang),ui=INFORMATICS_VISUAL_UI[active];
  return {type:`informatics-mission-k${grade}`,label:`💡 ${ui.label}`,printLabel:ui.label,component:InformaticsMissionQuestion,subtopicIds:INFORMATICS_VISUAL_TRIGGERS[grade],
    generate:count=>shuffle(localizedInformaticsMissions(grade,active)).slice(0,count).map(m=>{
      const common={...m,prompt:ui.label,question:`${ui.label}: ${m.title}`,printSvg:informaticsDiagramSvgMarkup(m.id,`${m.title}. ${m.clue}`),lang:active};
      if(m.mode==="choice"){const options=shuffle(m.options);return {...common,options,correctAnswer:m.answer,correctIndex:options.indexOf(m.answer)};}
      return {...common,items:m.stages,correctOrder:m.stages};
    }),
    gradeAnswer:(q,given)=>q.mode==="choice"?{correct:given===q.correctAnswer,expected:q.correctAnswer}:{correct:given===q.correctOrder.join("|"),expected:q.correctOrder.join(" → ")},
    mapProps:(q,userAnswer,submitted,onAnswer)=>({mode:q.mode,diagramId:q.id,prompt:q.prompt,title:q.title,clue:q.clue,options:q.options,items:q.items,correctAnswer:q.correctAnswer,correctOrder:q.correctOrder,orderLabel:ui.order,tapLabel:ui.tap,resetLabel:ui.reset,correctLabel:ui.correct,solutionLabel:ui.solution,userAnswer,submitted,onAnswer}),
    renderPrint:q=>`${q.title}: ${q.clue}`};
}
export function getLocalizedInformaticsVisualTypes(lang?:string):VisualQuestionType[]{return ([5,6,7,8] as const).map(grade=>build(grade,lang));}
