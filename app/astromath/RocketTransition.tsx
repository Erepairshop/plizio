"use client";
/**
 * RocketTransition — quick ~1.2s rocket flyby used when navigating between islands
 * The rocket enters from left, crosses the screen, exits right → onDone() called
 */
import { useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  color: string;
  onDone: () => void;
}

function MiniRocket({ color }: { color: string }) {
  return (
    <svg width="56" height="100" viewBox="-28 -50 56 100" style={{ overflow: "visible" }}>
      {/* Flame */}
      <motion.ellipse cx={0} cy={62} rx={10} ry={16}
        fill="#FF6B00"
        animate={{ ry: [16, 22, 14], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 0.13 }} />
      <motion.ellipse cx={0} cy={58} rx={6} ry={10}
        fill="#FFD700"
        animate={{ ry: [10, 15, 8] }}
        transition={{ repeat: Infinity, duration: 0.1 }} />

      {/* Body */}
      <ellipse cx={0} cy={14} rx={15} ry={40} fill="#E8E8E8" />
      <ellipse cx={0} cy={14} rx={15} ry={40} fill={`${color}44`} />

      {/* Nose */}
      <path d="M -15,-4 Q 0,-55 15,-4 Z" fill={color} />

      {/* Window */}
      <circle cx={0} cy={5} r={8} fill="#001830" />
      <circle cx={0} cy={5} r={6} fill="#0A2A4A" />
      <ellipse cx={-2} cy={3} rx={3} ry={3} fill="rgba(0,200,255,0.6)" />

      {/* Fins */}
      <path d="M -15,36 L -28,52 L -15,44 Z" fill={color} />
      <path d="M 15,36 L 28,52 L 15,44 Z" fill={color} />

      {/* Engine */}
      <path d="M -10,48 L -7,57 L 7,57 L 10,48 Z" fill="#666" />
    </svg>
  );
}

export default function RocketTransition({ color, onDone }: Props) {
  useEffect(() => {
    const t = setTimeout(onDone, 1300);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-40 pointer-events-none flex items-center"
      style={{ background: "rgba(6,6,20,0.85)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.3, times: [0, 0.1, 0.85, 1] }}>

      {/* Stars */}
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} className="absolute rounded-full bg-white"
          style={{
            left: `${(i * 53 + 17) % 100}%`,
            top: `${(i * 41 + 9) % 100}%`,
            width: (i % 3) * 0.7 + 0.4,
            height: (i % 3) * 0.7 + 0.4,
            opacity: 0.4,
          }} />
      ))}

      {/* Rocket flying left → right */}
      <motion.div
        style={{ rotate: 90 }}   /* point nose to the right */
        initial={{ x: "-15vw", y: "5vh" }}
        animate={{ x: "115vw", y: "-8vh" }}
        transition={{ duration: 1.0, ease: "easeIn", delay: 0.1 }}>
        <MiniRocket color={color} />
      </motion.div>

      {/* Speed trail behind the rocket */}
      <motion.div
        className="absolute h-0.5 rounded-full"
        style={{ background: `linear-gradient(to right, transparent, ${color}80, transparent)`, top: "calc(50% + 5vh)" }}
        initial={{ left: "-10vw", width: "0vw", opacity: 0 }}
        animate={{ left: "0vw", width: "80vw", opacity: [0, 0.5, 0] }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}
