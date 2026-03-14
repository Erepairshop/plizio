"use client";

import React, { useState, memo } from "react";
import { Grid3X3, Divide, X as Multiply, PenTool, Calculator } from "lucide-react";
import ColumnMathDraft from "./ColumnMathDraft";
import DivisionDraft from "./DivisionDraft";
import MultiplicationDraft from "./MultiplicationDraft";
import FreeDraftCanvas from "./FreeDraftCanvas";
import StepCalcDraft from "./StepCalcDraft";
import { getDraftT } from "./draftI18n";

// ─── TYPES ─────────────────────────────────────────────────

type DraftType = "calc" | "column" | "multiplication" | "division" | "free";

interface DraftPanelProps {
  testId: string;
  questionId: string;
  suggestedType?: DraftType;
  countryCode?: string;
}

// ─── MAIN COMPONENT ─────────────────────────────────────────

function DraftPanel({ testId, questionId, suggestedType, countryCode = "DE" }: DraftPanelProps) {
  const [activeType, setActiveType] = useState<DraftType>(suggestedType || "calc");
  const t = getDraftT(countryCode);

  const TABS: { type: DraftType; label: string; shortLabel: string; icon: React.ReactNode }[] = [
    { type: "calc", label: t.tabCalc, shortLabel: t.tabCalcShort, icon: <Calculator size={14} /> },
    { type: "column", label: t.tabColumn, shortLabel: t.tabColumnShort, icon: <Grid3X3 size={14} /> },
    { type: "multiplication", label: t.tabMultiplication, shortLabel: "×", icon: <Multiply size={14} /> },
    { type: "division", label: t.tabDivision, shortLabel: "÷", icon: <Divide size={14} /> },
    { type: "free", label: t.tabFree, shortLabel: t.tabFreeShort, icon: <PenTool size={14} /> },
  ];

  return (
    <div
      className="relative space-y-2"
      style={{
        position: "relative",
        zIndex: "auto",
      }}
    >
      {/* Tab bar */}
      <div className="flex gap-1 bg-gray-200/80 rounded-lg p-0.5">
        {TABS.map((tab) => (
          <button
            key={tab.type}
            onClick={() => setActiveType(tab.type)}
            className={`
              flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-md
              text-xs font-bold transition-colors
              ${
                activeType === tab.type
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
              }
            `}
            tabIndex={-1}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Active draft */}
      <div className="relative">
        {activeType === "calc" && (
          <StepCalcDraft countryCode={countryCode} />
        )}
        {activeType === "column" && (
          <ColumnMathDraft testId={testId} questionId={questionId} countryCode={countryCode} />
        )}
        {activeType === "multiplication" && (
          <MultiplicationDraft testId={testId} questionId={questionId} countryCode={countryCode} />
        )}
        {activeType === "division" && (
          <DivisionDraft testId={testId} questionId={questionId} countryCode={countryCode} />
        )}
        {activeType === "free" && (
          <FreeDraftCanvas testId={testId} questionId={questionId} countryCode={countryCode} />
        )}
      </div>
    </div>
  );
}

export default memo(DraftPanel);
