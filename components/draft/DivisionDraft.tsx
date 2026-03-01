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

// ─── CONSTANTS ─────────────────────────────────────────────

const CELL_SIZE = 32;
const CELL_GAP = 2;

// ─── MAIN COMPONENT ─────────────────────────────────────────

interface DivisionDraftProps {
  testId: string;
  questionId: string;
  cols?: number;
}

function DivisionDraft({
  testId,
  questionId,
  cols = 8,
}: DivisionDraftProps) {
  const { getDraft, setDraft } = useDraft();
  const key = draftKey(testId, questionId);

  const [state, setState] = useState<DivisionDraftState>(() => {
    const existing = getDraft(key);
    if (existing && existing.type === "division") {
      return existing.state;
    }
    return createDivisionDraft(cols);
  });

  // ─── REF GRID: "area_row_col" -> HTMLInputElement ───
  const cellRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  const setCellRef = useCallback((area: string, row: number, col: number, el: HTMLInputElement | null) => {
    const k = `${area}_${row}_${col}`;
    if (el) cellRefs.current.set(k, el);
    else cellRefs.current.delete(k);
  }, []);

  const focusCell = useCallback((area: string, row: number, col: number) => {
    requestAnimationFrame(() => {
      const el = cellRefs.current.get(`${area}_${row}_${col}`);
      if (el) el.focus();
    });
  }, []);

  const syncToProvider = useCallback(
    (newState: DivisionDraftState) => {
      setDraft(key, { type: "division", state: newState });
    },
    [key, setDraft],
  );

  const gridStyle = {
    display: "grid" as const,
    gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
    gap: `${CELL_GAP}px`,
  };

  const divisorGridStyle = {
    display: "grid" as const,
    gridTemplateColumns: `repeat(${state.divisor.length}, ${CELL_SIZE}px)`,
    gap: `${CELL_GAP}px`,
  };

  // ─── Input handler ───
  const handleInput = useCallback(
    (area: string, row: number, col: number, value: string) => {
      setState((prev) => {
        const next = { ...prev };

        if (area === "dividend") {
          const arr = [...prev.dividend];
          arr[col] = value;
          next.dividend = arr;
        } else if (area === "divisor") {
          const arr = [...prev.divisor];
          arr[col] = value;
          next.divisor = arr;
        } else if (area === "quotient") {
          const arr = [...prev.quotient];
          arr[col] = value;
          next.quotient = arr;
        } else if (area === "work") {
          next.workRows = prev.workRows.map((r, ri) =>
            ri === row
              ? { ...r, cells: r.cells.map((c, ci) => (ci === col ? { value } : c)) }
              : r,
          );
        }

        syncToProvider(next);
        return next;
      });

      // Auto-advance right on input
      if (value !== "") {
        const maxCol = area === "divisor" ? state.divisor.length - 1 : cols - 1;
        if (col < maxCol) {
          focusCell(area, row, col + 1);
        }
      }
    },
    [cols, state.divisor.length, focusCell, syncToProvider],
  );

  // ─── Key navigation ───
  const handleKeyDown = useCallback(
    (area: string, row: number, col: number, e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          if (col > 0) focusCell(area, row, col - 1);
          break;
        case "ArrowRight": {
          e.preventDefault();
          const max = area === "divisor" ? state.divisor.length - 1 : cols - 1;
          if (col < max) focusCell(area, row, col + 1);
          break;
        }
        case "ArrowUp":
          e.preventDefault();
          if (area === "work" && row === 0) {
            focusCell("quotient", 0, col);
          } else if (area === "work" && row > 0) {
            focusCell("work", row - 1, col);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (area === "quotient") {
            focusCell("work", 0, col);
          } else if (area === "work" && row < state.workRows.length - 1) {
            focusCell("work", row + 1, col);
          }
          break;
        case "Enter":
          e.preventDefault();
          if (area === "quotient") {
            focusCell("work", 0, col);
          } else if (area === "work" && row < state.workRows.length - 1) {
            focusCell("work", row + 1, col);
          }
          break;
        case "Backspace": {
          let isEmpty = false;
          if (area === "work") isEmpty = state.workRows[row]?.cells[col]?.value === "";
          else if (area === "quotient") isEmpty = state.quotient[col] === "";
          else if (area === "divisor") isEmpty = state.divisor[col] === "";
          else isEmpty = state.dividend[col] === "";

          if (isEmpty && col > 0) {
            e.preventDefault();
            focusCell(area, row, col - 1);
          }
          break;
        }
        default:
          if (e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
            e.preventDefault();
          }
          break;
      }
    },
    [cols, state.divisor, state.quotient, state.dividend, state.workRows, focusCell],
  );

  // ─── Toggle line ───
  const handleToggleLine = useCallback(
    (rowIdx: number) => {
      setState((prev) => {
        const newWorkRows = prev.workRows.map((r, ri) =>
          ri === rowIdx ? { ...r, hasLineBelow: !r.hasLineBelow } : r,
        );
        const s = { ...prev, workRows: newWorkRows };
        syncToProvider(s);
        return s;
      });
    },
    [syncToProvider],
  );

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

  // ─── Inline cell renderer ───
  const renderCell = (area: string, row: number, col: number, value: string) => (
    <input
      key={`${area}-${row}-${col}`}
      ref={(el) => setCellRef(area, row, col, el)}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        if (v === "" || /^[0-9]$/.test(v)) {
          handleInput(area, row, col, v);
        }
      }}
      onKeyDown={(e) => handleKeyDown(area, row, col, e)}
      className="
        text-center text-sm font-mono font-bold
        border border-gray-300 rounded
        bg-white text-gray-800
        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300
      "
      style={{
        width: CELL_SIZE,
        height: CELL_SIZE,
        caretColor: "transparent",
        padding: 0,
      }}
    />
  );

  return (
    <div className="rounded-xl p-3 sm:p-4 border border-gray-200 bg-gray-50/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Osztás
        </span>
        <div className="flex items-center gap-1">
          <button onClick={handleAddWorkRow} className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" title="Sor hozzáadása" tabIndex={-1}>
            <Plus size={12} />
          </button>
          <button onClick={handleRemoveWorkRow} className="p-1 rounded bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors" title="Utolsó sor törlése" disabled={state.workRows.length <= 1} tabIndex={-1}>
            <Minus size={12} />
          </button>
          <button onClick={handleClear} className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors" title="Mindent töröl" tabIndex={-1}>
            <Trash2 size={12} />
          </button>
        </div>
      </div>

      {/* Division layout with CSS Grid */}
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="inline-flex items-start gap-1 p-2 bg-white rounded-lg border border-gray-100">
          {/* Divisor (left) */}
          <div className="flex-shrink-0 pt-[34px]">
            <div style={divisorGridStyle}>
              {state.divisor.map((val, ci) => renderCell("divisor", 0, ci, val))}
            </div>
          </div>

          {/* Vertical separator */}
          <div className="flex-shrink-0 pt-[34px] self-stretch flex items-stretch">
            <div className="w-px bg-gray-800" />
          </div>

          {/* Main grid: quotient + dividend + work rows */}
          <div className="flex-shrink-0" style={{ width: mainGridWidth }}>
            {/* Quotient */}
            <div style={gridStyle}>
              {state.quotient.map((val, ci) => renderCell("quotient", 0, ci, val))}
            </div>

            {/* Dividend with bottom border */}
            <div className="border-b-2 border-gray-800 pb-1 mb-1 mt-[2px]" style={gridStyle}>
              {state.dividend.map((val, ci) => renderCell("dividend", 0, ci, val))}
            </div>

            {/* Work rows */}
            {state.workRows.map((row, ri) => (
              <div key={ri} className="flex items-center mt-[2px]">
                <div
                  className={row.hasLineBelow ? "border-b-2 border-gray-800 pb-1 mb-1" : ""}
                  style={gridStyle}
                >
                  {row.cells.map((cell, ci) => renderCell("work", ri, ci, cell.value))}
                </div>
                <button
                  onClick={() => handleToggleLine(ri)}
                  className={`ml-1 flex-shrink-0 p-0.5 rounded text-xs transition-colors ${
                    row.hasLineBelow
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`}
                  title={row.hasLineBelow ? "Vonal törlése" : "Vonal"}
                  tabIndex={-1}
                >
                  <Minus size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-2 text-[10px] text-gray-400">
        Nyilak: navigáció · Enter: következő sor · Vonalgomb: vonal alá
      </p>
    </div>
  );
}

export default memo(DivisionDraft);
