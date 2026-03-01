"use client";

import React, { useState, useCallback, useRef, useEffect, memo } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import {
  useDraft,
  draftKey,
  createColumnDraft,
  createEmptyRow,
  type ColumnDraftState,
  type RowData,
} from "./DraftProvider";

// ─── PROPS ─────────────────────────────────────────────────

interface ColumnMathDraftProps {
  testId: string;
  questionId: string;
  /** Number of columns in the grid (default 8) */
  cols?: number;
  /** Initial number of rows (default 4) */
  initialRows?: number;
}

// ─── SINGLE CELL ─────────────────────────────────────────────────

interface CellProps {
  value: string;
  rowIdx: number;
  colIdx: number;
  isFocused: boolean;
  onInput: (row: number, col: number, value: string) => void;
  onKeyDown: (row: number, col: number, e: React.KeyboardEvent) => void;
  onFocus: (row: number, col: number) => void;
}

const DraftCell = memo(function DraftCell({
  value,
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
        // Allow only single digits or empty
        if (v === "" || /^[0-9]$/.test(v)) {
          onInput(rowIdx, colIdx, v);
        }
      }}
      onKeyDown={(e) => onKeyDown(rowIdx, colIdx, e)}
      onFocus={() => onFocus(rowIdx, colIdx)}
      className={`
        w-8 h-8 sm:w-9 sm:h-9
        text-center text-sm sm:text-base font-mono font-bold
        border border-gray-300 rounded
        bg-white text-gray-800
        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300
        transition-colors
      `}
      style={{ caretColor: "transparent" }}
    />
  );
});

// ─── GRID ROW ─────────────────────────────────────────────────

interface GridRowProps {
  row: RowData;
  rowIdx: number;
  focusRow: number;
  focusCol: number;
  onInput: (row: number, col: number, value: string) => void;
  onKeyDown: (row: number, col: number, e: React.KeyboardEvent) => void;
  onFocus: (row: number, col: number) => void;
  onToggleLine: (rowIdx: number) => void;
}

const GridRow = memo(function GridRow({
  row,
  rowIdx,
  focusRow,
  focusCol,
  onInput,
  onKeyDown,
  onFocus,
  onToggleLine,
}: GridRowProps) {
  return (
    <div
      className={`flex items-center gap-0.5 ${
        row.hasLineBelow ? "pb-1 mb-1 border-b-2 border-gray-800" : ""
      }`}
    >
      {row.cells.map((cell, colIdx) => (
        <DraftCell
          key={colIdx}
          value={cell.value}
          rowIdx={rowIdx}
          colIdx={colIdx}
          isFocused={focusRow === rowIdx && focusCol === colIdx}
          onInput={onInput}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
        />
      ))}
      {/* Line toggle button */}
      <button
        onClick={() => onToggleLine(rowIdx)}
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
  );
});

// ─── MAIN COMPONENT ─────────────────────────────────────────────────

