import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
import { COUNTRIES, type CountryConfig } from "@/lib/mathLocale";
import { getLanguage } from "@/lib/language";
import AvatarCompanion from "@/components/AvatarCompanion";
import { Scene3D } from "@/components/math-test/Scene3D";

interface CountrySelectProps {
  onSelect: (country: CountryConfig) => void;
  avatarProps: any; // We'll pass the grouped avatar props
}

export function CountrySelect({ onSelect, avatarProps }: CountrySelectProps) {
  const l = getLanguage();
  const href = l === "hu" ? "/blog/matek-teszt-online/" : l === "ro" ? "/blog/test-matematica-online/" : l === "de" ? "/blog/mathe-test-vorbereitung/" : "/blog/free-math-games-kids/";
  const label = l === "hu" ? "📖 Hogyan segít a matek teszt?" : l === "ro" ? "📖 Cum te ajută testul?" : l === "de" ? "📖 Tipps zur Vorbereitung" : "📖 How to use Math Test";

  return (
    <>
      <main className="min-h-screen relative overflow-hidden bg-bg">
        <Scene3D />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
          {/* Back */}
          <motion.div className="absolute top-6 left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/">
              <motion.div
                className="p-2 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={20} className="text-white/60" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,215,0,0.1)", boxShadow: "0 0 30px rgba(255,215,0,0.15)" }}
            >
              <Calculator
                size={40}
                className="text-gold"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,215,0,0.5))" }}
              />
            </motion.div>
            <h1
              className="text-3xl font-black text-white tracking-wider"
              style={{ textShadow: "0 0 20px rgba(255,215,0,0.3)" }}
            >
              MATH TEST
            </h1>
          </motion.div>

          {/* Country question */}
          <motion.p
            className="text-white/60 text-lg font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Which country do you go to school in?
          </motion.p>

          {/* Country buttons */}
          <motion.div
            className="flex flex-col gap-3 w-full max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {COUNTRIES.map((c, i) => (
              <motion.button
                key={c.code}
                onClick={() => onSelect(c)}
                className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,215,0,0.08)", borderColor: "rgba(255,215,0,0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-3xl">{c.flag}</span>
                <span className="text-white/70 font-bold text-sm">{c.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Blog link */}
          <a href={href} className="text-white/30 text-xs font-medium hover:text-white/60 transition-colors mt-2">{label}</a>
        </div>
      </main>
      <AvatarCompanion {...avatarProps} />
    </>
  );
}
