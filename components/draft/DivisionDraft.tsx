"use client";

import React, { useState, useCallback, useRef, useEffect, memo } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  useDraft,
  draftKey,
  createDivisionDraft,
  createEmptyRow,
  type DivisionDraftState,
} from "./DraftProvider";

// ─── PROPS ─────────────────────────────────────────────────

interface DivisionDraftProps {
  testId: string;
  questionId: string;
  /** Number of digit columns (default 10) */
  cols?: number;
}

// ─── SINGLE CELL (reusable) ─────────────────────────────────────

interface CellProps {
  value: string;
  area: string;
  rowIdx: number;
  colIdx: number;
  isFocused: boolean;
  onInput: (area: string, row: number, col: number, value: string) => void;
  onKeyDown: (area: string, row: number, col: number, e: React.KeyboardEvent) => void;
  onFocus: (area: string, row: number, col: number) => void;
}

const DivCell = memo(function DivCell({
  value,
  area,
  rowIdx,
  colIdx,
  isFocused,
  onInput,
  onKeyDown,
  onFocus,
}: CellProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        if (v === "" || /^[0-9]$/.test(v)) {
          onInput(area, rowIdx, colIdx, v);
        }
      }}
      onKeyDown={(e) => onKeyDown(area, rowIdx, colIdx, e)}
      onFocus={() => onFocus(area, rowIdx, colIdx)}
      className={`
        w-7 h-7 sm:w-8 sm:h-8
        text-center text-xs sm:text-sm font-mono font-bold
        border border-gray-300 rounded
        bg-white text-gray-800
        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300
        transition-colors
      `}
      style={{ caretColor: "transparent" }}
    />
  );
});

// ─── MAIN COMPONENT ─────────────────────────────────────────────

