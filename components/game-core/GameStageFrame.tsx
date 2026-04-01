"use client";

import type { ReactNode } from "react";

export interface GameStageFrameProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function GameStageFrame({ children, className = "", innerClassName = "" }: GameStageFrameProps) {
  return (
    <main className={`min-h-screen bg-[#0A0A1A] text-white px-4 py-4 sm:px-5 sm:py-5 ${className}`}>
      <div className={`mx-auto w-full max-w-[980px] ${innerClassName}`}>{children}</div>
    </main>
  );
}
