"use client";

import type { LocalizedString } from "@/lib/gravitas/sim/types";
import type { BattleArmy, BattleResult, EnemyBuilding } from "@/lib/gravitas/sim/battle/types";

interface BattleReportProps {
  result: BattleResult;
  enemy: EnemyBuilding;
  army: BattleArmy;
  intelBefore: number;
  onBackToGalaxy: () => void;
  onRetry: () => void;
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

function phaseTag(id: string): string {
  if (id === "ambush_tactics") return "⚡";
  if (id === "adaptive_shield") return "🛡";
  if (id === "unstable_systems") return "🔧";
  if (id === "core_force_field") return "🌀";
  if (id === "disciplined_defense") return "🎯";
  if (id === "improvised_armor") return "🧱";
  if (id === "hidden_cache") return "📦";
  if (id === "loot_hoarder") return "💰";
  return "•";
}

function getLesson(result: BattleResult, lang: string): string {
  if (!result.victory) {
    return localize(lang, {
      hu: "A les es nyitas ellen vedekezo taktikaval indits, majd kontrazd gyors szarnytamadasra.",
      en: "Open defensive against ambush windows, then switch into quick flank pressure.",
      de: "Starte defensiv gegen Hinterhalt, dann in schnellen Flankendruck wechseln.",
      ro: "Incepe defensiv contra ambuscadei, apoi treci pe presiune rapida pe flanc.",
    });
  }
  if (result.durationMs > 8000) {
    return localize(lang, {
      hu: "Lassu volt a lezaras. Probalj gyorsabb tempot vagy kevesebb, celzottabb osztagot.",
      en: "Your clear was slow. Try a faster tempo or fewer, more focused squads.",
      de: "Der Abschluss war langsam. Versuche hoheres Tempo oder fokussiertere Trupps.",
      ro: "Finalizarea a fost lenta. Incearca ritm mai rapid sau trupe mai focusate.",
    });
  }
  if (result.stats.damageReceived > result.stats.damageDealt * 0.8) {
    return localize(lang, {
      hu: "Sok sebzest kaptal. Pajzsablakban tamadj, kontra-kepesseget idozits korabban.",
      en: "You took heavy damage. Burst inside shield windows and trigger counters earlier.",
      de: "Du hast viel Schaden bekommen. Nutze Schildfenster und zunde Konter fruher.",
      ro: "Ai primit mult damage. Loveste in ferestrele de scut si activeaza contra mai devreme.",
    });
  }
  return localize(lang, {
    hu: "Tiszta gyozelem. Kovetkezore novelheted a lootot jobb felderitessel vagy specialis osztaggal.",
    en: "Clean win. Next run can push loot higher with better scouting or special squads.",
    de: "Sauberer Sieg. Im nachsten Lauf mehr Loot mit besserem Scouting oder Spezialtrupps.",
    ro: "Victorie curata. Urmatoarea runda poate aduce mai mult loot cu scouting mai bun.",
  });
}

function unitLossText(result: BattleResult): string {
  const entries = Object.entries(result.stats.unitsLost).filter(([, n]) => n > 0);
  if (!entries.length) return "0";
  return entries.map(([id, n]) => `${n} ${id}`).join(", ");
}

export default function BattleReport({
  result,
  enemy,
  army,
  intelBefore,
  onBackToGalaxy,
  onRetry,
  lang,
}: BattleReportProps) {
  const durationSec = (result.durationMs / 1000).toFixed(1);
  const intelAfter = Math.min(100, intelBefore + result.intelGained);
  const unitSent = Object.values(army.units).reduce((a, b) => a + Math.max(0, b), 0);
  const outcomeLabel = result.victory
    ? localize(lang, { hu: "GYOZELEM", en: "VICTORY", de: "SIEG", ro: "VICTORIE" })
    : localize(lang, { hu: "VERESEG", en: "DEFEAT", de: "NIEDERLAGE", ro: "INFRANGERE" });

  return (
    <div className="relative h-full w-full overflow-auto rounded-[24px] border border-white/14 bg-[#060b17]/95 p-4 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.15),transparent_44%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 rounded-2xl border border-white/12 bg-black/20 px-3 py-2">
          <div>
            <div className={`text-[13px] font-black tracking-[0.14em] ${result.victory ? "text-emerald-200" : "text-rose-200"}`}>
              {result.victory ? "✅" : "❌"} {outcomeLabel}
            </div>
            <div className="mt-1 text-[11px] text-white/70">{durationSec}s | {localize(lang, { hu: "Neheseg", en: "Difficulty", de: "Schwierigkeit", ro: "Dificultate" })}: {"★".repeat(enemy.difficulty)}{"☆".repeat(Math.max(0, 10 - enemy.difficulty))}</div>
          </div>
          <div className="text-right text-[11px] text-white/65">
            <div>{localize(lang, { hu: "Kuldes", en: "Deployment", de: "Einsatz", ro: "Desfasurare" })}: {unitSent}</div>
            <div>{localize(lang, { hu: "Node", en: "Node", de: "Knoten", ro: "Nod" })}: {enemy.id}</div>
          </div>
        </div>

        <Section title={localize(lang, { hu: "Statisztika", en: "Statistics", de: "Statistik", ro: "Statistici" })}>
          <StatRow label={localize(lang, { hu: "Okozott sebzes", en: "Damage dealt", de: "Verursachter Schaden", ro: "Daune produse" })} value={formatNum(result.stats.damageDealt)} />
          <StatRow label={localize(lang, { hu: "Kapott sebzes", en: "Damage received", de: "Erhaltener Schaden", ro: "Daune primite" })} value={formatNum(result.stats.damageReceived)} />
          <StatRow label={localize(lang, { hu: "Elvesztett egysegek", en: "Units lost", de: "Verlorene Einheiten", ro: "Unitati pierdute" })} value={unitLossText(result)} />
          <StatRow label={localize(lang, { hu: "Ellenseg garnizon pusztitas", en: "Enemy garrison destroyed", de: "Feindgarnison zerstort", ro: "Garnizoana inamica distrusa" })} value={formatNum(result.stats.enemyGarrisonDestroyed)} />
        </Section>

        <Section title={localize(lang, { hu: "Tulajdonsag aktivalasok", en: "Trait activations", de: "Trait-Aktivierungen", ro: "Activari de trasaturi" })}>
          {result.stats.traitTriggered.length === 0 ? (
            <EmptyText text={localize(lang, { hu: "Nem aktivodott kulon trait.", en: "No notable trait activation.", de: "Keine besondere Trait-Aktivierung.", ro: "Nu s-a activat nicio trasatura notabila." })} />
          ) : (
            result.stats.traitTriggered.map((t) => (
              <div key={t} className="rounded-lg border border-white/8 bg-white/[0.03] px-2 py-1 text-[11px]">
                {phaseTag(t)} {t}
              </div>
            ))
          )}
          {result.stats.counterUsed.length > 0 && (
            <div className="mt-2 rounded-lg border border-cyan-300/20 bg-cyan-300/6 px-2 py-1 text-[11px] text-cyan-100">
              {localize(lang, { hu: "Avatar kontra", en: "Avatar counter", de: "Avatar-Konter", ro: "Contra-avatar" })}: {result.stats.counterUsed.join(", ")}
            </div>
          )}
        </Section>

        <Section title={localize(lang, { hu: "Zsakmany", en: "Loot", de: "Beute", ro: "Loot" })}>
          {!result.loot ? (
            <EmptyText text={localize(lang, { hu: "Nincs jutalom ezen kor utan.", en: "No rewards after this run.", de: "Keine Belohnung nach diesem Lauf.", ro: "Fara recompense dupa aceasta runda." })} />
          ) : (
            <>
              {Object.entries(result.loot.materials).map(([id, value]) => (
                <StatRow key={id} label={`📦 ${id}`} value={`+${formatNum(value ?? 0)}`} />
              ))}
              {result.loot.rareDrop && (
                <div className="mt-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[11px] text-amber-100">
                  🌟 {localize(lang, { hu: "RITKA", en: "RARE", de: "SELTEN", ro: "RAR" })}: {localize(lang, result.loot.rareDrop.name)}
                </div>
              )}
            </>
          )}
        </Section>

        <Section title={localize(lang, { hu: "Tanulsag", en: "Lesson", de: "Lektion", ro: "Lectie" })}>
          <StatRow label={localize(lang, { hu: "Intel", en: "Intel", de: "Intel", ro: "Intel" })} value={`${intelBefore}% -> ${intelAfter}% (+${result.intelGained}%)`} />
          <div className="mt-2 rounded-lg border border-emerald-300/20 bg-emerald-300/8 px-2 py-2 text-[11px] text-emerald-100">
            {getLesson(result, lang)}
          </div>
        </Section>

        <div className="mt-4 flex items-center gap-2">
          <button type="button" onClick={onBackToGalaxy} className="flex-1 rounded-xl border border-white/14 bg-white/6 px-3 py-2 text-[12px] font-black text-white/88 transition hover:bg-white/10">
            {localize(lang, { hu: "Vissza a galaxisba", en: "Back to Galaxy", de: "Zuruck zur Galaxie", ro: "Inapoi la galaxie" })}
          </button>
          <button type="button" onClick={onRetry} className="flex-1 rounded-xl border border-cyan-300/28 bg-cyan-300/14 px-3 py-2 text-[12px] font-black text-cyan-100 transition hover:bg-cyan-300/20">
            {localize(lang, { hu: "Ujra", en: "Retry", de: "Erneut", ro: "Reincearca" })}
          </button>
          <button type="button" onClick={onReplay} className="flex-1 rounded-xl border border-amber-300/28 bg-amber-300/14 px-3 py-2 text-[12px] font-black text-amber-100 transition hover:bg-amber-300/20">
            {localize(lang, { hu: "Visszajátszás", en: "Replay", de: "Wiederholung", ro: "Reluare" })}
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] font-black uppercase tracking-[0.16em] text-white/72">{title}</div>
      <div className="mt-2 space-y-1.5">{children}</div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-2 py-1 text-[11px]">
      <span className="text-white/72">{label}</span>
      <span className="text-right font-semibold text-white/92">{value}</span>
    </div>
  );
}

function EmptyText({ text }: { text: string }) {
  return <div className="rounded-lg border border-white/8 bg-white/[0.02] px-2 py-1 text-[11px] text-white/64">{text}</div>;
}

