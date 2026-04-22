"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

export default function AstroAIGradeClient({ params }: { params: Promise<{ grade: string }> }) {
  const router = useRouter();
  const { lang } = useLang();
  const resolvedParams = use(params);
  const grade = resolvedParams.grade;

  return (
    <div className="min-h-screen bg-[#060614] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-pink-500/20 border-2 border-pink-500 rounded-full flex items-center justify-center text-5xl mb-6">
        🤖
      </div>
      <h1 className="text-3xl font-black text-white mb-2">
        AstroAI - {lang === "hu" ? `${grade}. Osztály` : lang === "de" ? `Klasse ${grade}` : lang === "ro" ? `Clasa ${grade}` : `Grade ${grade}`}
      </h1>
      <p className="text-white/60 mb-8 max-w-md">
        {lang === "hu" ? "Ez az osztály fejlesztés alatt áll. Kérjük, térj vissza később az új AI kalandokért!" :
         lang === "de" ? "Diese Klasse ist in Entwicklung. Bitte komm später wieder für neue KI Abenteuer!" :
         lang === "ro" ? "Această clasă este în dezvoltare. Te rugăm să revii mai târziu pentru noi aventuri AI!" :
         "This grade is under development. Please come back later for new AI adventures!"}
      </p>
      <button
        onClick={() => router.push("/astro-ai")}
        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold flex items-center gap-2 transition"
      >
        <Home size={18} />
        {lang === "hu" ? "Vissza az AstroAI főmenübe" : "Back to AstroAI Menu"}
      </button>
    </div>
  );
}
