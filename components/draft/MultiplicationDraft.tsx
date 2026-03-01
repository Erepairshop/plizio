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

// ─── CONSTANTS ─────────────────────────────────────────────

const CELL_SIZE = 32;
const CELL_GAP = 2;
const MAX_ROWS = 12;

// ─── MAIN COMPONENT ─────────────────────────────────────────

interface MultiplicationDraftProps {
  testId: string;
  questionId: string;
  cols?: number;
  initialRows?: number;
}

function MultiplicationDraft({
  testId,
  questionId,
  cols = 8,
  initialRows = 6,
}: MultiplicationDraftProps) {
  const { getDraft, setDraft } = useDraft();
  const key = draftKey(testId, questionId);

  const [state, setState] = useState<MultiplicationDraftState>(() => {
    const existing = getDraft(key);
    if (existing && existing.type === "multiplication") {
      return existing.state;
    }
    return createMultiplicationDraft(cols, initialRows);
  });

  // ─── REF GRID ───
  const cellRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  const setCellRef = useCallback((row: number, col: number, el: HTMLInputElement | null) => {
    const k = `${row}_${col}`;
    if (el) cellRefs.current.set(k, el);
    else cellRefs.current.delete(k);
  }, []);

  const focusCell = useCallback((row: number, col: number) => {
    requestAnimationFrame(() => {
      const el = cellRefs.current.get(`${row}_${col}`);
      if (el) el.focus();
    });
  }, []);

  const syncToProvider = useCallback(
    (newState: MultiplicationDraftState) => {
      setDraft(key, { type: "multiplication", state: newState });
    },
    [key, setDraft],
  );

  const gridStyle = {
    display: "grid" as const,
    gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
    gap: `${CELL_GAP}px`,
  };

  // ─── Cell input with auto-advance ───
  const handleCellInput = useCallback(
    (row: number, col: number, value: string) => {
      setState((prev) => {
        const newRows = prev.rows.map((r, ri) =>
          ri === row
            ? { ...r, cells: r.cells.map((c, ci) => (ci === col ? { value } : c)) }
            : r,
        );
        const s: MultiplicationDraftState = { ...prev, rows: newRows, focusRow: row, focusCol: col };
        syncToProvider(s);
        return s;
      });

      if (value !== "") {
        const nextCol = col - 1;
        if (nextCol >= 0) focusCell(row, nextCol);
      }
    },
    [focusCell, syncToProvider],
  );

  // ─── Key navigation ───
  const handleCellKeyDown = useCallback(
    (row: number, col: number, e: React.KeyboardEvent) => {
      const rowCount = state.rows.length;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          if (col > 0) focusCell(row, col - 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (col < cols - 1) focusCell(row, col + 1);
          break;
        case "ArrowUp":
          e.preventDefault();
          if (row > 0) focusCell(row - 1, col);
          break;
        case "ArrowDown":
          e.preventDefault();
          if (row < rowCount - 1) focusCell(row + 1, col);
          break;
        case "Enter":
          e.preventDefault();
          if (row < rowCount - 1) focusCell(row + 1, col);
          break;
        case "Backspace": {
          if (state.rows[row]?.cells[col]?.value === "") {
            e.preventDefault();
            const prevCol = col + 1;
            if (prevCol < cols) {
              setState((prev) => {
                const newRows = prev.rows.map((r, ri) =>
                  ri === row
                    ? { ...r, cells: r.cells.map((c, ci) => (ci === prevCol ? { value: "" } : c)) }
                    : r,
                );
                const s = { ...prev, rows: newRows };
                syncToProvider(s);
                return s;
              });
              focusCell(row, prevCol);
            }
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
    [cols, state.rows, focusCell, syncToProvider],
  );

  const handleToggleLine = useCallback(
    (rowIdx: number) => {
      setState((prev) => {
        const newRows = prev.rows.map((r, ri) =>
          ri === rowIdx ? { ...r, hasLineBelow: !r.hasLineBelow } : r,
        );
        const s = { ...prev, rows: newRows };
        syncToProvider(s);
        return s;
      });
    },
    [syncToProvider],
  );

  const handleAddRow = useCallback(() => {
    setState((prev) => {
      if (prev.rows.length >= MAX_ROWS) return prev;
      const newRows = [...prev.rows, createEmptyRow(prev.cols)];
      const s = { ...prev, rows: newRows };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleRemoveRow = useCallback(() => {
    setState((prev) => {
      if (prev.rows.length <= 2) return prev;
      const newRows = prev.rows.slice(0, -1);
      const s = { ...prev, rows: newRows };
      syncToProvider(s);
      return s;
    });
  }, [syncToProvider]);

  const handleClear = useCallback(() => {
    const s = createMultiplicationDraft(cols, initialRows);
    setState(s);
    syncToProvider(s);
  }, [cols, initialRows, syncToProvider]);

  return (
    <div className="rounded-xl p-3 sm:p-4 border border-gray-200 bg-gray-50/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Szorzás
        </span>
        <div className="flex items-center gap-1">
          <button onClick={handleAddRow} className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" title="Sor hozzáadása" tabIndex={-1} disabled={state.rows.length >= MAX_ROWS}>
            <Plus size={12} />
          </button>
          <button onClick={handleRemoveRow} className="p-1 rounded bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors" title="Utolsó sor törlése" disabled={state.rows.length <= 2} tabIndex={-1}>
            <Minus size={12} />
          </button>
          <button onClick={handleClear} className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors" title="Mindent töröl" tabIndex={-1}>
            <Trash2 size={12} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="inline-block p-2 bg-white rounded-lg border border-gray-100">
          {state.rows.map((row, ri) => (
            <div key={ri} className="flex items-center mt-[2px] first:mt-0">
              {/* × symbol on second row */}
              <div className="w-5 flex-shrink-0 text-center text-sm font-black text-gray-600 select-none">
                {ri === 1 ? "×" : ""}
              </div>
              <div
                className={row.hasLineBelow ? "border-b-2 border-gray-800 pb-1 mb-1" : ""}
                style={gridStyle}
              >
                {row.cells.map((cell, ci) => (
                  <input
                    key={ci}
                    ref={(el) => setCellRef(ri, ci, el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={cell.value}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === "" || /^[0-9]$/.test(v)) {
                        handleCellInput(ri, ci, v);
                      }
                    }}
                    onKeyDown={(e) => handleCellKeyDown(ri, ci, e)}
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
                ))}
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

      <p className="mt-2 text-[10px] text-gray-400">
        1. sor: szorzandó · 2. sor: szorzó · Alatta: részeredmények
      </p>
    </div>
  );
}

export default memo(MultiplicationDraft);
