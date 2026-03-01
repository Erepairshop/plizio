"use client";

import React, { createContext, useContext, useCallback, useRef } from "react";

// ─── TYPES ─────────────────────────────────────────────────

/** Single cell in the grid */
export interface CellData {
  value: string; // single character
}

/** A row of cells */
export interface RowData {
  cells: CellData[];
  hasLineBelow: boolean; // CSS border-bottom line
}

/** Column math draft state (addition, subtraction) */
export interface ColumnDraftState {
  rows: RowData[];
  cols: number;
  focusRow: number;
  focusCol: number;
}

/** Division draft state */
export interface DivisionDraftState {
  dividend: string[];      // top row cells
  divisor: string[];       // left side
  quotient: string[];      // result row
  workRows: RowData[];     // intermediate work rows
  cols: number;
  focusArea: "quotient" | "work";
  focusRow: number;
  focusCol: number;
}

/** Multiplication draft state */
export interface MultiplicationDraftState {
  rows: RowData[];
  cols: number;
  focusRow: number;
  focusCol: number;
}

/** Free canvas drawing point */
export interface DrawPoint {
  x: number;
  y: number;
}

/** Free canvas stroke */
export interface DrawStroke {
  points: DrawPoint[];
  color: string;
  width: number;
}

/** Free draft canvas state */
export interface FreeDraftState {
  strokes: DrawStroke[];
}

/** Union of all draft types */
export type DraftData =
  | { type: "column"; state: ColumnDraftState }
  | { type: "division"; state: DivisionDraftState }
  | { type: "multiplication"; state: MultiplicationDraftState }
  | { type: "free"; state: FreeDraftState };

// ─── CONTEXT ─────────────────────────────────────────────────

interface DraftContextValue {
  /** Get draft state by key (testId_questionId) */
  getDraft: (key: string) => DraftData | undefined;
  /** Set draft state by key */
  setDraft: (key: string, data: DraftData) => void;
  /** Remove draft by key */
  removeDraft: (key: string) => void;
  /** Check if draft exists */
  hasDraft: (key: string) => boolean;
  /** Clear all drafts */
  clearAll: () => void;
}

const DraftContext = createContext<DraftContextValue | null>(null);

// ─── HOOK ─────────────────────────────────────────────────

export function useDraft() {
  const ctx = useContext(DraftContext);
  if (!ctx) {
    throw new Error("useDraft must be used inside <DraftProvider>");
  }
  return ctx;
}

// ─── PROVIDER ─────────────────────────────────────────────────

/**
 * DraftProvider stores all draft state in a ref (not useState)
 * to avoid re-renders of the entire tree on every keystroke.
 * Individual draft components manage their own local state
 * and sync back to the provider via setDraft.
 */
export default function DraftProvider({ children }: { children: React.ReactNode }) {
  // Use ref to avoid re-renders - drafts are read/written by individual components
  const draftsRef = useRef<Map<string, DraftData>>(new Map());

  const getDraft = useCallback((key: string): DraftData | undefined => {
    return draftsRef.current.get(key);
  }, []);

  const setDraft = useCallback((key: string, data: DraftData) => {
    draftsRef.current.set(key, data);
  }, []);

  const removeDraft = useCallback((key: string) => {
    draftsRef.current.delete(key);
  }, []);

  const hasDraft = useCallback((key: string): boolean => {
    return draftsRef.current.has(key);
  }, []);

  const clearAll = useCallback(() => {
    draftsRef.current.clear();
  }, []);

  const value: DraftContextValue = {
    getDraft,
    setDraft,
    removeDraft,
    hasDraft,
    clearAll,
  };

  return (
    <DraftContext.Provider value={value}>
      {children}
    </DraftContext.Provider>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────

/** Create an empty row with given number of columns */
export function createEmptyRow(cols: number): RowData {
  return {
    cells: Array.from({ length: cols }, () => ({ value: "" })),
    hasLineBelow: false,
  };
}

/** Create initial column draft state */
export function createColumnDraft(cols: number = 8, rows: number = 4): ColumnDraftState {
  return {
    rows: Array.from({ length: rows }, () => createEmptyRow(cols)),
    cols,
    focusRow: 0,
    focusCol: cols - 1, // start right-aligned
  };
}

/** Create initial division draft state */
export function createDivisionDraft(cols: number = 10): DivisionDraftState {
  return {
    dividend: Array.from({ length: cols }, () => ""),
    divisor: Array.from({ length: 4 }, () => ""),
    quotient: Array.from({ length: cols }, () => ""),
    workRows: Array.from({ length: 4 }, () => createEmptyRow(cols)),
    cols,
    focusArea: "quotient",
    focusRow: 0,
    focusCol: 0,
  };
}

/** Create initial multiplication draft state */
export function createMultiplicationDraft(cols: number = 8, rows: number = 6): MultiplicationDraftState {
  return {
    rows: Array.from({ length: rows }, () => createEmptyRow(cols)),
    cols,
    focusRow: 0,
    focusCol: cols - 1,
  };
}

/** Build a draft key from test and question IDs */
export function draftKey(testId: string, questionId: string): string {
  return `${testId}_${questionId}`;
}
