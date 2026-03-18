"use client";
// DragToBucket — tap a word, then tap a bucket to assign it
// Props: words (string[]), buckets ({key, label, icon}[]), correctMap (Record<word,bucketKey>),
//        color (string), onDone (allCorrect: boolean) => void
import { memo, useState } from "react";
import { motion } from "framer-motion";

interface Bucket { key: string; label: string; icon: string; }
interface DragToBucketProps {
  words: string[];
  buckets: Bucket[];
  correctMap: Record<string, string>; // word → correct bucketKey
  color: string;
  onDone: (allCorrect: boolean) => void;
}

const DragToBucket = memo(function DragToBucket({ words, buckets, correctMap, color, onDone }: DragToBucketProps) {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const unplaced = words.filter(w => !placed[w]);

  const handleWordTap = (word: string) => {
    setSelected(s => s === word ? null : word);
  };

  const handleBucketTap = (bucketKey: string) => {
    if (!selected) return;
    const newPlaced = { ...placed, [selected]: bucketKey };
    setPlaced(newPlaced);
    setSelected(null);
    if (Object.keys(newPlaced).length === words.length) {
      const allCorrect = words.every(w => newPlaced[w] === correctMap[w]);
      onDone(allCorrect);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Word bank */}
      <div className="flex flex-wrap gap-2 justify-center px-2">
        {unplaced.map(word => (
          <motion.button key={word}
            className="px-3 py-1.5 rounded-xl text-sm font-bold border-2 transition-all"
            style={{
              background: selected === word ? color : "rgba(255,255,255,0.08)",
              borderColor: selected === word ? color : "rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.9)",
            }}
            whileTap={{ scale: 0.92 }} onClick={() => handleWordTap(word)}>
            {word}
          </motion.button>
        ))}
        {unplaced.length === 0 && (
          <span className="text-xs text-white/50 italic">✓</span>
        )}
      </div>
      {/* Buckets */}
      <div className={`grid gap-2 px-1 ${buckets.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {buckets.map(bucket => {
          const here = Object.entries(placed).filter(([, v]) => v === bucket.key).map(([k]) => k);
          return (
            <motion.div key={bucket.key}
              className="rounded-2xl p-2 border-2 min-h-16 cursor-pointer"
              style={{ borderColor: selected ? color : "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
              whileTap={{ scale: 0.97 }} onClick={() => handleBucketTap(bucket.key)}>
              <div className="text-center text-xs font-bold text-white/70 mb-1">{bucket.icon} {bucket.label}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                {here.map(w => (
                  <span key={w} className="px-1.5 py-0.5 rounded-lg text-xs font-semibold"
                    style={{ background: placed[w] === correctMap[w] ? `${color}33` : "#ef444433", color: "#fff" }}>
                    {w}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});
export default DragToBucket;
