"use client";

import { useEffect, useRef } from "react";
import { GravitasBaseScene } from "@/lib/gravitas/phaser/GravitasBaseScene";
import type { StarholdCommand, StarholdModuleId, StarholdState } from "@/lib/gravitas/sim/types";

interface Props {
  state: StarholdState;
  selectedModule: StarholdModuleId;
  onSelectModule: (moduleId: StarholdModuleId) => void;
  lastCommand: { command: StarholdCommand; timestamp: number } | null;
}

export default function GravitasScene({ state, selectedModule, onSelectModule, lastCommand }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<any | null>(null);
  const sceneRef = useRef<GravitasBaseScene | null>(null);
  const latestStateRef = useRef(state);
  const latestSelectedModuleRef = useRef(selectedModule);

  latestStateRef.current = state;
  latestSelectedModuleRef.current = selectedModule;

  useEffect(() => {
    if (!hostRef.current || gameRef.current) return;
    let cancelled = false;
    let resizeFrame: number | null = null;

    // Dynamically import Phaser only in the browser
    import("phaser").then((Phaser) => {
      if (cancelled || !hostRef.current || gameRef.current) return;

      const scene = new GravitasBaseScene({ onSelectModule });
      sceneRef.current = scene;

      const game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 840,
        height: 510,
        backgroundColor: "#060b1b",
        parent: hostRef.current,
        scene,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 840,
          height: 510,
        },
        render: {
          antialias: true,
          pixelArt: false,
        },
      });

      gameRef.current = game;

      const resize = () => {
        if (cancelled || !hostRef.current || !gameRef.current) return;
        const width = hostRef.current.clientWidth || 840;
        const height = Math.round(width * (510 / 840));
        gameRef.current.scale.resize(840, 510);
        const canvas = gameRef.current.canvas as HTMLCanvasElement | undefined;
        if (canvas) {
          canvas.style.width = `${width}px`;
          canvas.style.height = `${height}px`;
          canvas.style.display = "block";
        }
      };

      resize();
      const onResize = () => {
        if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
        resizeFrame = window.requestAnimationFrame(resize);
      };

      window.addEventListener("resize", onResize);
      game.events.once("destroy", () => {
        window.removeEventListener("resize", onResize);
        if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      });

      scene.syncState(latestStateRef.current, latestSelectedModuleRef.current);
    });

    return () => {
      cancelled = true;
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      sceneRef.current = null;
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [onSelectModule]);

  useEffect(() => {
    sceneRef.current?.syncState(state, selectedModule);
  }, [state, selectedModule]);

  useEffect(() => {
    if (lastCommand) {
      sceneRef.current?.triggerActionFeedback(lastCommand.command);
    }
  }, [lastCommand]);

  return (
    <div className="rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_44%),linear-gradient(180deg,rgba(9,15,30,0.94),rgba(4,8,18,0.98))] p-2 shadow-[0_0_60px_rgba(8,145,178,0.1)]">
      <div className="rounded-[22px] border border-white/5 bg-black/15 p-1">
        <div ref={hostRef} className="w-full aspect-[840/510] min-h-[240px] overflow-hidden rounded-[18px]" />
      </div>
    </div>
  );
}
