"use client";

interface Props {
  power: number;
  materials: number;
  stability: number;
  activation: number;
  entropy: number;
  urgent?: Partial<Record<"power" | "materials" | "stability" | "activation" | "entropy", boolean>>;
  labels: {
    power: string;
    materials: string;
    stability: string;
    activation: string;
    entropy: string;
  };
}

function StatChip({ label, value, accent, urgent = false }: { label: string; value: number; accent: string; urgent?: boolean }) {
  return (
    <div className={`rounded-2xl border px-4 py-3 min-w-[100px] flex-1 transition-colors ${urgent ? "border-rose-400/30 bg-rose-500/10" : "border-white/10 bg-white/5"}`}>
      <div className="text-[10px] uppercase tracking-[0.28em] text-white/45 font-black">{label}</div>
      <div className={`mt-1 text-xl font-black ${urgent ? "animate-pulse" : ""}`} style={{ color: urgent ? "#FB7185" : accent }}>{value}</div>
    </div>
  );
}

export default function GravitasHUD({ power, materials, stability, activation, entropy, labels, urgent }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <StatChip label={labels.power} value={power} accent="#60A5FA" urgent={urgent?.power} />
      <StatChip label={labels.materials} value={materials} accent="#F59E0B" urgent={urgent?.materials} />
      <StatChip label={labels.stability} value={stability} accent="#34D399" urgent={urgent?.stability} />
      <StatChip label={labels.activation} value={activation} accent="#F472B6" urgent={urgent?.activation} />
      <StatChip label={labels.entropy} value={entropy} accent="#F43F5E" urgent={urgent?.entropy} />
    </div>
  );
}
