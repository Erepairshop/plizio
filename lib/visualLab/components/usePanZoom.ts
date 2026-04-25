"use client";

import { useRef, useState } from "react";
import type { PointerEvent as RPointerEvent, WheelEvent as RWheelEvent } from "react";

export interface PanZoomView {
  x: number;
  y: number;
  scale: number;
}

export interface PanZoomHandlers {
  onWheel: (e: RWheelEvent<SVGSVGElement>) => void;
  onPointerDown: (e: RPointerEvent<SVGSVGElement>) => void;
  onPointerMove: (e: RPointerEvent<SVGSVGElement>) => void;
  onPointerUp: (e: RPointerEvent<SVGSVGElement>) => void;
  onPointerCancel: (e: RPointerEvent<SVGSVGElement>) => void;
  onPointerLeave: (e: RPointerEvent<SVGSVGElement>) => void;
}

interface Options {
  viewBox: string;      // "0 0 W H"
  minScale?: number;
  maxScale?: number;
}

export function usePanZoom({ viewBox, minScale = 1, maxScale = 6 }: Options) {
  const [view, setView] = useState<PanZoomView>({ x: 0, y: 0, scale: 1 });
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinch = useRef<{ dist: number } | null>(null);
  const lastPan = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);

  const [, , vbW, vbH] = viewBox.split(" ").map(Number);

  const clamp = (v: PanZoomView): PanZoomView => {
    const scale = Math.max(minScale, Math.min(maxScale, v.scale));
    const maxX = Math.max(0, vbW * (scale - 1)) + vbW * 0.5;
    const maxY = Math.max(0, vbH * (scale - 1)) + vbH * 0.5;
    return {
      scale,
      x: Math.max(-maxX, Math.min(maxX, v.x)),
      y: Math.max(-maxY, Math.min(maxY, v.y)),
    };
  };

  const zoomAt = (factor: number, cx?: number, cy?: number) => {
    setView((v) => {
      const px = cx ?? vbW / 2;
      const py = cy ?? vbH / 2;
      const newScale = Math.max(minScale, Math.min(maxScale, v.scale * factor));
      const k = newScale / v.scale;
      return clamp({ scale: newScale, x: px - k * (px - v.x), y: py - k * (py - v.y) });
    });
  };

  const toSvg = (clientX: number, clientY: number): [number, number] => {
    const svg = svgRef.current;
    if (!svg) return [0, 0];
    const rect = svg.getBoundingClientRect();
    const [vbX, vbY] = viewBox.split(" ").map(Number);
    return [vbX + (clientX - rect.left) * (vbW / rect.width), vbY + (clientY - rect.top) * (vbH / rect.height)];
  };

  const handlers: PanZoomHandlers = {
    onWheel: (e) => {
      e.preventDefault();
      const [sx, sy] = toSvg(e.clientX, e.clientY);
      zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, sx, sy);
    },
    onPointerDown: (e) => {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      dragged.current = false;
      if (pointers.current.size === 1) {
        lastPan.current = { x: e.clientX, y: e.clientY };
      } else if (pointers.current.size === 2) {
        const pts = Array.from(pointers.current.values());
        lastPinch.current = { dist: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) };
        lastPan.current = null;
      }
    },
    onPointerMove: (e) => {
      if (!pointers.current.has(e.pointerId)) return;
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (pointers.current.size === 2 && lastPinch.current) {
        const pts = Array.from(pointers.current.values());
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const cx = (pts[0].x + pts[1].x) / 2;
        const cy = (pts[0].y + pts[1].y) / 2;
        const factor = dist / lastPinch.current.dist;
        const [sx, sy] = toSvg(cx, cy);
        zoomAt(factor, sx, sy);
        lastPinch.current = { dist };
        dragged.current = true;
      } else if (pointers.current.size === 1 && lastPan.current) {
        const dxPx = e.clientX - lastPan.current.x;
        const dyPx = e.clientY - lastPan.current.y;
        if (Math.abs(dxPx) + Math.abs(dyPx) > 2) dragged.current = true;
        const svg = svgRef.current;
        if (svg) {
          const rect = svg.getBoundingClientRect();
          const dvx = dxPx * (vbW / rect.width);
          const dvy = dyPx * (vbH / rect.height);
          setView((v) => (v.scale > 1.001 ? clamp({ ...v, x: v.x + dvx, y: v.y + dvy }) : v));
        }
        lastPan.current = { x: e.clientX, y: e.clientY };
      }
    },
    onPointerUp: (e) => {
      pointers.current.delete(e.pointerId);
      if (pointers.current.size < 2) lastPinch.current = null;
      if (pointers.current.size === 0) {
        lastPan.current = null;
        // Drag-flag rovid kesleltetessel reseteljuk, hogy a kovetkezo POI-tap kattinthato legyen
        setTimeout(() => { dragged.current = false; }, 80);
      }
    },
    onPointerCancel: (e) => {
      pointers.current.delete(e.pointerId);
      if (pointers.current.size < 2) lastPinch.current = null;
      if (pointers.current.size === 0) {
        lastPan.current = null;
        setTimeout(() => { dragged.current = false; }, 80);
      }
    },
    onPointerLeave: (e) => {
      pointers.current.delete(e.pointerId);
      if (pointers.current.size < 2) lastPinch.current = null;
      if (pointers.current.size === 0) {
        lastPan.current = null;
        setTimeout(() => { dragged.current = false; }, 80);
      }
    },
  };

  const reset = () => setView({ x: 0, y: 0, scale: 1 });

  return { view, zoomAt, reset, svgRef, handlers, dragged };
}
