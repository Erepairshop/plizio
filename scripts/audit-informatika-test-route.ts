import { INFORMATICS_DIAGRAM_IDS, INFORMATICS_DIAGRAM_FAMILY, informaticsDiagramSvgMarkup } from "../components/informatika-visual/InformaticsTestDiagrams";
import { INFORMATICS_MISSIONS, localizedInformaticsMissions } from "../lib/informatikaVisualContent";
import { getLocalizedInformaticsVisualTypes, INFORMATICS_VISUAL_TRIGGERS } from "../lib/informatikaVisualGenerators";
import { INFO_K5_CURRICULUM, getInfoK5Questions } from "../lib/informatikaCurriculum5";
import { INFO_K6_CURRICULUM, getInfoK6Questions } from "../lib/informatikaCurriculum6";
import { INFO_K7_CURRICULUM, getInfoK7Questions } from "../lib/informatikaCurriculum7";
import { INFO_K8_CURRICULUM, getInfoK8Questions } from "../lib/informatikaCurriculum8";

const grades=[5,6,7,8] as const, langs=["de","hu","ro","en"] as const;
const countries={de:"DE",hu:"HU",ro:"RO",en:"US"} as const;
const curricula={5:INFO_K5_CURRICULUM,6:INFO_K6_CURRICULUM,7:INFO_K7_CURRICULUM,8:INFO_K8_CURRICULUM};
const getters={5:getInfoK5Questions,6:getInfoK6Questions,7:getInfoK7Questions,8:getInfoK8Questions};
const fail=(message:string):never=>{throw new Error(message);};

if(INFORMATICS_DIAGRAM_IDS.length!==24) fail("Expected 24 diagram IDs");
if(new Set(INFORMATICS_DIAGRAM_IDS).size!==24) fail("Duplicate diagram ID");
if(INFORMATICS_MISSIONS.length!==24) fail("Expected 24 missions");
if(new Set(INFORMATICS_MISSIONS.map(x=>x.id)).size!==24) fail("Duplicate mission ID");
for(const grade of grades){
  const missions=INFORMATICS_MISSIONS.filter(x=>x.grade===grade);
  if(missions.length!==6) fail(`K${grade}: expected 6 missions`);
  const subtopics=new Set(curricula[grade].flatMap(theme=>theme.subtopics.map(topic=>topic.id)));
  for(const trigger of INFORMATICS_VISUAL_TRIGGERS[grade]) if(!subtopics.has(trigger)) fail(`K${grade}: invalid trigger ${trigger}`);
  for(const lang of langs){
    const localized=localizedInformaticsMissions(grade,lang);
    if(localized.some(x=>!x.title.trim()||!x.clue.trim())) fail(`K${grade}/${lang}: empty localized copy`);
    const types=getLocalizedInformaticsVisualTypes(lang);
    if(types.length!==4) fail(`${lang}: expected four visual types`);
    const generated=types.find(x=>x.type.endsWith(`k${grade}`))!.generate(6);
    if(generated.length!==6||new Set(generated.map(x=>x.id)).size!==6) fail(`K${grade}/${lang}: generator diversity failed`);
    for(const q of generated){
      const svg=informaticsDiagramSvgMarkup(q.id,q.title);
      if(!svg.startsWith("<svg")||svg.includes('<rect x="0"')||svg.includes('<rect x="1"')) fail(`${q.id}: invalid framed SVG`);
      const expected=q.mode==="choice"?q.correctAnswer:q.correctOrder.join("|");
      if(!types.find(x=>x.type.endsWith(`k${grade}`))!.gradeAnswer(q,expected).correct) fail(`${q.id}: grading failed`);
    }
    const ids=[...subtopics];
    const sample=getters[grade](ids,300,countries[lang]) as Array<{question?:string;options?:string[];correct?:number;answer?:string}>;
    const keys=sample.map(q=>(q.question||"").normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim());
    if(keys.some(key=>!key)) fail(`K${grade}/${lang}: empty question`);
    if(new Set(keys).size!==keys.length) fail(`K${grade}/${lang}: exact repeated question in pool`);
    for(const q of sample) if(q.options&&new Set(q.options.map(x=>x.normalize("NFKC").toLocaleLowerCase().trim())).size!==q.options.length) fail(`K${grade}/${lang}: duplicate option`);
  }
}
for(const id of INFORMATICS_DIAGRAM_IDS) if(!INFORMATICS_DIAGRAM_FAMILY[id]) fail(`${id}: missing family`);
console.log("Informatics test route audit passed: 24 diagrams, 24 missions, 4 grades, 4 languages.");
