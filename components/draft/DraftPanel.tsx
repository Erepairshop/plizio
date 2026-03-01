"use client";

import React, { useState, memo } from "react";
import { Grid3X3, Divide, X as Multiply, PenTool } from "lucide-react";
import ColumnMathDraft from "./ColumnMathDraft";
import DivisionDraft from "./DivisionDraft";
import MultiplicationDraft from "./MultiplicationDraft";
import FreeDraftCanvas from "./FreeDraftCanvas";

// ─── TYPES ─────────────────────────────────────────────────

type DraftType = "column" | "division" | "multiplication" | "free";

interface DraftPanelProps {
  testId: string;
  questionId: string;
  suggestedType?: DraftType;
}

// ─── TAB DEFINITIONS ─────────────────────────────────────────

const TABS: { type: DraftType; label: string; shortLabel: string; icon: React.ReactNode }[] = [
  { type: "column", label: "Spalten", shortLabel: "+/-", icon: <Grid3X3 size={14} /> },
  { type: "multiplication", label: "Multiplikation", shortLabel: "×", icon: <Multiply size={14} /> },
  { type: "division", label: "Division", shortLabel: "÷", icon: <Divide size={14} /> },
  { type: "free", label: "Freihand", shortLabel: "Skizze", icon: <PenTool size={14} /> },
];

// ─── MAIN COMPONENT ─────────────────────────────────────────

function DraftPanel({ testId, questionId, suggestedType }: DraftPanelProps) {
  const [activeType, setActiveType] = useState<DraftType>(suggestedType || "column");

  return (
    <div
      className="relative space-y-2"
      style={{
        // No stacking context, no overlay, no z-index
        position: "relative",
        zIndex: "auto",
      }}
    >
      {/* Tab bar - neutral colors that work in both dark and light contexts */}
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

      {/* Active draft - always rendered relative, never absolute/fixed */}
      <div className="relative">
        {activeType === "column" && (
          <ColumnMathDraft testId={testId} questionId={questionId} />
        )}
        {activeType === "multiplication" && (
          <MultiplicationDraft testId={testId} questionId={questionId} />
        )}
        {activeType === "division" && (
          <DivisionDraft testId={testId} questionId={questionId} />
        )}
        {activeType === "free" && (
          <FreeDraftCanvas testId={testId} questionId={questionId} />
        )}
      </div>
    </div>
  );
}

export default memo(DraftPanel);
