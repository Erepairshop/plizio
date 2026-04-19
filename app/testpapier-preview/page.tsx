"use client";

import {
  SunSvg as FlashSun,
  ThermometerSvg as FlashThermometer,
  StromkreisSvg as FlashStromkreis,
} from "@/components/testpapier-visual/svg/ProbeSvgs";
import {
  SunSvg as ProSun,
  ThermometerSvg as ProThermometer,
  StromkreisSvg as ProStromkreis,
} from "@/components/testpapier-visual/svg/ProbeSvgsPro";

const MODELS = [
  { id: "flash", label: "Gemini 3 Flash (Chromebook)", Sun: FlashSun, Thermometer: FlashThermometer, Stromkreis: FlashStromkreis },
  { id: "pro", label: "Gemini 3.1 Pro (Windows)", Sun: ProSun, Thermometer: ProThermometer, Stromkreis: ProStromkreis },
];

const SCENARIOS = [
  {
    name: "SunSvg — K1-K2 Sachkunde (évszak/időjárás)",
    hint: "🌞 Welche Jahreszeit passt zum Bild?",
    choices: ["Winter", "Frühling", "Sommer", "Herbst"],
    key: "Sun",
  },
  {
    name: "ThermometerSvg — K3-K4 Math (mértékegység)",
    hint: "Wie viel Grad zeigt das Thermometer?",
    choices: ["10°C", "15°C", "20°C", "25°C"],
    key: "Thermometer",
  },
  {
    name: "StromkreisSvg — K7 Physik (áramkör)",
    hint: "Was fließt durch den Stromkreis, wenn die Lampe leuchtet?",
    choices: ["Wasser", "Strom", "Wärme", "Licht"],
    key: "Stromkreis",
  },
] as const;

export default function TestpapierPreviewPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <style jsx global>{`
        body {
          background-image:
            linear-gradient(rgba(100,149,237,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,149,237,0.18) 1px, transparent 1px);
          background-size: 0.5cm 0.5cm;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 border-b-2 border-slate-900 pb-3">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl">Testpapier SVG — Style Benchmark</h1>
          <p className="mt-1 text-sm text-slate-600">Flash vs Pro, 3 POC SVG összehasonlítás. A papír-grid háttér ugyanaz mint a test-route print-ben.</p>
        </header>

        {SCENARIOS.map((scenario) => (
          <section key={scenario.key} className="mb-10 rounded-md bg-white/60 p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-700">{scenario.name}</h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {MODELS.map((model) => {
                const SvgComp = model[scenario.key as keyof typeof model] as React.ComponentType<{ className?: string }>;
                return (
                  <div key={model.id} className="rounded border-l-4 border-slate-300 bg-white/80 p-3">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{model.label}</div>

                    {/* SVG area (border-less, on paper-grid) */}
                    <div className="mx-auto my-3 w-full max-w-sm">
                      <SvgComp className="w-full h-auto max-h-36" />
                    </div>

                    {/* Hint + MCQ chips — simulate test-paper layout */}
                    <div className="ml-7 mt-2 text-sm italic text-slate-500">{scenario.hint}</div>
                    <div className="ml-7 mt-3 flex flex-wrap gap-2">
                      {scenario.choices.map((c) => (
                        <span key={c} className="inline-flex items-center gap-1 rounded border border-slate-300 bg-white px-2 py-0.5 text-xs">
                          ☐ {c}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <footer className="mt-10 border-t border-slate-300 pt-4 text-xs text-slate-500">
          <p><strong>Ha OK:</strong> döntés → az összes K1-K8 test-route-ra skálázzuk a nyertes stílusban.</p>
          <p><strong>Mobil:</strong> reszponzív — nyisd meg telefonon hogy lásd tap-target méretet.</p>
        </footer>
      </div>
    </main>
  );
}
