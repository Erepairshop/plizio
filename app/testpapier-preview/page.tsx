"use client";

import React, { useState } from "react";

// Import all SVGs
import * as K1K2 from "@/components/testpapier-visual/svg/K1K2SvgsA";
import * as K3K4 from "@/components/testpapier-visual/svg/K3K4SvgsA";
import * as K5K6A from "@/components/testpapier-visual/svg/K5K6SvgsA";
import * as K5K6B from "@/components/testpapier-visual/svg/K5K6SvgsB";
import * as K7 from "@/components/testpapier-visual/svg/K7SvgsA";
import * as K8 from "@/components/testpapier-visual/svg/K8SvgsA";

// Import Question Types
import JahreszeitenBild from "@/components/sachkunde-visual/JahreszeitenBild";
import TierErkennen from "@/components/sachkunde-visual/TierErkennen";
import WetterErkennen from "@/components/sachkunde-visual/WetterErkennen";
import WasserkreislaufOrdnen from "@/components/sachkunde-visual/WasserkreislaufOrdnen";
import PflanzenAnatomie from "@/components/biologie-visual/PflanzenAnatomie";
import LaborSymbol from "@/components/chemie-visual/LaborSymbol";
import StromkreisDiagramm from "@/components/physik-visual/StromkreisDiagramm";

const SVG_GROUPS = [
  {
    title: "K1-K2 (Sachkunde)",
    svgs: Object.entries(K1K2).filter(([name]) => name.endsWith("Svg")),
  },
  {
    title: "K3-K4 (Sachkunde)",
    svgs: Object.entries(K3K4).filter(([name]) => name.endsWith("Svg")),
  },
  {
    title: "K5-K6 (Biologie)",
    svgs: [
      ...Object.entries(K5K6A).filter(([name]) => name.endsWith("Svg")),
      ...Object.entries(K5K6B).filter(([name]) => name.endsWith("Svg")),
    ],
  },
  {
    title: "K7 (Chemie & Physik)",
    svgs: Object.entries(K7).filter(([name]) => name.endsWith("Svg")),
  },
  {
    title: "K8 (Biologie, Geographie, Math)",
    svgs: Object.entries(K8).filter(([name]) => name.endsWith("Svg")),
  },
];

