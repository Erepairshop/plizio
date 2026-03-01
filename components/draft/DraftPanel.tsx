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
  /** Optional hint to pre-select a draft type based on the question */
  suggestedType?: DraftType;
}

// ─── TAB DEFINITIONS ─────────────────────────────────────────────

const TABS: { type: DraftType; label: string; shortLabel: string; icon: React.ReactNode }[] = [
  {
    type: "column",
    label: "Oszlopos",
    shortLabel: "+/-",
    icon: <Grid3X3 size={14} />,
  },
  {
    type: "multiplication",
    label: "Szorzás",
    shortLabel: "x",
    icon: <Multiply size={14} />,
  },
  {
    type: "division",
    label: "Osztás",
    shortLabel: "÷",
    icon: <Divide size={14} />,
  },
  {
    type: "free",
    label: "Szabad",
    shortLabel: "Raj.",
    icon: <PenTool size={14} />,
  },
];

// ─── MAIN COMPONENT ─────────────────────────────────────────────

function DraftPanel({ testId, questionId, suggestedType }: DraftPanelProps) {
  const [activeType, setActiveType] = useState<DraftType>(suggestedType || "column");

  return (
    <div className="space-y-2">
      {/* Tab bar */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
        {TABS.map((tab) => (
          <button
            key={tab.type}
            onClick={() => setActiveType(tab.type)}
            className={`
              flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-md
              text-xs font-bold transition-all
              ${
                activeType === tab.type
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Active draft component */}
      <div>
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
