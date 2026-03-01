/**
 * Drawing tool for mathematical test answers
 * Supports: draw, erase, rotate, clear
 * Canvas-based drawing with touch & mouse support
 */

'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Pencil, RotateCw, ChevronDown } from 'lucide-react';

interface PenToolProps {
  onDrawingChange?: (dataUrl: string) => void;
  width?: number;
  height?: number;
  backgroundColor?: string;
  penColor?: string;
  penSize?: number;
}

type Tool = 'pen' | 'eraser' | 'rotate';

export default function PenTool({
  onDrawingChange,
  width = 500,
  height = 400,
  backgroundColor = '#f8fafc',
  penColor = '#1e293b',
  penSize = 2,
}: PenToolProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState<Tool>('pen');
  const [rotation, setRotation] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [penSizeValue, setPenSizeValue] = useState(penSize);
  const [showToolbar, setShowToolbar] = useState(false);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Add grid
    drawGrid(ctx, width, height);
  }, [width, height, backgroundColor]);

  // Draw grid on canvas
  const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.1)';
    ctx.lineWidth = 0.5;

    for (let x = 0; x <= w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    for (let y = 0; y <= h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  };

  // Handle mouse/touch start
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (currentTool === 'rotate') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x, y);

    if (currentTool === 'eraser') {
      ctx.clearRect(x - penSizeValue / 2, y - penSizeValue / 2, penSizeValue, penSizeValue);
    } else if (currentTool === 'pen') {
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penSizeValue;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  };

  // Handle mouse/touch move
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || currentTool === 'rotate') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (currentTool === 'eraser') {
      ctx.clearRect(x - penSizeValue / 2, y - penSizeValue / 2, penSizeValue, penSizeValue);
    } else if (currentTool === 'pen') {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  // Handle mouse/touch end
  const handlePointerUp = () => {
    setIsDrawing(false);

    const canvas = canvasRef.current;
    if (canvas && onDrawingChange) {
      onDrawingChange(canvas.toDataURL('image/png'));
    }
  };

  // Clear canvas
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    drawGrid(ctx, width, height);

    if (onDrawingChange) {
      onDrawingChange(canvas.toDataURL('image/png'));
    }
  };

  // Rotate canvas
  const handleRotate = () => {
    const newRotation = (rotation + 90) % 360;
    setRotation(newRotation);

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Apply rotation visually (CSS transform)
    canvas.style.transform = `rotate(${newRotation}deg)`;
  };

  // Toggle tool
  const handleToolClick = (tool: Tool) => {
    setCurrentTool(tool);
    setIsErasing(tool === 'eraser');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Canvas */}
      <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white shadow-lg">
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="cursor-crosshair block transition-transform"
          style={{
            touchAction: 'none',
            transform: `rotate(${rotation}deg)`,
          }}
        />

        {/* Tool indicator */}
        {isDrawing && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded">
            Rajzolás...
          </div>
        )}
      </div>

      {/* Toolbar */}
      <div className="relative">
        <motion.button
          onClick={() => setShowToolbar(!showToolbar)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Pencil size={18} />
          <span className="hidden sm:inline">Toll</span>
          <motion.div
            animate={{ rotate: showToolbar ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.button>

        {/* Dropdown menu */}
        <AnimatePresence>
          {showToolbar && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 right-0 bg-white border border-slate-200 rounded-xl shadow-xl p-4 space-y-3 z-20"
            >
              {/* Pen tool */}
              <motion.button
                onClick={() => handleToolClick('pen')}
                className={`w-full px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  currentTool === 'pen'
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <Pencil size={18} />
                Toll
              </motion.button>

              {/* Eraser tool */}
              <motion.button
                onClick={() => handleToolClick('eraser')}
                className={`w-full px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  currentTool === 'eraser'
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <Trash2 size={18} />
                Radír
              </motion.button>

              {/* Rotate tool */}
              <motion.button
                onClick={() => {
                  handleToolClick('rotate');
                  handleRotate();
                }}
                className={`w-full px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  currentTool === 'rotate'
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <RotateCw size={18} />
                Forgatás ({rotation}°)
              </motion.button>

              {/* Pen size slider */}
              <div className="py-2 border-t border-slate-200">
                <label className="text-xs font-bold text-slate-600 block mb-2">
                  Toll vastagság: {penSizeValue}px
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={penSizeValue}
                  onChange={(e) => setPenSizeValue(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Clear all */}
              <motion.button
                onClick={handleClear}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Teljes törlés
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info text */}
      <p className="text-xs text-slate-500 text-center">
        ✏️ Rajzolj a vászonra | 🔄 Forgatható | 🗑️ Törölhető
      </p>
    </div>
  );
}
