"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Package, Crosshair, Shield, Activity, ShieldHalf, Zap, Skull, CheckCircle2, Swords, Clock } from "lucide-react";
import type { LocalizedString } from "@/lib/gravitas/sim/types";
import type { BattleArmy, BattleResult, EnemyBuilding } from "@/lib/gravitas/sim/battle/types";
import { BATTLE_TACTICS } from "@/lib/gravitas/sim/battle/types";
import { METEOR_MATERIAL_META } from "@/lib/gravitas/world/demo";

interface BattleReportProps {
  result: BattleResult;
  enemy: EnemyBuilding;
  army: BattleArmy;
  intelBefore: number;
  onBackToGalaxy: () => void;
  onRetry: () => void;
  onReplay?: () => void;
  lang: string;
}

function localize(lang: string, v: LocalizedString): string {
  if (lang === "hu") return v.hu;
  if (lang === "de") return v.de;
  if (lang === "ro") return v.ro;
  return v.en;
}

function formatNum(n: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

function formatMul(n?: number): string {
  if (n === undefined) return "x1.00";
  return `x${n.toFixed(2)}`;
}

function materialLabel(materialId: string, lang: string): string {
  const meta = METEOR_MATERIAL_META[materialId as keyof typeof METEOR_MATERIAL_META];
  if (meta) return localize(lang, meta.label);
  return materialId.replace(/_/g, " ");
}

function lootNoteLabel(note: string, lang: string): string {
  const map: Record<string, LocalizedString> = {
    defeat_no_loot: { hu: "Vereség: nincs zsákmány", en: "Defeat: no loot", de: "Niederlage: keine Beute", ro: "Înfrângere: fără loot" },
    missing_loot_table: { hu: "Hiányzó loot tábla", en: "Missing loot table", de: "Fehlende Loot-Tabelle", ro: "Tabel de loot lipsă" },
    tactical_half_loot: { hu: "Taktikai győzelem: fél loot", en: "Tactical victory: half loot", de: "Taktischer Sieg: halbe Beute", ro: "Victorie tactică: loot pe jumătate" },
    derelict_fast_win_double: { hu: "Gyors győzelem: dupla loot", en: "Fast win: double loot", de: "Schneller Sieg: doppelter Loot", ro: "Victorie rapidă: loot dublu" },
    relay_tactical_bonus: { hu: "Relay taktikai bónusz", en: "Relay tactical bonus", de: "Relay-Taktikbonus", ro: "Bonus tactic relay" },
  };
  if (note.startsWith("raider_loot_stack_")) {
    const stack = note.split("_").pop() ?? "0";
    return localize(lang, {
      hu: `Raider loot stack: ${stack}`,
      en: `Raider loot stack: ${stack}`,
      de: `Raider-Beutestapel: ${stack}`,
      ro: `Stack loot Raider: ${stack}`,
    });
  }
  return localize(lang, map[note] ?? { hu: note, en: note, de: note, ro: note });
}

function getLesson(result: BattleResult, lang: string): string {
  if (!result.victory) {
    if (result.durationMs >= 6000) {
      return localize(lang, {
        hu: "Kifutottunk az időből. Az ellenség páncélzata túl erős volt a seregünk tűzerejéhez képest.",
        en: "Ran out of time. The enemy armor was too strong for our army's firepower.",
        de: "Zeit abgelaufen. Die feindliche Panzerung war zu stark für die Feuerkraft unserer Armee.",
        ro: "Timpul a expirat. Armura inamicului a fost prea puternică pentru puterea de foc a armatei noastre.",
      });
    }
    return localize(lang, {
      hu: "A seregünk gyorsan felmorzsolódott. Erősítsd a védelmet vagy derítsd fel a rejtett traiteket.",
      en: "Our army was quickly decimated. Strengthen defenses or scout for hidden traits.",
      de: "Unsere Armee wurde schnell dezimiert. Stärke die Verteidigung oder kläre versteckte Eigenschaften auf.",
      ro: "Armata noastră a fost rapid decimată. Întărește apărarea sau cercetează pentru trăsături ascunse.",
    });
  }
  if (result.durationMs > 4000) {
    return localize(lang, {
      hu: "Lassú győzelem. Nagyobb tűzerővel vagy gyorsabb taktikával csökkenthettük volna a veszteségeket.",
      en: "Slow victory. Higher firepower or faster tactics could have reduced casualties.",
      de: "Langsamer Sieg. Höhere Feuerkraft oder schnellere Taktiken hätten die Verluste verringern können.",
      ro: "Victorie lentă. Putere de foc mai mare sau tactici mai rapide ar fi putut reduce pierderile.",
    });
  }
  return localize(lang, {
    hu: "Határozott, gyors győzelem. A taktikánk tökéletesen semlegesítette az ellenfelet.",
    en: "Decisive, quick victory. Our tactics perfectly neutralized the opponent.",
    de: "Entscheidender, schneller Sieg. Unsere Taktiken haben den Gegner perfekt neutralisiert.",
    ro: "Victorie decisivă și rapidă. Tacticile noastre au neutralizat perfect adversarul.",
  });
}

function Section({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white/[0.02] hover:bg-white/[0.05] transition"
      >
        <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white/72">{title}</span>
        {isOpen ? <ChevronDown size={14} className="text-white/50" /> : <ChevronRight size={14} className="text-white/50" />}
      </button>
      {isOpen && <div className="p-3 border-t border-white/5 space-y-1.5">{children}</div>}
    </div>
  );
}

function StatRow({ label, value, highlight = false }: { label: string; value: string | React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`flex items-start justify-between gap-3 rounded-lg border px-2 py-1 text-[11px] ${highlight ? "border-cyan-500/20 bg-cyan-900/10" : "border-white/8 bg-white/[0.03]"}`}>
      <span className="text-white/72">{label}</span>
      <span className="text-right font-semibold text-white/92">{value}</span>
    </div>
  );
}

