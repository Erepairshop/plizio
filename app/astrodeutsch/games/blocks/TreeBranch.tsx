"use client";
// TreeBranch — shows a word family as a branching tree
// Props: root (string), children ({word, emoji?}[]), color (string),
//        nextLabel (string), onDone () => void
import { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Branch { word: string; emoji?: string; }
interface TreeBranchProps {
  root: string;
  children: Branch[];
  color: string;
  onDone: () => void;
  nextLabel: string;
}

const TreeBranch = memo(function TreeBranch({ root, children, color, onDone, nextLabel }: TreeBranchProps) {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (revealed < children.length) {
      const t = setTimeout(() => setRevealed(r => r + 1), 600);
      return () => clearTimeout(t);
    }
  }, [revealed, children.length]);

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
        className="px-5 py-2.5 rounded-2xl text-lg font-black text-white border-2"
        style={{ borderColor: color, background: `${color}33` }}>
        {root}
      </motion.div>
      <div className="flex flex-wrap gap-2 justify-center px-2">
        {children.map((branch, i) => (
          <motion.div key={branch.word}
            initial={{ opacity: 0, y: 8 }}
            animate={revealed > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center gap-1">
            <div className="w-px h-4 bg-white/20" />
            <div className="px-3 py-1.5 rounded-xl text-sm font-bold text-white border"
              style={{ borderColor: `${color}66`, background: `${color}18` }}>
              {branch.emoji && <span className="mr-1">{branch.emoji}</span>}
              {branch.word}
            </div>
          </motion.div>
        ))}
      </div>
      {revealed >= children.length && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} onClick={onDone}>
          {nextLabel}
        </motion.button>
      )}
    </div>
  );
});
export default TreeBranch;
