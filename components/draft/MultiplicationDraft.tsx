"use client";

import React, { useState, useCallback, useRef, memo } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  useDraft,
  draftKey,
  createMultiplicationDraft,
  createEmptyRow,
  type MultiplicationDraftState,
} from "./DraftProvider";

const CELL_SIZE = 32;
const CELL_GAP = 2;
const MAX_ROWS = 12;

// ─── MEMOIZED CELL ───────────────────────────────────────────

interface CellProps {
  value: string;
  ri: number;
  ci: number;
  onDigit: (ri: number, ci: number, v: string) => void;
  onNav: (ri: number, ci: number, key: string, empty: boolean) => void;
  refCb: (ri: number, ci: number, el: HTMLInputElement | null) => void;
}

const Cell = memo(function Cell({ value, ri, ci, onDigit, onNav, refCb }: CellProps) {
  return (
    <input
      ref={(el) => refCb(ri, ci, el)}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        if (v === "" || /^[0-9]$/.test(v)) onDigit(ri, ci, v);
      }}
      onKeyDown={(e) => {
        if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter","Backspace"].includes(e.key)) {
          onNav(ri, ci, e.key, value === "");
          if (e.key !== "Backspace" || value === "") e.preventDefault();
        } else if (e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      }}
      className="text-center text-sm font-mono font-bold border border-gray-300 rounded bg-white text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
      style={{ width: CELL_SIZE, height: CELL_SIZE, caretColor: "transparent", padding: 0 }}
    />
  );
});

// ─── MAIN ────────────────────────────────────────────────────

interface MultiplicationDraftProps {
  testId: string;
  questionId: string;
  cols?: number;
  initialRows?: number;
}

function MultiplicationDraft({ testId, questionId, cols = 8, initialRows = 6 }: MultiplicationDraftProps) {
  const { getDraft, setDraft } = useDraft();
  const key = draftKey(testId, questionId);

  const [state, setState] = useState<MultiplicationDraftState>(() => {
    const existing = getDraft(key);
    if (existing && existing.type === "multiplication") return existing.state;
    return createMultiplicationDraft(cols, initialRows);
  });

  const cellRefs = useRef<(HTMLInputElement | null)[][]>([]);

  const refCb = useCallback((ri: number, ci: number, el: HTMLInputElement | null) => {
    if (!cellRefs.current[ri]) cellRefs.current[ri] = [];
    cellRefs.current[ri][ci] = el;
  }, []);

  const syncToProvider = useCallback(
    (s: MultiplicationDraftState) => { setDraft(key, { type: "multiplication", state: s }); },
    [key, setDraft],
  );

  const onDigit = useCallback((ri: number, ci: number, v: string) => {
    setState((prev) => {
      const newRow = { ...prev.rows[ri], cells: [...prev.rows[ri].cells] };
      newRow.cells[ci] = { value: v };
      const newRows = [...prev.rows];
      newRows[ri] = newRow;
      const s = { ...prev, rows: newRows };
      syncToProvider(s);
      return s;
    });
    if (v.length === 1) {
      cellRefs.current[ri]?.[ci - 1]?.focus();
    }
  }, [syncToProvider]);

  const onNav = useCallback((ri: number, ci: number, key: string, empty: boolean) => {
    switch (key) {
      case "ArrowLeft":  cellRefs.current[ri]?.[ci - 1]?.focus(); break;
      case "ArrowRight": cellRefs.current[ri]?.[ci + 1]?.focus(); break;
      case "ArrowUp":    cellRefs.current[ri - 1]?.[ci]?.focus(); break;
      case "ArrowDown":  cellRefs.current[ri + 1]?.[ci]?.focus(); break;
      case "Enter":      cellRefs.current[ri + 1]?.[ci]?.focus(); break;
      case "Backspace":
        if (empty && ci + 1 < cols) {
          setState((p) => {
            const newRow = { ...p.rows[ri], cells: [...p.rows[ri].cells] };
            newRow.cells[ci + 1] = { value: "" };
            const newRows = [...p.rows];
            newRows[ri] = newRow;
            const s = { ...p, rows: newRows };
            syncToProvider(s);
            return s;
          });
          cellRefs.current[ri]?.[ci + 1]?.focus();
        }
        break;
    }
  }, [cols, syncToProvider]);

  const handleToggleLine = useCallback((rowIdx: number) => {
    setState((prev) => {
      const newRows = [...prev.rows];
      newRows[rowIdx] = { ...newRows[rowIdx], hasLineBelow: !newRows[rowIdx].hasLineBelow };
      const s = { ...prev, rows: newRows };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleAddRow = useCallback(() => {
    setState((prev) => {
      if (prev.rows.length >= MAX_ROWS) return prev;
      const s = { ...prev, rows: [...prev.rows, createEmptyRow(prev.cols)] };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleRemoveRow = useCallback(() => {
    setState((prev) => {
      if (prev.rows.length <= 2) return prev;
      const s = { ...prev, rows: prev.rows.slice(0, -1) };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleClear = useCallback(() => {
    const s = createMultiplicationDraft(cols, initialRows);
    setState(s);
    syncToProvider(s);
  }, [cols, initialRows, syncToProvider]);

  const gridStyle = {
    display: "grid" as const,
    gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
    gap: `${CELL_GAP}px`,
  };

  return (
    <div className="rounded-xl p-3 sm:p-4 border border-gray-200 bg-gray-50/50">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Szorzás</span>
        <div className="flex items-center gap-1">
          <button onClick={handleAddRow} className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100" tabIndex={-1} disabled={state.rows.length >= MAX_ROWS}><Plus size={12} /></button>
          <button onClick={handleRemoveRow} className="p-1 rounded bg-gray-100 text-gray-500 hover:bg-gray-200" disabled={state.rows.length <= 2} tabIndex={-1}><Minus size={12} /></button>
          <button onClick={handleClear} className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100" tabIndex={-1}><Trash2 size={12} /></button>
        </div>
      </div>
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="inline-block p-2 bg-white rounded-lg border border-gray-100">
          {state.rows.map((row, ri) => (
            <div key={ri} className="flex items-center mt-[2px] first:mt-0">
              <div className="w-5 flex-shrink-0 text-center text-sm font-black text-gray-600 select-none">
                {ri === 1 ? "×" : ""}
              </div>
              <div className={row.hasLineBelow ? "border-b-2 border-gray-800 pb-1 mb-1" : ""} style={gridStyle}>
                {row.cells.map((cell, ci) => (
                  <Cell key={ri + "-" + ci} value={cell.value} ri={ri} ci={ci} onDigit={onDigit} onNav={onNav} refCb={refCb} />
                ))}
              </div>
              <button onClick={() => handleToggleLine(ri)} className={`ml-1 flex-shrink-0 p-0.5 rounded text-xs transition-colors ${row.hasLineBelow ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`} tabIndex={-1}><Minus size={10} /></button>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2 text-[10px] text-gray-400">1. sor: szorzandó · 2. sor: szorzó · Alatta: részeredmények</p>
    </div>
  );
}

export default memo(MultiplicationDraft);
