import { pickDiverse } from "./testDiversity";
type QuestionLike={question?:string;options?:string[];correct?:number;answer?:string|string[]};
function key(value:string):string{return value.normalize("NFKC").toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();}
export function selectDiverseAIQuestions<T extends QuestionLike>(pool:T[],count?:number):T[]{const seen=new Set<string>();const unique=pool.filter(question=>{const normalized=key(question.question??"");if(!normalized||seen.has(normalized))return false;seen.add(normalized);return true;});return pickDiverse(unique,count??unique.length);}
