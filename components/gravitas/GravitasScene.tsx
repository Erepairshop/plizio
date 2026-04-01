"use client";

import { useEffect, useRef } from "react";
import { GravitasBaseScene } from "@/lib/gravitas/phaser/GravitasBaseScene";
import type { StarholdCommand, StarholdModuleId, StarholdState } from "@/lib/gravitas/sim/types";

const GAME_WIDTH = 840;
const GAME_HEIGHT = 560;

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
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
        backgroundColor: "#060b1b",
        parent: hostRef.current,
        scene,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
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
        const height = Math.round(width * (GAME_HEIGHT / GAME_WIDTH));
        gameRef.current.scale.resize(GAME_WIDTH, GAME_HEIGHT);
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
    <div className="rounded-[24px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_44%),linear-gradient(180deg,rgba(9,15,30,0.94),rgba(4,8,18,0.98))] p-1 shadow-[0_0_46px_rgba(8,145,178,0.1)]">
      <div className="rounded-[20px] border border-white/5 bg-black/15 p-0.5">
        <div ref={hostRef} className="w-full aspect-[840/560] min-h-[300px] overflow-hidden rounded-[16px]" />
      </div>
    </div>
  );
}
