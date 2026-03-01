"use client";

import { motion } from "framer-motion";
import { Award, TrendingDown, TrendingUp, BarChart3 } from "lucide-react";
import { type GroupedTask } from "@/lib/mathCurriculum";

interface SectionScore {
  section: string;
  earned: number;
  total: number;
  percentage: number;
}

interface ExamResultsDisplayProps {
  tasks: GroupedTask[];
  answers: Record<string, string | number>;
  grade?: number; // Final grade (1-5 in Hungary)
  totalPoints: number;
  earnedPoints: number;
  sections: SectionScore[];
}

export default function ExamResultsDisplay({
  tasks,
  answers,
  grade = 3,
  totalPoints,
  earnedPoints,
  sections,
}: ExamResultsDisplayProps) {
  const percentage = Math.round((earnedPoints / totalPoints) * 100);
  const gradeText = getGradeText(grade);
  const gradeColor = getGradeColor(grade);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Main Score Card */}
      <motion.div
        className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            className={`w-28 h-28 rounded-full flex items-center justify-center mb-4 ${gradeColor}`}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-center">
              <div className="text-5xl font-black">{grade}</div>
              <div className="text-xs font-bold mt-0.5">Jegy</div>
            </div>
          </motion.div>

          <h2 className="text-3xl font-black mb-2">{gradeText}</h2>
          <p className="text-gray-300 text-lg font-semibold">
            {percentage}% - {earnedPoints}/{totalPoints} pont
          </p>
        </div>

        {/* Score Bar */}
        <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden mb-6">
          <motion.div
            className={`h-full ${gradeColor}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Feedback */}
        <div className={`p-4 rounded-lg ${gradeColor} bg-opacity-10 border ${gradeColor} border-opacity-20`}>
          <p className="text-sm font-semibold text-center text-gray-200">
            {getFeedback(percentage)}
          </p>
        </div>
      </motion.div>

      {/* Section Breakdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <h3 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
          <BarChart3 size={20} />
          Szekciós bontás
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 + idx * 0.05 }}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-800">{section.section}</h4>
                <span className={`text-xs font-black px-2 py-1 rounded ${getSectionColor(section.percentage)}`}>
                  {section.percentage}%
                </span>
              </div>

              <div className="mb-2 text-sm text-gray-600">
                <span className="font-bold text-gray-800">{section.earned}</span>
                <span className="text-gray-500"> / {section.total} pont</span>
              </div>

              {/* Section progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={getSectionBarColor(section.percentage)}
                  initial={{ width: 0 }}
                  animate={{ width: `${section.percentage}%` }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Analysis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-4"
      >
        <h3 className="text-sm font-bold text-gray-800 mb-3">Teljesítmény elemzés</h3>
        <div className="space-y-3">
          {/* Best section */}
          {getBestSection(sections) && (
            <div className="flex items-start gap-3">
              <TrendingUp className="text-green-600 mt-1" size={20} />
              <div>
                <p className="font-bold text-gray-800">
                  {getBestSection(sections)?.section}: {getBestSection(sections)?.percentage}%
                </p>
                <p className="text-xs text-gray-600">Legjobb szekció</p>
              </div>
            </div>
          )}

          {/* Weakest section */}
          {getWorstSection(sections) && (
            <div className="flex items-start gap-3">
              <TrendingDown className="text-orange-600 mt-1" size={20} />
              <div>
                <p className="font-bold text-gray-800">
                  {getWorstSection(sections)?.section}: {getWorstSection(sections)?.percentage}%
                </p>
                <p className="text-xs text-gray-600">Fejlesztendő terület</p>
              </div>
            </div>
          )}

          {/* Overall feedback */}
          <div className="flex items-start gap-3 pt-2 border-t border-blue-200">
            <Award className="text-blue-600 mt-1" size={20} />
            <div>
              <p className="font-bold text-gray-800">{getOverallFeedback(percentage)}</p>
              <p className="text-xs text-gray-600">Általános értékelés</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Helper functions
function getGradeText(grade: number): string {
  const gradeTexts: Record<number, string> = {
    1: "Kiváló",
    2: "Jó",
    3: "Befriedigend",
    4: "Elégtelen",
    5: "Nagyon gyenge",
  };
  return gradeTexts[grade] || "Bewertung";
}

function getGradeColor(grade: number): string {
  const colors: Record<number, string> = {
    1: "bg-green-600",
    2: "bg-blue-600",
    3: "bg-yellow-500",
    4: "bg-orange-600",
    5: "bg-red-600",
  };
  return colors[grade] || "bg-gray-600";
}

function getFeedback(percentage: number): string {
  if (percentage >= 90) return "Kiváló teljesítmény! Folytasd így!";
  if (percentage >= 80) return "Jó munka! Még kis gyakorlásra van szükség néhány témában.";
  if (percentage >= 70) return "Durchschnittliche Leistung. Konzentriere dich auf die Grundlagen.";
  if (percentage >= 60) return "A gyakorlást erősíteni kell ezeken a témákon.";
  return "Javasolt intenzívebb gyakorlás szükséges.";
}

function getOverallFeedback(percentage: number): string {
  if (percentage >= 90) return "Szinte tökéletes tudás!";
  if (percentage >= 80) return "Szilárd alapok, de van még mit tanulni";
  if (percentage >= 70) return "Elfogadható szint, de gyakorlásra van szükség";
  if (percentage >= 60) return "Az alapok még nem stabilak";
  return "Rendszeres gyakorlás ajánlott";
}

function getSectionColor(percentage: number): string {
  if (percentage >= 85) return "bg-green-100 text-green-800";
  if (percentage >= 70) return "bg-blue-100 text-blue-800";
  if (percentage >= 55) return "bg-yellow-100 text-yellow-800";
  return "bg-red-100 text-red-800";
}

function getSectionBarColor(percentage: number): string {
  if (percentage >= 85) return "bg-green-500";
  if (percentage >= 70) return "bg-blue-500";
  if (percentage >= 55) return "bg-yellow-500";
  return "bg-red-500";
}

function getBestSection(sections: SectionScore[]): SectionScore | undefined {
  return sections.reduce((best, current) =>
    current.percentage > best.percentage ? current : best
  );
}

function getWorstSection(sections: SectionScore[]): SectionScore | undefined {
  return sections.reduce((worst, current) =>
    current.percentage < worst.percentage ? current : worst
  );
}