export default function TestpapierPreviewPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (key: string, ans: string) => {
    setAnswers((prev) => ({ ...prev, [key]: ans }));
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20">
      <style jsx global>{`
        body {
          background-image:
            linear-gradient(rgba(100,149,237,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,149,237,0.18) 1px, transparent 1px);
          background-size: 0.5cm 0.5cm;
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 lg:px-8">
        <header className="mb-10 border-b-2 border-slate-900 pb-3">
          <h1 className="text-2xl font-black uppercase tracking-wider sm:text-3xl">Testpapier SVG Library — 49 SVG, K1-K8</h1>
          <p className="mt-1 text-sm text-slate-600">Teljes galéria grade-bucket-enként + új question-types demók.</p>
        </header>

        {SVG_GROUPS.map((group) => (
          <section key={group.title} className="mb-12">
            <h2 className="mb-4 text-xl font-bold uppercase tracking-wider text-indigo-700 border-b border-indigo-200 pb-2">{group.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.svgs.map(([name, SvgComp]) => (
                <div key={name} className="rounded-md border border-slate-300 bg-white/80 p-4 shadow-sm flex flex-col items-center justify-between">
                  <div className="w-full h-32 flex items-center justify-center mb-3">
                    {/* @ts-ignore */}
                    <SvgComp className="w-full h-full max-h-28 object-contain" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded w-full text-center truncate">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-16 mb-10">
          <h2 className="mb-6 text-2xl font-black uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-3">Új question-típusok (Demo)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* K1-K2 */}
            <div className="rounded-md border-l-4 border-indigo-500 bg-white/90 p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-indigo-600 mb-4">K1-K2: JahreszeitenBild</h3>
              <JahreszeitenBild
                svgName="WinterSvg"
                options={["Frühling", "Sommer", "Herbst", "Winter"]}
                correctIndex={3}
                userAnswer={answers["q1"]}
                submitted={!!answers["q1"]}
                onAnswer={(a) => handleAnswer("q1", a)}
              />
            </div>

            <div className="rounded-md border-l-4 border-indigo-500 bg-white/90 p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-indigo-600 mb-4">K1-K2: TierErkennen</h3>
              <TierErkennen
                svgName="KatzeSvg"
                options={["Hund", "Katze", "Vogel", "Fisch"]}
                correctIndex={1}
                userAnswer={answers["q2"]}
                submitted={!!answers["q2"]}
                onAnswer={(a) => handleAnswer("q2", a)}
              />
            </div>

            {/* K3-K4 */}
            <div className="rounded-md border-l-4 border-emerald-500 bg-white/90 p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-emerald-600 mb-4">K3-K4: WetterErkennen</h3>
              <WetterErkennen
                svgName="GewitterSvg"
                options={["Sonnig", "Regen", "Schnee", "Gewitter"]}
                correctIndex={3}
                userAnswer={answers["q3"] || ""}
                submitted={!!answers["q3"]}
                onAnswer={(a) => handleAnswer("q3", a)}
              />
            </div>

            <div className="rounded-md border-l-4 border-emerald-500 bg-white/90 p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-emerald-600 mb-4">K3-K4: WasserkreislaufOrdnen</h3>
              <WasserkreislaufOrdnen
                stages={["Verdunstung", "Kondensation", "Niederschlag", "Fluss"]}
                correctOrder={["Verdunstung", "Kondensation", "Niederschlag", "Fluss"]}
                stageSvgs={{
                  "Verdunstung": "VerdunstungSvg",
                  "Kondensation": "KondensationSvg",
                  "Niederschlag": "NiederschlagSvg",
                  "Fluss": "FlussSvg"
                }}
                userAnswer={answers["q4"] || ""}
                submitted={!!answers["q4"]}
                onAnswer={(a) => handleAnswer("q4", a)}
              />
            </div>

            {/* K5-K6 */}
            <div className="rounded-md border-l-4 border-amber-500 bg-white/90 p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-amber-600 mb-4">K5-K6: PflanzenAnatomie</h3>
              <PflanzenAnatomie
                partEmoji="🌸"
                partHint="Dient der Fortpflanzung, oft bunt gefärbt"
                svgName="BlumeSvg"
                options={["Wurzel", "Stängel", "Blüte", "Blatt"]}
                correctIndex={2}
                userAnswer={answers["q5"] || ""}
                submitted={!!answers["q5"]}
                onAnswer={(a) => handleAnswer("q5", a)}
              />
            </div>

            {/* K7 */}
            <div className="rounded-md border-l-4 border-rose-500 bg-white/90 p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-rose-600 mb-4">K7: LaborSymbol (Chemie)</h3>
              <LaborSymbol
                prompt="Was bedeutet dieses Symbol?"
                diagramId="flammable"
                options={["Entzündlich", "Giftig", "Ätzend", "Reizend"]}
                correctIndex={0}
                userAnswer={answers["q6"] || ""}
                submitted={!!answers["q6"]}
                onAnswer={(a) => handleAnswer("q6", a)}
                lang="de"
              />
            </div>

            <div className="rounded-md border-l-4 border-rose-500 bg-white/90 p-5 shadow-sm">
              <h3 className="text-sm font-bold uppercase text-rose-600 mb-4">K7: StromkreisDiagramm (Physik)</h3>
              <StromkreisDiagramm
                prompt="Welcher Stromkreis ist geschlossen?"
                diagrams={["open", "closed", "series", "parallel"]}
                correctIndex={1}
                userAnswer={answers["q7"] || ""}
                submitted={!!answers["q7"]}
                onAnswer={(a) => handleAnswer("q7", a)}
                lang="de"
              />
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
