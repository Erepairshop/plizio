"use client";

import React, { useState, useCallback, useRef, useEffect, memo } from "react";
import { Trash2, Undo2 } from "lucide-react";
import {
  useDraft,
  draftKey,
  type FreeDraftState,
  type DrawStroke,
  type DrawPoint,
} from "./DraftProvider";
import { getDraftT } from "./draftI18n";

// ─── PROPS ─────────────────────────────────────────────────

interface FreeDraftCanvasProps {
  testId: string;
  questionId: string;
  /** Canvas width (default 300) */
  width?: number;
  /** Canvas height (default 200) */
  height?: number;
  countryCode?: string;
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────

function FreeDraftCanvas({
  testId,
  questionId,
  width = 300,
  height = 200,
  countryCode = "DE",
}: FreeDraftCanvasProps) {
  const t = getDraftT(countryCode);
  const { getDraft, setDraft } = useDraft();
  const key = draftKey(testId, questionId);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const currentStroke = useRef<DrawPoint[]>([]);

  const [strokes, setStrokes] = useState<DrawStroke[]>(() => {
    const existing = getDraft(key);
    if (existing && existing.type === "free") {
      return existing.state.strokes;
    }
    return [];
  });

  const syncToProvider = useCallback(
    (newStrokes: DrawStroke[]) => {
      const state: FreeDraftState = { strokes: newStrokes };
      setDraft(key, { type: "free", state });
    },
    [key, setDraft],
  );

  // ─── Redraw canvas from strokes ───
  const redraw = useCallback(
    (strokeList: DrawStroke[]) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid dots (light background pattern)
      ctx.fillStyle = "#e5e7eb";
      for (let x = 20; x < canvas.width; x += 20) {
        for (let y = 20; y < canvas.height; y += 20) {
          ctx.beginPath();
          ctx.arc(x, y, 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw all strokes
      for (const stroke of strokeList) {
        if (stroke.points.length < 2) continue;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length; i++) {
          ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }
        ctx.stroke();
      }
    },
    [],
  );

  // Redraw when strokes change
  useEffect(() => {
    redraw(strokes);
  }, [strokes, redraw]);

  // ─── Pointer event helpers ───
  const getPos = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>): DrawPoint => {
      const canvas = canvasRef.current!;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    },
    [],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.preventDefault();
      isDrawing.current = true;
      currentStroke.current = [getPos(e)];
      (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    },
    [getPos],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!isDrawing.current) return;
      e.preventDefault();
      const pos = getPos(e);
      currentStroke.current.push(pos);

      // Draw current stroke in real-time
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const points = currentStroke.current;
      if (points.length >= 2) {
        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      }
    },
    [getPos],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!isDrawing.current) return;
      isDrawing.current = false;

      if (currentStroke.current.length >= 2) {
        const newStroke: DrawStroke = {
          points: [...currentStroke.current],
          color: "#1e293b",
          width: 2,
        };
        const newStrokes = [...strokes, newStroke];
        setStrokes(newStrokes);
        syncToProvider(newStrokes);
      }
      currentStroke.current = [];
    },
    [strokes, syncToProvider],
  );

  // ─── Undo last stroke ───
  const handleUndo = useCallback(() => {
    const newStrokes = strokes.slice(0, -1);
    setStrokes(newStrokes);
    syncToProvider(newStrokes);
  }, [strokes, syncToProvider]);

  // ─── Clear all ───
  const handleClear = useCallback(() => {
    setStrokes([]);
    syncToProvider([]);
  }, [syncToProvider]);

  return (
    <div className="rounded-xl p-3 sm:p-4 border border-gray-200 bg-gray-50/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          {t.freeHeader}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={handleUndo}
            className="p-1.5 rounded bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors"
            title={t.undo}
            disabled={strokes.length === 0}
          >
            <Undo2 size={14} />
          </button>
          <button
            onClick={handleClear}
            className="p-1.5 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            title={t.clearAll}
            disabled={strokes.length === 0}
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full border border-gray-200 rounded-lg bg-white cursor-crosshair touch-none"
        style={{ aspectRatio: `${width} / ${height}` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />

      <p className="mt-1 text-[10px] text-gray-400">{t.freeHint}</p>
    </div>
  );
}

export default memo(FreeDraftCanvas);
