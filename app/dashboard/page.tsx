"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Star, Zap, Target, TrendingDown, Trophy } from "lucide-react";
import { useAuth } from "@/lib/supabase/useAuth";
import { getDashboard, isSupabaseConfigured, type DashboardData } from "@/lib/assessment/testFlow";
import { t } from "@/lib/mathTranslations";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading) return;

    if (!isSupabaseConfigured() || !user) {
      router.push("/auth/");
      return;
    }

    getDashboard()
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [user, authLoading, router]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-white/50 text-lg">Betöltés...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Link href="/mathtest/" className="text-[#00D4FF] hover:underline">
            Vissza a teszthez
          </Link>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const cc = data.profile.country || "HU";

  return (
    <div className="min-h-screen bg-[#0a0a1a] p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/mathtest/" className="text-white/50 hover:text-white">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <Star className="mx-auto mb-1 text-yellow-400" size={24} />
            <p className="text-2xl font-bold text-white">{data.profile.stars}</p>
            <p className="text-white/40 text-xs">Stars</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <Zap className="mx-auto mb-1 text-purple-400" size={24} />
            <p className="text-2xl font-bold text-white">{data.profile.xp}</p>
            <p className="text-white/40 text-xs">XP</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <Trophy className="mx-auto mb-1 text-orange-400" size={24} />
            <p className="text-2xl font-bold text-white">{data.streak.current}</p>
            <p className="text-white/40 text-xs">Streak</p>
          </div>
        </div>

        {/* Tests completed */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
          <p className="text-white/60 text-sm">Teljesített tesztek</p>
          <p className="text-white text-lg font-bold">{data.streak.tests_completed}</p>
        </div>

        {/* Last test */}
        {data.recent_tests.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
            <p className="text-white/60 text-sm mb-2">Utolsó teszt</p>
            <div className="flex justify-between items-center">
              <p className="text-white text-lg font-bold">
                {data.recent_tests[0].score}/{data.recent_tests[0].max_score}
              </p>
              <p className="text-white/40 text-sm">
                {Math.round(data.recent_tests[0].percentage)}%
              </p>
              <p className="text-yellow-400 text-sm font-bold">
                +{data.recent_tests[0].stars_earned} star
              </p>
            </div>
          </div>
        )}

        {/* Weak areas */}
        {data.weak_areas.length > 0 && (
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="text-red-400" size={18} />
              <p className="text-red-400 font-bold text-sm">Gyenge területek</p>
            </div>
            <div className="space-y-2">
              {data.weak_areas.slice(0, 5).map((area, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">
                    {t(area.topic, cc)}
                  </span>
                  <span className="text-red-400 text-sm font-mono">
                    {Math.round(area.accuracy)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strong areas */}
        {data.strong_areas && data.strong_areas.length > 0 && (
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Target className="text-green-400" size={18} />
              <p className="text-green-400 font-bold text-sm">Erős területek</p>
            </div>
            <div className="space-y-2">
              {data.strong_areas.slice(0, 5).map((area, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">
                    {t(area.topic, cc)}
                  </span>
                  <span className="text-green-400 text-sm font-mono">
                    {Math.round(area.accuracy)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Start test button */}
        <Link
          href="/mathtest/"
          className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#B44DFF] text-white font-bold mt-6 hover:opacity-90 transition-opacity"
        >
          Teszt indítása
        </Link>
      </div>
    </div>
  );
}
