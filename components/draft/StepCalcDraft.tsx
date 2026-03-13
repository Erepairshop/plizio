"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { Trash2, Check } from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────

interface Step {
  expr: string;
  result: string; // student-entered, not computed
}

interface StepCalcDraftProps {
  countryCode?: string;
}

const LABELS = {
  HU: { exprPlaceholder: "pl. (-6)×6", resultPlaceholder: "?", save: "Mentés", clear: "Töröl", empty: "Még nincs lépés", hint: "Írd be a kifejezést és a saját eredményed" },
  DE: { exprPlaceholder: "z.B. (-6)×6", resultPlaceholder: "?", save: "Speichern", clear: "Löschen", empty: "Noch kein Schritt", hint: "Ausdruck und dein Ergebnis eingeben" },
  EN: { exprPlaceholder: "e.g. (-6)×6", resultPlaceholder: "?", save: "Save", clear: "Clear", empty: "No steps yet", hint: "Write the expression and your own answer" },
  RO: { exprPlaceholder: "ex. (-6)×6", resultPlaceholder: "?", save: "Salvează", clear: "Șterge", empty: "Niciun pas încă", hint: "Scrie expresia și propriul rezultat" },
};

function getLang(cc: string) {
  if (cc === "HU") return "HU";
  if (cc === "RO") return "RO";
  if (cc === "US" || cc === "GB") return "EN";
  return "DE";
}

const OPS = ["+", "−", "×", "÷", "(", ")", "⌫"];

// ─── COMPONENT ────────────────────────────────────────────────

function StepCalcDraft({ countryCode = "DE" }: StepCalcDraftProps) {
  const lang = getLang(countryCode);
  const t = LABELS[lang as keyof typeof LABELS];

  const [steps, setSteps] = useState<Step[]>([]);
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");
  const [activeField, setActiveField] = useState<"expr" | "result">("expr");

  const exprRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [steps]);

  const handleSave = useCallback(() => {
    const e = expr.trim();
    const r = result.trim();
    if (!e || !r) return;
    setSteps((prev) => [...prev, { expr: e, result: r }]);
    setExpr("");
    setResult("");
    setActiveField("expr");
    exprRef.current?.focus();
  }, [expr, result]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, field: "expr" | "result") => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      if (field === "expr" && expr.trim()) {
        setActiveField("result");
        resultRef.current?.focus();
      } else if (field === "result") {
        handleSave();
      }
    },
    [expr, handleSave],
  );

  const appendOp = useCallback((op: string) => {
    const ch = op === "−" ? "-" : op === "×" ? "×" : op === "÷" ? "÷" : op;
    if (activeField === "result") {
      if (ch === "⌫") { setResult((p) => p.slice(0, -1)); return; }
      // only allow digits, minus, dot in result field
      if (/^[\d.\-]$/.test(ch)) setResult((p) => p + ch);
      return;
    }
    if (ch === "⌫") { setExpr((p) => p.slice(0, -1)); return; }
    setExpr((p) => p + ch);
    exprRef.current?.focus();
  }, [activeField]);

  const handleClear = useCallback(() => {
    setSteps([]);
    setExpr("");
    setResult("");
    exprRef.current?.focus();
  }, []);

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50/50 overflow-hidden">
      {/* Steps list */}
      <div
        className="px-3 py-2 min-h-[72px] max-h-[140px] overflow-y-auto font-mono text-sm"
        style={{ scrollbarWidth: "thin" }}
      >
        {steps.length === 0 ? (
          <p className="text-gray-300 text-xs text-center pt-4 font-sans">{t.empty}</p>
        ) : (
          steps.map((step, i) => (
            <div key={i} className="flex items-baseline gap-1 py-0.5 leading-snug">
              <span className="text-gray-400 text-[10px] w-4 flex-shrink-0 select-none">{i + 1}.</span>
              <span className="text-gray-700">{step.expr}</span>
              <span className="text-gray-400 mx-1">=</span>
              <span className="font-black text-indigo-700">{step.result}</span>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Input row: [expr] = [result] [✓] */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white">
        <input
          ref={exprRef}
          type="text"
          inputMode="text"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "expr")}
          onFocus={() => setActiveField("expr")}
          placeholder={t.exprPlaceholder}
          className={`flex-1 text-sm font-mono bg-transparent outline-none text-gray-800 placeholder-gray-300 min-w-0 ${
            activeField === "expr" ? "border-b border-indigo-400" : "border-b border-transparent"
          }`}
          autoComplete="off"
          autoCorrect="off"
        />
        <span className="text-gray-500 font-bold text-sm flex-shrink-0">=</span>
        <input
          ref={resultRef}
          type="text"
          inputMode="numeric"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "result")}
          onFocus={() => setActiveField("result")}
          placeholder={t.resultPlaceholder}
          className={`w-16 text-sm font-mono font-black text-indigo-700 bg-transparent outline-none placeholder-gray-300 text-center ${
            activeField === "result" ? "border-b border-indigo-400" : "border-b border-gray-300"
          }`}
          autoComplete="off"
        />
        <button
          onPointerDown={(e) => { e.preventDefault(); handleSave(); }}
          disabled={!expr.trim() || !result.trim()}
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-indigo-600 text-white disabled:opacity-30 disabled:bg-gray-300 transition-colors"
          tabIndex={-1}
        >
          <Check size={13} />
        </button>
        {steps.length > 0 && (
          <button
            onPointerDown={(e) => { e.preventDefault(); handleClear(); }}
            className="flex-shrink-0 p-1 rounded text-red-400 hover:bg-red-50 transition-colors"
            title={t.clear}
            tabIndex={-1}
          >
            <Trash2 size={12} />
          </button>
        )}
      </div>

      {/* Operator buttons */}
      <div className="border-t border-gray-100 flex items-center bg-gray-50/80 px-2 py-1.5 gap-1">
        {OPS.map((op) => (
          <button
            key={op}
            onPointerDown={(e) => {
              e.preventDefault();
              appendOp(op);
            }}
            className={`flex-1 py-1.5 rounded-lg text-sm font-bold transition-colors select-none ${
              op === "⌫"
                ? "text-red-500 bg-red-50 hover:bg-red-100"
                : activeField === "result" && !/^[\d.\-]$/.test(op === "−" ? "-" : op)
                ? "text-gray-300 bg-gray-50 cursor-default"
                : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100"
            }`}
            tabIndex={-1}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(StepCalcDraft);