function ColumnMathDraft({
  testId,
  questionId,
  cols = 8,
  initialRows = 4,
}: ColumnMathDraftProps) {
  const { getDraft, setDraft } = useDraft();
  const key = draftKey(testId, questionId);

  // Initialize state from context or create new
  const [state, setState] = useState<ColumnDraftState>(() => {
    const existing = getDraft(key);
    if (existing && existing.type === "column") {
      return existing.state;
    }
    return createColumnDraft(cols, initialRows);
  });

  // Sync state back to provider
  const syncToProvider = useCallback(
    (newState: ColumnDraftState) => {
      setDraft(key, { type: "column", state: newState });
    },
    [key, setDraft],
  );

  // ─── Cell input handler ───
  const handleInput = useCallback(
    (row: number, col: number, value: string) => {
      setState((prev) => {
        const newRows = prev.rows.map((r, ri) =>
          ri === row
            ? {
                ...r,
                cells: r.cells.map((c, ci) =>
                  ci === col ? { value } : c,
                ),
              }
            : r,
        );
        // Auto-advance to next cell on the left (right-to-left input)
        const nextCol = value !== "" ? Math.max(0, col - 1) : col;
        const newState: ColumnDraftState = {
          ...prev,
          rows: newRows,
          focusRow: row,
          focusCol: nextCol,
        };
        syncToProvider(newState);
        return newState;
      });
    },
    [syncToProvider],
  );

  // ─── Key navigation handler ───
  const handleKeyDown = useCallback(
    (row: number, col: number, e: React.KeyboardEvent) => {
      setState((prev) => {
        let newRow = row;
        let newCol = col;

        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault();
            newCol = Math.max(0, col - 1);
            break;
          case "ArrowRight":
            e.preventDefault();
            newCol = Math.min(prev.cols - 1, col + 1);
            break;
          case "ArrowUp":
            e.preventDefault();
            newRow = Math.max(0, row - 1);
            break;
          case "ArrowDown":
            e.preventDefault();
            newRow = Math.min(prev.rows.length - 1, row + 1);
            break;
          case "Enter":
            e.preventDefault();
            // Move to next row, same column
            newRow = Math.min(prev.rows.length - 1, row + 1);
            break;
          case "Backspace":
            if (prev.rows[row].cells[col].value === "") {
              e.preventDefault();
              // Move left if current cell is empty
              newCol = Math.max(0, col - 1);
            }
            break;
          case "Tab":
            // Let default tab behavior work
            return prev;
          default:
            return prev;
        }

        if (newRow !== row || newCol !== col) {
          const newState = { ...prev, focusRow: newRow, focusCol: newCol };
          syncToProvider(newState);
          return newState;
        }
        return prev;
      });
    },
    [syncToProvider],
  );

  // ─── Focus handler ───
  const handleFocus = useCallback(
    (row: number, col: number) => {
      setState((prev) => {
        const newState = { ...prev, focusRow: row, focusCol: col };
        syncToProvider(newState);
        return newState;
      });
    },
    [syncToProvider],
  );

  // ─── Toggle line below a row ───
  const handleToggleLine = useCallback(
    (rowIdx: number) => {
      setState((prev) => {
        const newRows = prev.rows.map((r, ri) =>
          ri === rowIdx ? { ...r, hasLineBelow: !r.hasLineBelow } : r,
        );
        const newState = { ...prev, rows: newRows };
        syncToProvider(newState);
        return newState;
      });
    },
    [syncToProvider],
  );

  // ─── Add row ───
  const handleAddRow = useCallback(() => {
    setState((prev) => {
      const newRows = [...prev.rows, createEmptyRow(prev.cols)];
      const newState = {
        ...prev,
        rows: newRows,
        focusRow: newRows.length - 1,
        focusCol: prev.cols - 1,
      };
      syncToProvider(newState);
      return newState;
    });
  }, [syncToProvider]);

  // ─── Remove last row ───
  const handleRemoveRow = useCallback(() => {
    setState((prev) => {
      if (prev.rows.length <= 2) return prev;
      const newRows = prev.rows.slice(0, -1);
      const newState = {
        ...prev,
        rows: newRows,
        focusRow: Math.min(prev.focusRow, newRows.length - 1),
      };
      syncToProvider(newState);
      return newState;
    });
  }, [syncToProvider]);

  // ─── Clear all ───
  const handleClear = useCallback(() => {
    const newState = createColumnDraft(cols, initialRows);
    setState(newState);
    syncToProvider(newState);
  }, [cols, initialRows, syncToProvider]);

  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Oszlopos piszkozat
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={handleAddRow}
            className="p-1.5 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            title="Sor hozzáadása"
          >
            <Plus size={14} />
          </button>
          <button
            onClick={handleRemoveRow}
            className="p-1.5 rounded bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
            title="Utolsó sor törlése"
            disabled={state.rows.length <= 2}
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

      {/* Grid */}
      <div className="inline-flex flex-col gap-0.5 p-2 bg-gray-50 rounded-lg">
        {state.rows.map((row, rowIdx) => (
          <GridRow
            key={rowIdx}
            row={row}
            rowIdx={rowIdx}
            focusRow={state.focusRow}
            focusCol={state.focusCol}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onToggleLine={handleToggleLine}
          />
        ))}
      </div>

      {/* Hint */}
      <p className="mt-2 text-[10px] text-gray-400">
        Nyilak: navigáció | Enter: következő sor | Vonal gomb: vonal alá
      </p>
    </div>
  );
}

export default memo(ColumnMathDraft);
