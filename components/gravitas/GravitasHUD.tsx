"use client";

interface Props {
  power: number;
  materials: number;
  stability: number;
  activation: number;
  entropy: number;
  labels: {
    power: string;
    materials: string;
    stability: string;
    activation: string;
    entropy: string;
  };
}

function StatChip({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 min-w-[100px] flex-1">
      <div className="text-[10px] uppercase tracking-[0.28em] text-white/45 font-black">{label}</div>
      <div className="mt-1 text-xl font-black" style={{ color: accent }}>{value}</div>
    </div>
  );
}

export default function GravitasHUD({ power, materials, stability, activation, entropy, labels }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <StatChip label={labels.power} value={power} accent="#60A5FA" />
      <StatChip label={labels.materials} value={materials} accent="#F59E0B" />
      <StatChip label={labels.stability} value={stability} accent="#34D399" />
      <StatChip label={labels.activation} value={activation} accent="#F472B6" />
      <StatChip label={labels.entropy} value={entropy} accent="#F43F5E" />
    </div>
  );
}
