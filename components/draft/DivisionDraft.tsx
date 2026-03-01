"use client";

import React, { useState, useCallback, useRef, memo } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  useDraft,
  draftKey,
  createDivisionDraft,
  createEmptyRow,
  type DivisionDraftState,
} from "./DraftProvider";

const CELL_SIZE = 32;
const CELL_GAP = 2;

// ─── MEMOIZED CELL ───────────────────────────────────────────

interface CellProps {
  value: string;
  area: string;
  ri: number;
  ci: number;
  onDigit: (area: string, ri: number, ci: number, v: string) => void;
  onNav: (area: string, ri: number, ci: number, key: string, empty: boolean) => void;
  refCb: (area: string, ri: number, ci: number, el: HTMLInputElement | null) => void;
}

const Cell = memo(function Cell({ value, area, ri, ci, onDigit, onNav, refCb }: CellProps) {
  return (
    <input
      ref={(el) => refCb(area, ri, ci, el)}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        if (v === "" || /^[0-9]$/.test(v)) onDigit(area, ri, ci, v);
      }}
      onKeyDown={(e) => {
        if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter","Backspace"].includes(e.key)) {
          onNav(area, ri, ci, e.key, value === "");
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

interface DivisionDraftProps {
  testId: string;
  questionId: string;
  cols?: number;
}

function DivisionDraft({ testId, questionId, cols = 8 }: DivisionDraftProps) {
  const { getDraft, setDraft } = useDraft();
  const key = draftKey(testId, questionId);

  const [state, setState] = useState<DivisionDraftState>(() => {
    const existing = getDraft(key);
    if (existing && existing.type === "division") return existing.state;
    return createDivisionDraft(cols);
  });

  // 2D ref: refs[area] is a map of "row_col" -> element
  // For division we use area prefix since we have multiple grids
  const cellRefs = useRef<Record<string, (HTMLInputElement | null)[][]>>({});

  const refCb = useCallback((area: string, ri: number, ci: number, el: HTMLInputElement | null) => {
    if (!cellRefs.current[area]) cellRefs.current[area] = [];
    if (!cellRefs.current[area][ri]) cellRefs.current[area][ri] = [];
    cellRefs.current[area][ri][ci] = el;
  }, []);

  const focus = useCallback((area: string, ri: number, ci: number) => {
    cellRefs.current[area]?.[ri]?.[ci]?.focus();
  }, []);

  const syncToProvider = useCallback(
    (s: DivisionDraftState) => { setDraft(key, { type: "division", state: s }); },
    [key, setDraft],
  );

  const onDigit = useCallback((area: string, ri: number, ci: number, v: string) => {
    setState((prev) => {
      const next = { ...prev };
      if (area === "dividend") {
        const arr = [...prev.dividend]; arr[ci] = v; next.dividend = arr;
      } else if (area === "divisor") {
        const arr = [...prev.divisor]; arr[ci] = v; next.divisor = arr;
      } else if (area === "quotient") {
        const arr = [...prev.quotient]; arr[ci] = v; next.quotient = arr;
      } else if (area === "work") {
        const newRow = { ...prev.workRows[ri], cells: [...prev.workRows[ri].cells] };
        newRow.cells[ci] = { value: v };
        const newWorkRows = [...prev.workRows];
        newWorkRows[ri] = newRow;
        next.workRows = newWorkRows;
      }
      syncToProvider(next);
      return next;
    });
    // Auto-advance right
    if (v.length === 1) {
      focus(area, ri, ci + 1);
    }
  }, [focus, syncToProvider]);

  const onNav = useCallback((area: string, ri: number, ci: number, key: string, empty: boolean) => {
    switch (key) {
      case "ArrowLeft":  focus(area, ri, ci - 1); break;
      case "ArrowRight": focus(area, ri, ci + 1); break;
      case "ArrowUp":
        if (area === "work" && ri === 0) focus("quotient", 0, ci);
        else if (area === "work") focus("work", ri - 1, ci);
        break;
      case "ArrowDown":
        if (area === "quotient") focus("work", 0, ci);
        else if (area === "work") focus("work", ri + 1, ci);
        break;
      case "Enter":
        if (area === "quotient") focus("work", 0, ci);
        else if (area === "work") focus("work", ri + 1, ci);
        break;
      case "Backspace":
        if (empty && ci > 0) focus(area, ri, ci - 1);
        break;
    }
  }, [focus]);

  const handleToggleLine = useCallback((rowIdx: number) => {
    setState((prev) => {
      const newWorkRows = [...prev.workRows];
      newWorkRows[rowIdx] = { ...newWorkRows[rowIdx], hasLineBelow: !newWorkRows[rowIdx].hasLineBelow };
      const s = { ...prev, workRows: newWorkRows };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleAddWorkRow = useCallback(() => {
    setState((prev) => {
      const s = { ...prev, workRows: [...prev.workRows, createEmptyRow(prev.cols)] };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleRemoveWorkRow = useCallback(() => {
    setState((prev) => {
      if (prev.workRows.length <= 1) return prev;
      const s = { ...prev, workRows: prev.workRows.slice(0, -1) };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleClear = useCallback(() => {
    const s = createDivisionDraft(cols);
    setState(s);
    syncToProvider(s);
  }, [cols, syncToProvider]);

  const mainGridWidth = cols * CELL_SIZE + (cols - 1) * CELL_GAP;
  const gridStyle = { display: "grid" as const, gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`, gap: `${CELL_GAP}px` };
  const divisorGridStyle = { display: "grid" as const, gridTemplateColumns: `repeat(${state.divisor.length}, ${CELL_SIZE}px)`, gap: `${CELL_GAP}px` };

  return (
    <div className="rounded-xl p-3 sm:p-4 border border-gray-200 bg-gray-50/50">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Division</span>
        <div className="flex items-center gap-1">
          <button onClick={handleAddWorkRow} className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100" tabIndex={-1}><Plus size={12} /></button>
          <button onClick={handleRemoveWorkRow} className="p-1 rounded bg-gray-100 text-gray-500 hover:bg-gray-200" disabled={state.workRows.length <= 1} tabIndex={-1}><Minus size={12} /></button>
          <button onClick={handleClear} className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100" tabIndex={-1}><Trash2 size={12} /></button>
        </div>
      </div>
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="inline-flex items-start gap-1 p-2 bg-white rounded-lg border border-gray-100">
          <div className="flex-shrink-0 pt-[34px]">
            <div style={divisorGridStyle}>
              {state.divisor.map((val, ci) => (
                <Cell key={"divisor-0-" + ci} value={val} area="divisor" ri={0} ci={ci} onDigit={onDigit} onNav={onNav} refCb={refCb} />
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 pt-[34px] self-stretch flex items-stretch"><div className="w-px bg-gray-800" /></div>
          <div className="flex-shrink-0" style={{ width: mainGridWidth }}>
            <div style={gridStyle}>
              {state.quotient.map((val, ci) => (
                <Cell key={"quotient-0-" + ci} value={val} area="quotient" ri={0} ci={ci} onDigit={onDigit} onNav={onNav} refCb={refCb} />
              ))}
            </div>
            <div className="border-b-2 border-gray-800 pb-1 mb-1 mt-[2px]" style={gridStyle}>
              {state.dividend.map((val, ci) => (
                <Cell key={"dividend-0-" + ci} value={val} area="dividend" ri={0} ci={ci} onDigit={onDigit} onNav={onNav} refCb={refCb} />
              ))}
            </div>
            {state.workRows.map((row, ri) => (
              <div key={ri} className="flex items-center mt-[2px]">
                <div className={row.hasLineBelow ? "border-b-2 border-gray-800 pb-1 mb-1" : ""} style={gridStyle}>
                  {row.cells.map((cell, ci) => (
                    <Cell key={"work-" + ri + "-" + ci} value={cell.value} area="work" ri={ri} ci={ci} onDigit={onDigit} onNav={onNav} refCb={refCb} />
                  ))}
                </div>
                <button onClick={() => handleToggleLine(ri)} className={`ml-1 flex-shrink-0 p-0.5 rounded text-xs transition-colors ${row.hasLineBelow ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-400 hover:bg-gray-200"}`} tabIndex={-1}><Minus size={10} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-2 text-[10px] text-gray-400">Nyilak: navigáció · Enter: következő sor · Vonalgomb: vonal alá</p>
    </div>
  );
}

export default memo(DivisionDraft);
