"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { Trash2 } from "lucide-react";

// ─── SAFE EXPRESSION EVALUATOR ──────────────────────────────
// Only handles: numbers, +, -, *, ×, /, ÷, (, )
// Returns null if invalid or too complex

function safeEval(expr: string): number | null {
  // Normalize: replace × with * and ÷ with /
  const normalized = expr
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/,/g, ".")
    .trim();

  // Only allow safe characters
  if (!/^[\d\s+\-*/().]+$/.test(normalized)) return null;

  // Must contain at least one operator
  if (!/[+\-*/]/.test(normalized)) return null;

  try {
    // eslint-disable-next-line no-new-func
    const result = Function(`"use strict"; return (${normalized})`)() as unknown;
    if (typeof result !== "number" || !isFinite(result)) return null;
    // Round to avoid floating point artifacts
    return Math.round(result * 1000000) / 1000000;
  } catch {
    return null;
  }
}

// ─── TYPES ────────────────────────────────────────────────────

interface Step {
  expr: string;
  result: number | null;
}

interface StepCalcDraftProps {
  countryCode?: string;
}

const LABELS = {
  HU: { placeholder: "pl. 6+10", hint: "Írj egy számítást → Enter", clear: "Töröl", empty: "Még nincs lépés" },
  DE: { placeholder: "z.B. 6+10", hint: "Rechnung eingeben → Enter", clear: "Löschen", empty: "Noch kein Schritt" },
  EN: { placeholder: "e.g. 6+10", hint: "Enter a calculation → Enter", clear: "Clear", empty: "No steps yet" },
  RO: { placeholder: "ex. 6+10", hint: "Introdu un calcul → Enter", clear: "Șterge", empty: "Niciun pas încă" },
};

function getLang(cc: string) {
  if (cc === "HU") return "HU";
  if (cc === "RO") return "RO";
  if (cc === "US" || cc === "GB") return "EN";
  return "DE";
}

// ─── COMPONENT ────────────────────────────────────────────────

function StepCalcDraft({ countryCode = "DE" }: StepCalcDraftProps) {
  const lang = getLang(countryCode);
  const t = LABELS[lang as keyof typeof LABELS];
  const [steps, setSteps] = useState<Step[]>([]);
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when steps grow
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [steps]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      const expr = input.trim();
      if (!expr) return;

      const result = safeEval(expr);
      if (result === null) {
        // Shake on invalid input
        setShake(true);
        setTimeout(() => setShake(false), 400);
        return;
      }

      setSteps((prev) => [...prev, { expr, result }]);
      setInput("");
    },
    [input],
  );

  const handleClear = useCallback(() => {
    setSteps([]);
    setInput("");
    inputRef.current?.focus();
  }, []);

  const appendToInput = useCallback((ch: string) => {
    setInput((prev) => {
      if (ch === "⌫") return prev.slice(0, -1);
      if (ch === "=") {
        // Trigger submit via the current input + ch logic
        return prev;
      }
      return prev + ch;
    });
    if (ch !== "⌫") inputRef.current?.focus();
  }, []);

  // Submit via operator button "=" tap
  const handleEqualsBtn = useCallback(() => {
    const expr = input.trim();
    if (!expr) return;
    const result = safeEval(expr);
    if (result === null) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    setSteps((prev) => [...prev, { expr, result }]);
    setInput("");
  }, [input]);

  const OPS = ["+", "−", "×", "÷", "(", ")", "⌫"];

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50/50 overflow-hidden">
      {/* Steps list */}
      <div
        className="px-3 py-2 min-h-[80px] max-h-[160px] overflow-y-auto font-mono text-sm"
        style={{ scrollbarWidth: "thin" }}
      >
        {steps.length === 0 ? (
          <p className="text-gray-300 text-xs text-center pt-4">{t.empty}</p>
        ) : (
          steps.map((step, i) => (
            <div key={i} className="flex items-baseline gap-1 py-0.5 leading-snug">
              <span className="text-gray-400 text-[10px] w-4 flex-shrink-0 select-none">{i + 1}.</span>
              <span className="text-gray-700">{step.expr}</span>
              <span className="text-gray-400 mx-1">=</span>
              <span className="font-black text-indigo-700">
                {Number.isInteger(step.result)
                  ? step.result
                  : step.result!.toFixed(4).replace(/\.?0+$/, "")}
              </span>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Input row */}
      <div className="flex items-center gap-2 px-3 py-2 bg-white">
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.placeholder}
          className={`flex-1 text-sm font-mono bg-transparent outline-none text-gray-800 placeholder-gray-300 transition-transform ${
            shake ? "translate-x-1" : ""
          }`}
          autoComplete="off"
          autoCorrect="off"
        />
        {steps.length > 0 && (
          <button
            onClick={handleClear}
            className="flex-shrink-0 p-1 rounded text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors"
            title={t.clear}
            tabIndex={-1}
          >
            <Trash2 size={12} />
          </button>
        )}
      </div>

      {/* Operator buttons — always visible, essential on mobile */}
      <div className="border-t border-gray-100 flex items-center bg-gray-50/80 px-2 py-1.5 gap-1">
        {OPS.map((op) => (
          <button
            key={op}
            onPointerDown={(e) => {
              e.preventDefault(); // don't blur input
              appendToInput(op === "−" ? "-" : op === "×" ? "*" : op === "÷" ? "/" : op);
            }}
            className={`flex-1 py-1.5 rounded-lg text-sm font-bold transition-colors select-none ${
              op === "⌫"
                ? "text-red-500 bg-red-50 hover:bg-red-100"
                : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100"
            }`}
            tabIndex={-1}
          >
            {op}
          </button>
        ))}
        <button
          onPointerDown={(e) => {
            e.preventDefault();
            handleEqualsBtn();
          }}
          className="flex-1 py-1.5 rounded-lg text-sm font-black text-white bg-indigo-600 hover:bg-indigo-700 transition-colors select-none"
          tabIndex={-1}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default memo(StepCalcDraft);
