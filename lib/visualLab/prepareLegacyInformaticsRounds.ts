import type { InformaticsGameId, InformaticsLevel } from "./informaticsCurriculum";

type LegacyRound = { id: string; flashDuration?: number };
function rotate<T>(items: T[], offset: number): T[] { if (!items.length) return []; const n=((offset%items.length)+items.length)%items.length; return [...items.slice(n),...items.slice(0,n)]; }
export function prepareLegacyInformaticsRounds<T extends LegacyRound>(gameId: InformaticsGameId, rounds: T[], grade: number, level: InformaticsLevel): T[] {
  return rotate(rounds,(grade-5)*2+level-1).map((round,index)=>{
    const copy={...round,id:`${round.id}-g${grade}-l${level}-${index}`} as T;
    if(gameId==="virus-vault" && typeof round.flashDuration==="number") copy.flashDuration=Math.max(1400,round.flashDuration-(level-1)*180-(grade-5)*60);
    return copy;
  });
}