export default function BattleReport({
  result,
  enemy,
  army,
  intelBefore,
  onBackToGalaxy,
  onRetry,
  onReplay,
  lang,
}: BattleReportProps) {
  const durationSec = (result.durationMs / 1000).toFixed(1);
  const intelAfter = Math.min(100, intelBefore + result.intelGained);
  const unitSent = Object.values(army.units).reduce((a, b) => a + Math.max(0, b), 0);
  const outcomeLabel = result.victory
    ? localize(lang, { hu: "GYŐZELEM", en: "VICTORY", de: "SIEG", ro: "VICTORIE" })
    : localize(lang, { hu: "VERESÉG", en: "DEFEAT", de: "NIEDERLAGE", ro: "ÎNFRÂNGERE" });

  const tactic = result.stats.tacticId ? BATTLE_TACTICS[result.stats.tacticId as keyof typeof BATTLE_TACTICS] : undefined;

  const totalLost = Object.values(result.stats.unitsLost).reduce((a, b) => a + b, 0);
  const totalWounded = result.casualties?.wounded ? Object.values(result.casualties.wounded).reduce((a, b) => a + b, 0) : 0;

  return (
    <div className="relative h-full w-full overflow-auto rounded-[24px] border border-white/14 bg-[#060b17]/95 p-4 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.15),transparent_44%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="relative z-10 flex flex-col min-h-full">

        {/* SUMMARY HEADER */}
        <div className={`flex items-start justify-between gap-3 rounded-2xl border px-4 py-3 mb-4 ${result.victory ? "border-emerald-500/30 bg-emerald-950/20" : "border-rose-500/30 bg-rose-950/20"}`}>
          <div>
            <div className={`text-sm font-black tracking-[0.14em] flex items-center gap-2 ${result.victory ? "text-emerald-400" : "text-rose-400"}`}>
              {result.victory ? <CheckCircle2 size={16} /> : <Skull size={16} />} {outcomeLabel}
            </div>
            <div className="mt-1 text-[10px] text-white/70 flex items-center gap-2">
              <Clock size={10} /> {durationSec}s • {enemy.id} • {"★".repeat(enemy.difficulty)}
            </div>
            {tactic && (
              <div className="mt-1 text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                Tactic: {localize(lang, tactic.name)}
              </div>
            )}
          </div>
          <div className="text-right flex flex-col gap-1">
            <div className="text-[10px] text-white/65 uppercase tracking-widest">{localize(lang, { hu: "Küldve", en: "Deployed", de: "Entsandt", ro: "Desfășurat" })}: {unitSent}</div>
            <div className="text-[10px] text-rose-400 uppercase tracking-widest">{localize(lang, { hu: "Elvesztett", en: "Lost", de: "Verloren", ro: "Pierdut" })}: {totalLost}</div>
            {totalWounded > 0 && <div className="text-[10px] text-amber-400 uppercase tracking-widest">{localize(lang, { hu: "Sebesült", en: "Wounded", de: "Verwundet", ro: "Rănit" })}: {totalWounded}</div>}
          </div>
        </div>

        {/* VERDICT / LESSON */}
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/10 p-3 mb-2">
          <div className="text-[10px] font-black uppercase tracking-widest text-cyan-500/80 mb-1">
            {localize(lang, { hu: "Taktikai Értékelés", en: "Tactical Verdict", de: "Taktisches Urteil", ro: "Verdict Tactic" })}
          </div>
          <div className="text-xs text-cyan-100/90 leading-relaxed font-medium">
            {getLesson(result, lang)}
          </div>
        </div>

        {/* STAT BREAKDOWN */}
        <Section title={localize(lang, { hu: "Erőviszonyok Részletezése", en: "Force Composition", de: "Kräftezusammensetzung", ro: "Compoziția Forțelor" })}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/20 border border-white/5 rounded-xl p-2">
              <div className="text-[10px] uppercase font-black text-cyan-400 mb-2 flex items-center gap-1"><Crosshair size={12}/> Player Forces</div>
              <StatRow label="Attack (Base)" value={formatNum(result.stats.breakdown?.player.attack.base ?? 0)} />
              <StatRow label="Tactic Mod" value={formatMul(result.stats.breakdown?.player.attack.tacticMod)} />
              <StatRow label="Avatar Mod" value={formatMul(result.stats.breakdown?.player.attack.avatarMod)} />
              <StatRow label="Synergy Mod" value={formatMul(result.stats.breakdown?.player.attack.synergyMod)} />
              <StatRow label="Commander Mod" value={formatMul(result.stats.breakdown?.player.attack.commanderMod)} />
              <StatRow label="Troop Ratio Mod" value={formatMul(result.stats.breakdown?.player.attack.troopRatioMod)} />
              {result.stats.breakdown?.player.attack.intelAdvantageMod !== undefined && <StatRow label="Intel Mod" value={formatMul(result.stats.breakdown?.player.attack.intelAdvantageMod)} />}
              <StatRow label="Total Attack" value={formatNum(result.stats.breakdown?.player.attack.total ?? 0)} highlight />
              <div className="my-1 h-px bg-white/5" />
              <StatRow label="Defense (Base)" value={formatNum(result.stats.breakdown?.player.defense.base ?? 0)} />
              <StatRow label="Tactic Mod" value={formatMul(result.stats.breakdown?.player.defense.tacticMod)} />
              <StatRow label="Avatar Mod" value={formatMul(result.stats.breakdown?.player.defense.avatarMod)} />
              <StatRow label="Synergy Mod" value={formatMul(result.stats.breakdown?.player.defense.synergyMod)} />
              <StatRow label="Commander Mod" value={formatMul(result.stats.breakdown?.player.defense.commanderMod)} />
              <StatRow label="Troop Ratio Mod" value={formatMul(result.stats.breakdown?.player.defense.troopRatioMod)} />
              {result.stats.breakdown?.player.defense.intelAdvantageMod !== undefined && <StatRow label="Intel Mod" value={formatMul(result.stats.breakdown?.player.defense.intelAdvantageMod)} />}
              <StatRow label="Total Defense" value={formatNum(result.stats.breakdown?.player.defense.total ?? 0)} highlight />
              <div className="my-1 h-px bg-white/5" />
              <StatRow label="Speed (Base)" value={formatNum(result.stats.breakdown?.player.speed.base ?? 0)} />
              <StatRow label="Tactic Mod" value={formatMul(result.stats.breakdown?.player.speed.tacticMod)} />
              <StatRow label="Avatar Mod" value={formatMul(result.stats.breakdown?.player.speed.avatarMod)} />
              <StatRow label="Synergy Mod" value={formatMul(result.stats.breakdown?.player.speed.synergyMod)} />
              <StatRow label="Commander Mod" value={formatMul(result.stats.breakdown?.player.speed.commanderMod)} />
              <StatRow label="Troop Ratio Mod" value={formatMul(result.stats.breakdown?.player.speed.troopRatioMod)} />
              <StatRow label="Total Speed" value={formatNum(result.stats.breakdown?.player.speed.total ?? 0)} highlight />
            </div>
            <div className="bg-black/20 border border-white/5 rounded-xl p-2">
              <div className="text-[10px] uppercase font-black text-rose-400 mb-2 flex items-center gap-1"><Shield size={12}/> Enemy Forces</div>
              <StatRow label="Attack (Base)" value={formatNum(result.stats.breakdown?.enemy.attack.base ?? 0)} />
              <StatRow label="Condition Mod" value={formatMul(result.stats.breakdown?.enemy.attack.conditionMod)} />
              <StatRow label="Intel Mod" value={formatMul(result.stats.breakdown?.enemy.attack.intelAdvantageMod)} />
              <StatRow label="Total Attack" value={formatNum(result.stats.breakdown?.enemy.attack.total ?? 0)} highlight />
              <div className="my-1 h-px bg-white/5" />
              <StatRow label="Defense (Base)" value={formatNum(result.stats.breakdown?.enemy.defense.base ?? 0)} />
              <StatRow label="Condition Mod" value={formatMul(result.stats.breakdown?.enemy.defense.conditionMod)} />
              <StatRow label="Intel Mod" value={formatMul(result.stats.breakdown?.enemy.defense.intelAdvantageMod)} />
              <StatRow label="Total Defense" value={formatNum(result.stats.breakdown?.enemy.defense.total ?? 0)} highlight />
              <div className="my-1 h-px bg-white/5" />
              <StatRow label="Speed (Base)" value={formatNum(result.stats.breakdown?.enemy.speed.base ?? 0)} />
              <StatRow label="Condition Mod" value={formatMul(result.stats.breakdown?.enemy.speed.conditionMod)} />
              <StatRow label="Intel Mod" value={formatMul(result.stats.breakdown?.enemy.speed.intelAdvantageMod)} />
              <StatRow label="Total Speed" value={formatNum(result.stats.breakdown?.enemy.speed.total ?? 0)} highlight />
            </div>
          </div>
        </Section>

        {/* TIMELINE */}
        <Section title={localize(lang, { hu: "Eseménynapló", en: "Timeline", de: "Zeitachse", ro: "Cronologie" })}>
          <div className="space-y-2">
            {result.phases.map((phase, idx) => (
              <div key={idx} className="flex gap-2 text-[10px] items-start">
                <div className="w-10 text-white/40 shrink-0 font-mono">{(phase.timestamp / 1000).toFixed(1)}s</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-1">
                    {phase.event === "clash" && <Swords size={10} className={phase.source === "player" ? "text-cyan-400" : "text-rose-400"} />}
                    {phase.event === "shield_break" && <ShieldHalf size={10} className="text-amber-400" />}
                    {phase.event === "critical_hit" && <Zap size={10} className="text-fuchsia-400" />}
                    {phase.event === "trait_activate" && <Activity size={10} className="text-rose-400" />}
                    {phase.event === "counter" && <Shield size={10} className="text-emerald-400" />}
                    {phase.event === "victory" && <CheckCircle2 size={10} className="text-emerald-400" />}
                    {phase.event === "defeat" && <Skull size={10} className="text-rose-400" />}
                    <span className={phase.source === "player" ? "text-cyan-200" : "text-rose-200"}>{localize(lang, phase.description)}</span>
                  </div>
                  {phase.damage !== undefined && phase.damage > 0 && (
                    <div className="flex gap-3 pl-4 text-white/50">
                      <span>Total Dmg: <span className="text-white/80">{Math.round(phase.damage)}</span></span>
                      {phase.targetShieldDamage !== undefined && phase.targetShieldDamage > 0 && <span>Shield Hit: <span className="text-sky-300">{phase.targetShieldDamage}</span></span>}
                      {phase.targetHullDamage !== undefined && phase.targetHullDamage > 0 && <span>Hull Hit: <span className="text-amber-500">{phase.targetHullDamage}</span></span>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>
        {(totalLost > 0 || totalWounded > 0) && (
          <Section title={localize(lang, { hu: "Veszteség Jelentés", en: "Casualty Report", de: "Verlustbericht", ro: "Raport de Pierderi" })} defaultOpen>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[10px]">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 uppercase font-black tracking-widest">
                    <th className="py-1">{localize(lang, { hu: "Egység", en: "Unit", de: "Einheit", ro: "Unitate" })}</th>
                    <th className="py-1 text-right">{localize(lang, { hu: "Küldve", en: "Sent", de: "Gesendet", ro: "Trimis" })}</th>
                    <th className="py-1 text-right text-rose-400">{localize(lang, { hu: "Halott", en: "Lost", de: "Tot", ro: "Pierdut" })}</th>
                    <th className="py-1 text-right text-amber-400">{localize(lang, { hu: "Sebesült", en: "Wounded", de: "Verw.", ro: "Rănit" })}</th>
                    <th className="py-1 text-right text-emerald-400">{localize(lang, { hu: "Túlélte", en: "Survived", de: "Überlebt", ro: "Supraviețuit" })}</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(result.stats.unitsSent ?? {}).map(([unitId, sent]) => {
                    if (sent <= 0) return null;
                    const lost = result.stats.unitsLost[unitId] || 0;
                    const wounded = result.casualties?.wounded[unitId] || 0;
                    const survived = Math.max(0, sent - lost - wounded);
                    return (
                      <tr key={unitId} className="border-b border-white/5 last:border-0 font-mono">
                        <td className="py-1.5 text-white/80 font-sans">{unitId.split('_').pop()?.toUpperCase()}</td>
                        <td className="py-1.5 text-right">{sent}</td>
                        <td className="py-1.5 text-right text-rose-400">{lost > 0 ? `-${lost}` : "-"}</td>
                        <td className="py-1.5 text-right text-amber-400">{wounded > 0 ? wounded : "-"}</td>
                        <td className="py-1.5 text-right text-emerald-400">{survived}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* TRAITS & COUNTERS */}
        <Section title={localize(lang, { hu: "Ellenséges Tulajdonságok", en: "Enemy Traits & Counters", de: "Feindliche Eigenschaften", ro: "Trăsături Inamice" })} defaultOpen={!!(result.stats.traitLog && result.stats.traitLog.length > 0)}>
          {(!result.stats.traitLog || result.stats.traitLog.length === 0) ? (
            <div className="text-[10px] text-white/40 italic">{localize(lang, { hu: "Nincs jelentős aktivitás.", en: "No notable trait activation.", de: "Keine besondere Trait-Aktivierung.", ro: "Nicio activare notabilă." })}</div>
          ) : (
            <div className="space-y-2">
              {result.stats.traitLog.map((log, idx) => (
                <div key={idx} className="rounded-lg border border-white/10 bg-white/[0.02] p-2 relative overflow-hidden">
                  {log.counteredBy && <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none"><ShieldHalf size={32} /></div>}
                  <div className="flex items-center justify-between z-10 relative">
                    <span className="text-[11px] font-bold text-rose-300 uppercase">{localize(lang, log.name)}</span>
                    {log.counteredBy ? (
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase">Countered</span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[8px] font-black uppercase">Active</span>
                    )}
                  </div>
                  <div className="text-[10px] text-white/60 mt-1 relative z-10">
                    {log.hiddenRevealed || !log.counteredBy ? localize(lang, log.description) : localize(lang, { en: "Effect applied.", hu: "Hatás érvényesült.", de: "Effekt angewendet.", ro: "Efect aplicat." })}
                  </div>
                  {log.counteredBy && (
                    <div className="mt-1 pt-1 border-t border-white/5 text-[9px] text-emerald-400 flex items-center gap-1 relative z-10">
                      <ShieldHalf size={10} /> Neutralized by: {log.counteredBy.replace(/_/g, " ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* LOOT */}
        <Section title={localize(lang, { hu: "Zsákmány", en: "Loot", de: "Beute", ro: "Loot" })} defaultOpen>
          {!result.loot ? (
            <div className="text-[10px] text-white/40 italic">{localize(lang, { hu: "Nincs jutalom.", en: "No rewards.", de: "Keine Belohnung.", ro: "Fără recompense." })}</div>
          ) : (
            <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                {Object.entries(result.loot.materials).map(([id, value]) => (
                  <div key={id} className="flex items-center gap-2 p-1.5 rounded bg-white/5 border border-white/10">
                    <Package size={12} className="text-amber-400" />
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase text-white/50">{materialLabel(id, lang)}</span>
                      <span className="text-[11px] font-mono text-amber-200">+{formatNum(value ?? 0)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {result.lootBreakdown?.bonuses && (
                <div className="p-2 rounded bg-sky-900/10 border border-sky-500/20 text-[10px]">
                  <div className="text-sky-400 font-black uppercase mb-1">Loot Factors</div>
                  <div className="text-sky-200/70 space-y-0.5">
                    <div>• Power Ratio: {formatMul(result.lootBreakdown.bonuses.powerRatioMod)}</div>
                    <div>• Supply Flow: {formatMul(result.lootBreakdown.bonuses.supplyFlowMod)}</div>
                    <div>• Intel: {formatMul(result.lootBreakdown.bonuses.intelMod)}</div>
                    {result.lootBreakdown.bonuses.fastWinDouble && <div>• Fast Win: x2.0</div>}
                    {result.lootBreakdown.bonuses.tacticalPenalty && <div>• Tactical Penalty: x0.5</div>}
                    <div>• Rare Drop Chance: {Math.round(result.lootBreakdown.bonuses.rareChance * 100)}%</div>
                    {result.lootBreakdown.bonuses.notes.map((note) => (
                      <div key={note}>• {lootNoteLabel(note, lang)}</div>
                    ))}
                  </div>
                </div>
              )}

              {result.loot.rareDrop && (
                <div className="rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-2 flex items-center justify-between">
                  <div>
                    <div className="text-[9px] text-fuchsia-400 font-black uppercase tracking-widest">Rare Drop!</div>
                    <div className="text-[11px] text-fuchsia-200 font-bold">{localize(lang, result.loot.rareDrop.name)}</div>
                  </div>
                  <Package size={20} className="text-fuchsia-400" />
                </div>
              )}
            </div>
          )}
        </Section>

        <div className="mt-auto pt-4 flex items-center gap-2 shrink-0">
          <button type="button" onClick={onBackToGalaxy} className="flex-1 rounded-xl border border-white/14 bg-white/6 px-3 py-3 text-[11px] font-black uppercase tracking-widest text-white/88 transition hover:bg-white/10">
            {localize(lang, { hu: "Bázis", en: "Base", de: "Basis", ro: "Bază" })}
          </button>
          <button type="button" onClick={onRetry} className="flex-1 rounded-xl border border-cyan-300/28 bg-cyan-300/14 px-3 py-3 text-[11px] font-black uppercase tracking-widest text-cyan-100 transition hover:bg-cyan-300/20">
            {localize(lang, { hu: "Újra", en: "Retry", de: "Erneut", ro: "Reîncearcă" })}
          </button>
          {onReplay && (
            <button type="button" onClick={onReplay} className="flex-1 rounded-xl border border-amber-300/28 bg-amber-300/14 px-3 py-3 text-[11px] font-black uppercase tracking-widest text-amber-100 transition hover:bg-amber-300/20">
              {localize(lang, { hu: "Visszajátszás", en: "Replay", de: "Wiederh.", ro: "Reluare" })}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
