"use client";
import dynamic from "next/dynamic";
import { INFORMATIKA_POOLS } from "@/lib/visualLab/pools/informatikaPool";
import { isInformaticsGameAvailableForGrade, isInformaticsSkillGameId, type InformaticsGameId } from "@/lib/visualLab/informaticsCurriculum";
import { buildInformaticsSkillRounds } from "@/lib/visualLab/informaticsSkillContent";
import { prepareLegacyInformaticsRounds } from "@/lib/visualLab/prepareLegacyInformaticsRounds";
import InformaticsRoundSession from "./InformaticsRoundSession";
const BinaryBitStreamGame=dynamic(()=>import("@/app/astrinformatika/visual-lab/games/BinaryBitStreamGame"));
const CodeCommanderGame=dynamic(()=>import("@/app/astrinformatika/visual-lab/games/CodeCommanderGame"));
const HardwareHeroGame=dynamic(()=>import("@/app/astrinformatika/visual-lab/games/HardwareHeroGame"));
const PacketPathGame=dynamic(()=>import("@/app/astrinformatika/visual-lab/games/PacketPathGame"));
const VirusVaultGame=dynamic(()=>import("@/app/astrinformatika/visual-lab/games/VirusVaultGame"));
const InformaticsSkillGame=dynamic(()=>import("@/app/astrinformatika/visual-lab/games/InformaticsSkillGame"));
type Lang="de"|"hu"|"ro"|"en";
const EMPTY:Record<Lang,string>={de:"Für diese Klasse sind noch keine passenden Informatikaufgaben verfügbar.",hu:"Ehhez az osztályhoz még nincs megfelelő informatikafeladat.",ro:"Nu există încă exerciții de informatică potrivite pentru această clasă.",en:"No suitable computing tasks are available for this grade yet."};
export default function InformaticsLab({gameId:input,grade,lang,fallback}:{gameId:string;grade:number;lang:Lang;fallback?:string}){
 const gameId=input as InformaticsGameId;if(!isInformaticsGameAvailableForGrade(gameId,grade))return <div className="rounded-xl border border-cyan-300/25 bg-cyan-950/25 p-5 text-center font-semibold text-cyan-100">{fallback||EMPTY[lang]}</div>;
 if(isInformaticsSkillGameId(gameId))return <InformaticsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={(level,count)=>buildInformaticsSkillRounds(gameId,grade,lang,level,count)} renderRound={(round,onDone,key)=><InformaticsSkillGame key={key} lang={lang} round={round} onDone={onDone}/>}/>;
 const pool=INFORMATIKA_POOLS[lang]?.[grade];if(!pool)return <div className="rounded-xl border border-cyan-300/25 bg-cyan-950/25 p-5 text-center font-semibold text-cyan-100">{fallback||EMPTY[lang]}</div>;
 switch(gameId){
  case "binary-bit-stream":return <InformaticsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={level=>prepareLegacyInformaticsRounds(gameId,pool.binaryAsteroids,grade,level)} renderRound={(round,onDone,key)=><BinaryBitStreamGame key={key} grade={grade} lang={lang} round={round} onDone={score=>onDone(score,round.words.length*10)}/>}/>;
  case "code-commander":return <InformaticsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={level=>prepareLegacyInformaticsRounds(gameId,pool.algorithmSniper,grade,level)} renderRound={(round,onDone,key)=><CodeCommanderGame key={key} grade={grade} lang={lang} round={round} onDone={score=>onDone(score,60+round.correctOrder.length*5)}/>}/>;
  case "hardware-hero":return <InformaticsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={level=>prepareLegacyInformaticsRounds(gameId,pool.hardwareSort,grade,level)} renderRound={(round,onDone,key)=><HardwareHeroGame key={key} grade={grade} lang={lang} round={round} onDone={score=>onDone(score,round.words.length*10)}/>}/>;
  case "packet-path":return <InformaticsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={level=>prepareLegacyInformaticsRounds(gameId,pool.termGuardian,grade,level)} renderRound={(round,onDone,key)=><PacketPathGame key={key} grade={grade} lang={lang} round={round} onDone={score=>onDone(score,(round.wrongWords.length+1)*10)}/>}/>;
  case "virus-vault":return <InformaticsRoundSession gameId={gameId} grade={grade} lang={lang} rounds={level=>prepareLegacyInformaticsRounds(gameId,pool.securitySturm,grade,level)} renderRound={(round,onDone,key)=><VirusVaultGame key={key} grade={grade} lang={lang} round={round} onDone={score=>onDone(score,round.words.length*10)}/>}/>;
  default:return null;
 }
}