function DivisionDraft({
  testId,
  questionId,
  cols = 10,
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

  const syncToProvider = useCallback(
    (newState: DivisionDraftState) => {
      setDraft(key, { type: "division", state: newState });
    },
    [key, setDraft],
  );

  // ─── Input handler for all areas ───
  const handleInput = useCallback(
    (area: string, row: number, col: number, value: string) => {
      setState((prev) => {
        const next = { ...prev };

        if (area === "dividend") {
          const newDividend = [...prev.dividend];
          newDividend[col] = value;
          next.dividend = newDividend;
        } else if (area === "divisor") {
          const newDivisor = [...prev.divisor];
          newDivisor[col] = value;
          next.divisor = newDivisor;
        } else if (area === "quotient") {
          const newQuotient = [...prev.quotient];
          newQuotient[col] = value;
          next.quotient = newQuotient;
        } else if (area === "work") {
          const newWorkRows = prev.workRows.map((r, ri) =>
            ri === row
              ? {
                  ...r,
                  cells: r.cells.map((c, ci) =>
                    ci === col ? { value } : c,
                  ),
                }
              : r,
          );
          next.workRows = newWorkRows;
        }

        // Auto-advance right
        if (value !== "") {
          if (area === "work") {
            next.focusCol = Math.min(prev.cols - 1, col + 1);
          } else if (area === "divisor") {
            next.focusCol = Math.min(prev.divisor.length - 1, col + 1);
          } else {
            next.focusCol = Math.min(prev.cols - 1, col + 1);
          }
        }
        next.focusArea = area as "quotient" | "work";
        next.focusRow = row;

        syncToProvider(next);
        return next;
      });
    },
    [syncToProvider],
  );

  // ─── Key navigation ───
  const handleKeyDown = useCallback(
    (area: string, row: number, col: number, e: React.KeyboardEvent) => {
      setState((prev) => {
        let newArea = area;
        let newRow = row;
        let newCol = col;

        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            newCol = Math.max(0, col - 1);
            break;
          case "ArrowRight":
            e.preventDefault();
            if (area === "divisor") {
              newCol = Math.min(prev.divisor.length - 1, col + 1);
            } else {
              newCol = Math.min(prev.cols - 1, col + 1);
            }
            break;
          case "ArrowUp":
            e.preventDefault();
            if (area === "work" && row === 0) {
              newArea = "quotient";
              newRow = 0;
            } else if (area === "work") {
              newRow = Math.max(0, row - 1);
            }
            break;
          case "ArrowDown":
            e.preventDefault();
            if (area === "quotient") {
              newArea = "work";
              newRow = 0;
            } else if (area === "work") {
              newRow = Math.min(prev.workRows.length - 1, row + 1);
            }
            break;
          case "Enter":
            e.preventDefault();
            if (area === "quotient") {
              newArea = "work";
              newRow = 0;
            } else if (area === "work") {
              newRow = Math.min(prev.workRows.length - 1, row + 1);
            }
            break;
          case "Backspace":
            if (area === "work" && prev.workRows[row].cells[col].value === "") {
              e.preventDefault();
              newCol = Math.max(0, col - 1);
            } else if (area === "quotient" && prev.quotient[col] === "") {
              e.preventDefault();
              newCol = Math.max(0, col - 1);
            } else if (area === "divisor" && prev.divisor[col] === "") {
              e.preventDefault();
              newCol = Math.max(0, col - 1);
            }
            break;
          default:
            return prev;
        }

        const newState = {
          ...prev,
          focusArea: newArea as "quotient" | "work",
          focusRow: newRow,
          focusCol: newCol,
        };
        syncToProvider(newState);
        return newState;
      });
    },
    [syncToProvider],
  );

  // ─── Focus handler ───
  const handleFocus = useCallback(
    (area: string, row: number, col: number) => {
      setState((prev) => {
        const newState = {
          ...prev,
          focusArea: area as "quotient" | "work",
          focusRow: row,
          focusCol: col,
        };
        syncToProvider(newState);
        return newState;
      });
    },
    [syncToProvider],
  );

  // ─── Toggle line on work rows ───
  const handleToggleLine = useCallback(
    (rowIdx: number) => {
      setState((prev) => {
        const newWorkRows = prev.workRows.map((r, ri) =>
          ri === rowIdx ? { ...r, hasLineBelow: !r.hasLineBelow } : r,
        );
        const newState = { ...prev, workRows: newWorkRows };
        syncToProvider(newState);
        return newState;
      });
    },
    [syncToProvider],
  );

  // ─── Add/remove work rows ───
  const handleAddWorkRow = useCallback(() => {
    setState((prev) => {
      const newWorkRows = [...prev.workRows, createEmptyRow(prev.cols)];
      const newState = { ...prev, workRows: newWorkRows };
      syncToProvider(newState);
      return newState;
    });
  }, [syncToProvider]);

  const handleRemoveWorkRow = useCallback(() => {
    setState((prev) => {
      if (prev.workRows.length <= 1) return prev;
      const newWorkRows = prev.workRows.slice(0, -1);
      const newState = { ...prev, workRows: newWorkRows };
      syncToProvider(newState);
      return newState;
    });
  }, [syncToProvider]);

  // ─── Clear ───
  const handleClear = useCallback(() => {
    const newState = createDivisionDraft(cols);
    setState(newState);
    syncToProvider(newState);
  }, [cols, syncToProvider]);

  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Osztás piszkozat
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={handleAddWorkRow}
            className="p-1.5 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            title="Sor hozzáadása"
          >
            <Plus size={14} />
          </button>
          <button
            onClick={handleRemoveWorkRow}
            className="p-1.5 rounded bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
            title="Utolsó sor törlése"
            disabled={state.workRows.length <= 1}
          >
            <Minus size={14} />
          </button>
          <button
            onClick={handleClear}
            className="p-1.5 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            title="Mindent töröl"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <div className="inline-block p-2 bg-gray-50 rounded-lg">
        {/* Division layout: divisor | dividend with quotient on top */}
        <div className="flex items-start gap-1">
          {/* Divisor column (left side) */}
          <div className="flex flex-col items-end pt-8 mr-1">
            <div className="flex gap-0.5">
              {state.divisor.map((val, colIdx) => (
                <DivCell
                  key={`divisor-${colIdx}`}
                  value={val}
                  area="divisor"
                  rowIdx={0}
                  colIdx={colIdx}
                  isFocused={
                    state.focusArea === "work" &&
                    state.focusRow === -1 &&
                    state.focusCol === colIdx
                  }
                  onInput={handleInput}
                  onKeyDown={handleKeyDown}
                  onFocus={handleFocus}
                />
              ))}
            </div>
          </div>

          {/* Main area: quotient + dividend + work rows */}
          <div className="flex flex-col gap-0.5">
            {/* Quotient row (result) */}
            <div className="flex gap-0.5 mb-0.5">
              {state.quotient.map((val, colIdx) => (
                <DivCell
                  key={`quotient-${colIdx}`}
                  value={val}
                  area="quotient"
                  rowIdx={0}
                  colIdx={colIdx}
                  isFocused={
                    state.focusArea === "quotient" &&
                    state.focusRow === 0 &&
                    state.focusCol === colIdx
                  }
                  onInput={handleInput}
                  onKeyDown={handleKeyDown}
                  onFocus={handleFocus}
                />
              ))}
            </div>

            {/* Dividend row (the number being divided) */}
            <div className="flex gap-0.5 pb-1 mb-1 border-b-2 border-gray-800">
              {state.dividend.map((val, colIdx) => (
                <DivCell
                  key={`dividend-${colIdx}`}
                  value={val}
                  area="dividend"
                  rowIdx={0}
                  colIdx={colIdx}
                  isFocused={false} // dividend usually pre-filled
                  onInput={handleInput}
                  onKeyDown={handleKeyDown}
                  onFocus={handleFocus}
                />
              ))}
            </div>

            {/* Work rows (intermediate calculations) */}
            {state.workRows.map((row, rowIdx) => (
              <div
                key={`work-${rowIdx}`}
                className={`flex items-center gap-0.5 ${
                  row.hasLineBelow ? "pb-1 mb-1 border-b-2 border-gray-800" : ""
                }`}
              >
                {row.cells.map((cell, colIdx) => (
                  <DivCell
                    key={`work-${rowIdx}-${colIdx}`}
                    value={cell.value}
                    area="work"
                    rowIdx={rowIdx}
                    colIdx={colIdx}
                    isFocused={
                      state.focusArea === "work" &&
                      state.focusRow === rowIdx &&
                      state.focusCol === colIdx
                    }
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                  />
                ))}
                {/* Line toggle */}
                <button
                  onClick={() => handleToggleLine(rowIdx)}
                  className={`ml-1 p-1 rounded text-xs transition-colors ${
                    row.hasLineBelow
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`}
                  title={row.hasLineBelow ? "Vonal törlése" : "Vonal hozzáadása"}
                  tabIndex={-1}
                >
                  <Minus size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-2 text-[10px] text-gray-400">
        Nyilak: navigáció | Enter: következő sor | Vonal gomb: vonal alá
      </p>
    </div>
  );
}

export default memo(DivisionDraft);
