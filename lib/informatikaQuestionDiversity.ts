import { pickDiverse } from "./testDiversity";

type QuestionLike = { question?: string; options?: string[]; correct?: number; answer?: string | string[] };
function questionKey(value:string):string{return value.normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();}

export function selectDiverseInformatikaQuestions<T extends QuestionLike>(pool:T[],count?:number):T[]{
  const seen=new Set<string>();
  const unique=pool.filter(question=>{const key=questionKey(question.question??"");if(!key||seen.has(key))return false;seen.add(key);return true;});
  return pickDiverse(unique,count??unique.length);
}
