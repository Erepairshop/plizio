"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
  rotation: number;
}

const COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF", "#FF6B35"];

export default function Confetti({ count = 40 }: { count?: number }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 0.8,
      size: 4 + Math.random() * 6,
      rotation: Math.random() * 360,
    }));
    setPieces(newPieces);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[70] overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: -10,
            width: piece.size,
            height: piece.size * 1.5,
            backgroundColor: piece.color,
            rotate: piece.rotation,
          }}
          initial={{ y: -20, opacity: 1 }}
          animate={{
            y: "100vh",
            rotate: piece.rotation + 720,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            delay: piece.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}
