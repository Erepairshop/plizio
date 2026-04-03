import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";
import { type CountryConfig } from "@/lib/mathLocale";
import { getPeriod, getPeriodLabel } from "@/lib/mathCurriculum";
import AvatarCompanion from "@/components/AvatarCompanion";
import { Scene3D } from "@/components/math-test/Scene3D";

interface GradeSelectProps {
  country: CountryConfig;
  previousGrade: number | null;
  onSelect: (grade: number) => void;
  onBack: () => void;
  avatarProps: any;
}

export function GradeSelect({ country, previousGrade, onSelect, onBack, avatarProps }: GradeSelectProps) {
  const ui = country.ui;

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

          {/* Country flag - tap to change */}
          <motion.button
            className="absolute top-6 right-6 text-2xl p-2 rounded-xl bg-white/5 border border-white/10"
            onClick={onBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {country.flag}
          </motion.button>

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
              {ui?.title}
            </h1>
            <p className="text-white/40 text-sm font-medium">{getPeriodLabel(getPeriod(), country?.code)}</p>
          </motion.div>

          {/* Question */}
          <motion.p
            className="text-white/60 text-lg font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {ui?.gradeQuestion}
          </motion.p>

          {/* Grade buttons */}
          <motion.div
            className="grid grid-cols-4 gap-3 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {country.grades.map((grade, i) => (
              <motion.button
                key={grade}
                onClick={() => onSelect(grade)}
                className="relative w-16 h-16 rounded-2xl font-black text-2xl border transition-all"
                style={{
                  background: previousGrade === grade ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.05)",
                  borderColor: previousGrade === grade ? "rgba(255,215,0,0.4)" : "rgba(255,255,255,0.1)",
                  color: previousGrade === grade ? "#FFD700" : "rgba(255,255,255,0.7)",
                  boxShadow: previousGrade === grade ? "0 0 20px rgba(255,215,0,0.2)" : undefined,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,215,0,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                {grade}.
                {previousGrade === grade && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-gold/50 font-bold whitespace-nowrap">
                    {ui?.lastUsed || "LEGUTÓBB"}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </main>
      <AvatarCompanion {...avatarProps} />
    </>
  );
}
