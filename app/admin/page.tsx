"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Users, Star, Search, Plus, Minus, RefreshCw, ArrowLeft, TrendingUp, GamepadIcon, Trophy, Eye } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { getUser } from "@/lib/auth";

// ─── ADMIN EMAILS (hardcoded) ────────────────────────────
const ADMIN_EMAILS = [
  "borota25@gmail.com",
  // Add more admin emails here
];

interface UserRow {
  username_id: string;
  name: string;
  display_name: string;
  user_id: string | null;
  last_seen: string;
  special_cards: number;
  total_games: number;
  perfect_scores: number;
  highest_streak: number;
  current_streak: number;
  sky_highest_level: number;
}

interface DailyStats {
  date: string;
  unique_users: number;
  total_games: number;
}

export default function AdminPage() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [starModal, setStarModal] = useState<{ user: UserRow; amount: number } | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "stars" | "games" | "last_seen">("last_seen");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [tab, setTab] = useState<"users" | "stats">("users");

  // ─── Auth check ───
  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user && ADMIN_EMAILS.includes(user.email || "")) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    })();
  }, []);

  // ─── Fetch users ───
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch usernames
      const { data: usernames } = await supabase
        .from("usernames")
        .select("id, name, display_name, user_id, last_seen")
        .order("last_seen", { ascending: false });

      if (!usernames) { setLoading(false); return; }

      // Fetch user_data for users with user_id
      const userIds = usernames.filter(u => u.user_id).map(u => u.user_id);
      let userData: Record<string, { special_cards: number; total_games: number; perfect_scores: number; highest_streak: number; current_streak: number; sky_highest_level: number }> = {};

      if (userIds.length > 0) {
        const { data: ud } = await supabase
          .from("user_data")
          .select("user_id, special_cards, total_games, perfect_scores, highest_streak, current_streak, sky_highest_level")
          .in("user_id", userIds);
        if (ud) {
          for (const row of ud) {
            userData[row.user_id] = row;
          }
        }
      }

      const merged: UserRow[] = usernames.map(u => ({
        username_id: u.id,
        name: u.name,
        display_name: u.display_name || u.name,
        user_id: u.user_id,
        last_seen: u.last_seen,
        special_cards: userData[u.user_id || ""]?.special_cards ?? 0,
        total_games: userData[u.user_id || ""]?.total_games ?? 0,
        perfect_scores: userData[u.user_id || ""]?.perfect_scores ?? 0,
        highest_streak: userData[u.user_id || ""]?.highest_streak ?? 0,
        current_streak: userData[u.user_id || ""]?.current_streak ?? 0,
        sky_highest_level: userData[u.user_id || ""]?.sky_highest_level ?? 0,
      }));

      setUsers(merged);
    } catch (e) {
      console.error("Admin fetch error:", e);
    }
    setLoading(false);
  }, []);

  // ─── Fetch daily stats (from user_data last_play_date) ───
  const fetchDailyStats = useCallback(async () => {
    try {
      const { data } = await supabase
        .from("user_data")
        .select("last_play_date, total_games")
        .not("last_play_date", "is", null);

      if (!data) return;

      // Group by date
      const byDate: Record<string, { users: Set<string>; games: number }> = {};
      for (const row of data) {
        const date = (row.last_play_date || "").slice(0, 10);
        if (!date) continue;
        if (!byDate[date]) byDate[date] = { users: new Set(), games: 0 };
        byDate[date].users.add(row.last_play_date);
        byDate[date].games += row.total_games || 0;
      }

      // Get last 30 days
      const today = new Date();
      const stats: DailyStats[] = [];
      for (let i = 29; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const ds = d.toISOString().slice(0, 10);
        stats.push({
          date: ds,
          unique_users: byDate[ds]?.users.size ?? 0,
          total_games: byDate[ds]?.games ?? 0,
        });
      }
      setDailyStats(stats);
    } catch (e) {
      console.error("Daily stats error:", e);
    }
  }, []);

  useEffect(() => {
    if (authorized) {
      fetchUsers();
      fetchDailyStats();
    }
  }, [authorized, fetchUsers, fetchDailyStats]);

  // ─── Add/remove stars ───
  const handleStarChange = async () => {
    if (!starModal || !starModal.user.user_id) return;
    setSaving(true);
    try {
      const newAmount = Math.max(0, starModal.user.special_cards + starModal.amount);
      const { error } = await supabase
        .from("user_data")
        .update({ special_cards: newAmount })
        .eq("user_id", starModal.user.user_id);

      if (error) throw error;

      setUsers(prev => prev.map(u =>
        u.user_id === starModal.user.user_id ? { ...u, special_cards: newAmount } : u
      ));
      showToast(`${starModal.amount > 0 ? "+" : ""}${starModal.amount}⭐ → ${starModal.user.display_name}`);
      setStarModal(null);
    } catch (e) {
      showToast("Hiba történt!");
    }
    setSaving(false);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // ─── Sort & filter ───
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.display_name.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const dir = sortDir === "asc" ? 1 : -1;
    switch (sortBy) {
      case "name": return dir * a.name.localeCompare(b.name);
      case "stars": return dir * (a.special_cards - b.special_cards);
      case "games": return dir * (a.total_games - b.total_games);
      case "last_seen": return dir * (new Date(a.last_seen).getTime() - new Date(b.last_seen).getTime());
      default: return 0;
    }
  });

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy === col) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortBy(col); setSortDir("desc"); }
  };

  // ─── Totals ───
  const totalUsers = users.length;
  const totalRegistered = users.filter(u => u.user_id).length;
  const totalStars = users.reduce((s, u) => s + u.special_cards, 0);
  const totalGamesPlayed = users.reduce((s, u) => s + u.total_games, 0);

  // ─── Not authorized ───
  if (authorized === false) {
    return (
      <div className="min-h-screen bg-[#0A0A1A] flex items-center justify-center">
        <div className="text-center">
          <Shield size={48} className="text-red-500 mx-auto mb-4" />
          <h1 className="text-white text-xl font-bold mb-2">Hozzáférés megtagadva</h1>
          <p className="text-white/60 text-sm mb-4">Nincs admin jogosultságod.</p>
          <Link href="/" className="text-neon-blue underline text-sm">Vissza a főoldalra</Link>
        </div>
      </div>
    );
  }

  if (authorized === null) {
    return (
      <div className="min-h-screen bg-[#0A0A1A] flex items-center justify-center">
        <RefreshCw className="text-white/40 animate-spin" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#0A0A1A]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/">
            <motion.div className="bg-white/5 border border-white/10 p-2 rounded-xl"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ArrowLeft size={18} className="text-white/70" />
            </motion.div>
          </Link>
          <Shield size={20} className="text-neon-purple" />
          <span className="text-white/90 font-bold text-sm tracking-wider">ADMIN</span>
          <div className="flex-1" />
          <motion.button onClick={() => { fetchUsers(); fetchDailyStats(); }}
            className="bg-white/5 border border-white/10 p-2 rounded-xl text-white/60 hover:text-white transition-colors"
            whileTap={{ scale: 0.9 }}>
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          </motion.button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-4">
        {/* Overview cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <StatCard icon={<Users size={18} className="text-neon-blue" />} label="Felhasználók" value={totalUsers} sub={`${totalRegistered} regisztrált`} />
          <StatCard icon={<Star size={18} className="text-gold" />} label="Összes ⭐" value={totalStars} />
          <StatCard icon={<GamepadIcon size={18} className="text-neon-green" />} label="Összes játék" value={totalGamesPlayed} />
          <StatCard icon={<Trophy size={18} className="text-neon-pink" />} label="Aktív (24h)" value={users.filter(u => {
            const d = new Date(u.last_seen);
            return (Date.now() - d.getTime()) < 86400000;
          }).length} />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab("users")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tab === "users" ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/30" : "text-white/50 hover:text-white/70"}`}>
            <Users size={14} className="inline mr-1.5" />Felhasználók
          </button>
          <button onClick={() => setTab("stats")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tab === "stats" ? "bg-neon-green/20 text-neon-green border border-neon-green/30" : "text-white/50 hover:text-white/70"}`}>
            <TrendingUp size={14} className="inline mr-1.5" />Statisztikák
          </button>
        </div>

        {/* ─── Users tab ─── */}
        {tab === "users" && (
          <>
            {/* Search */}
            <div className="relative mb-4">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Keresés név alapján..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white text-sm font-medium outline-none focus:border-neon-blue/40 transition-colors"
              />
            </div>

            {/* Table */}
            <div className="bg-card border border-white/5 rounded-2xl overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_80px_80px_100px] sm:grid-cols-[1fr_90px_90px_80px_80px_110px] gap-2 px-4 py-3 border-b border-white/5 text-xs font-bold text-white/50">
                <button onClick={() => toggleSort("name")} className="text-left hover:text-white/80 transition-colors">
                  NÉV {sortBy === "name" && (sortDir === "asc" ? "↑" : "↓")}
                </button>
                <button onClick={() => toggleSort("stars")} className="text-center hover:text-white/80 transition-colors">
                  ⭐ {sortBy === "stars" && (sortDir === "asc" ? "↑" : "↓")}
                </button>
                <button onClick={() => toggleSort("games")} className="text-center hover:text-white/80 transition-colors">
                  JÁTÉKOK {sortBy === "games" && (sortDir === "asc" ? "↑" : "↓")}
                </button>
                <span className="text-center hidden sm:block">TÖKÉLETES</span>
                <span className="text-center hidden sm:block">STREAK</span>
                <button onClick={() => toggleSort("last_seen")} className="text-right hover:text-white/80 transition-colors">
                  UTOLSÓ {sortBy === "last_seen" && (sortDir === "asc" ? "↑" : "↓")}
                </button>
              </div>

              {/* Loading */}
              {loading && (
                <div className="flex items-center justify-center py-12">
                  <RefreshCw className="text-white/30 animate-spin" size={24} />
                </div>
              )}

              {/* User rows */}
              {!loading && sorted.map((u, i) => (
                <motion.div key={u.username_id}
                  className={`grid grid-cols-[1fr_80px_80px_100px] sm:grid-cols-[1fr_90px_90px_80px_80px_110px] gap-2 px-4 py-3 items-center ${i % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04] transition-colors`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.02 }}>
                  {/* Name */}
                  <div className="flex items-center gap-2 min-w-0">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${u.user_id ? "bg-neon-green" : "bg-white/20"}`} />
                    <span className="text-white/90 text-sm font-bold truncate">{u.display_name}</span>
                  </div>
                  {/* Stars + edit */}
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-gold text-sm font-bold">{u.special_cards}</span>
                    {u.user_id && (
                      <motion.button onClick={() => setStarModal({ user: u, amount: 0 })}
                        className="text-white/30 hover:text-gold transition-colors p-0.5"
                        whileTap={{ scale: 0.85 }}>
                        <Star size={12} />
                      </motion.button>
                    )}
                  </div>
                  {/* Games */}
                  <span className="text-white/70 text-sm text-center font-medium">{u.total_games}</span>
                  {/* Perfect */}
                  <span className="text-white/70 text-sm text-center font-medium hidden sm:block">{u.perfect_scores}</span>
                  {/* Streak */}
                  <span className="text-white/70 text-sm text-center font-medium hidden sm:block">{u.highest_streak}</span>
                  {/* Last seen */}
                  <span className="text-white/50 text-xs text-right font-medium">{formatAgo(u.last_seen)}</span>
                </motion.div>
              ))}

              {!loading && sorted.length === 0 && (
                <div className="text-center py-12 text-white/40 text-sm">Nincs találat</div>
              )}
            </div>

            <div className="text-white/40 text-xs text-center mt-3">{sorted.length} felhasználó</div>
          </>
        )}

        {/* ─── Stats tab ─── */}
        {tab === "stats" && (
          <div className="space-y-4">
            {/* GA hint */}
            <div className="bg-card border border-white/5 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Eye size={18} className="text-neon-blue" />
                <span className="text-white/90 font-bold text-sm">Látogatók (Google Analytics)</span>
              </div>
              <p className="text-white/50 text-xs mb-3">
                A pontos látogatói adatokért használd a Google Analytics dashboardot:
              </p>
              <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-neon-blue/15 border border-neon-blue/30 text-neon-blue px-4 py-2 rounded-xl text-sm font-bold hover:bg-neon-blue/25 transition-colors">
                Google Analytics megnyitása →
              </a>
            </div>

            {/* Active users by time */}
            <div className="bg-card border border-white/5 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={18} className="text-neon-green" />
                <span className="text-white/90 font-bold text-sm">Aktív játékosok</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-neon-green text-xl font-black">{users.filter(u => (Date.now() - new Date(u.last_seen).getTime()) < 3600000).length}</div>
                  <div className="text-white/50 text-xs font-bold mt-1">Utolsó 1 óra</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-neon-blue text-xl font-black">{users.filter(u => (Date.now() - new Date(u.last_seen).getTime()) < 86400000).length}</div>
                  <div className="text-white/50 text-xs font-bold mt-1">Ma</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="text-neon-purple text-xl font-black">{users.filter(u => (Date.now() - new Date(u.last_seen).getTime()) < 604800000).length}</div>
                  <div className="text-white/50 text-xs font-bold mt-1">Utolsó 7 nap</div>
                </div>
              </div>
            </div>

            {/* Top players */}
            <div className="bg-card border border-white/5 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <Trophy size={18} className="text-gold" />
                <span className="text-white/90 font-bold text-sm">Top 10 játékos (játékok száma)</span>
              </div>
              <div className="space-y-2">
                {[...users].sort((a, b) => b.total_games - a.total_games).slice(0, 10).map((u, i) => (
                  <div key={u.username_id} className="flex items-center gap-3 bg-white/[0.03] rounded-xl px-3 py-2">
                    <span className={`text-sm font-black w-6 text-center ${i < 3 ? "text-gold" : "text-white/40"}`}>
                      {i + 1}.
                    </span>
                    <span className="text-white/90 text-sm font-bold flex-1 truncate">{u.display_name}</span>
                    <span className="text-white/60 text-sm font-medium">{u.total_games} játék</span>
                    <span className="text-gold text-sm font-bold">{u.special_cards}⭐</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top by stars */}
            <div className="bg-card border border-white/5 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <Star size={18} className="text-gold" />
                <span className="text-white/90 font-bold text-sm">Top 10 játékos (csillagok)</span>
              </div>
              <div className="space-y-2">
                {[...users].sort((a, b) => b.special_cards - a.special_cards).slice(0, 10).map((u, i) => (
                  <div key={u.username_id} className="flex items-center gap-3 bg-white/[0.03] rounded-xl px-3 py-2">
                    <span className={`text-sm font-black w-6 text-center ${i < 3 ? "text-gold" : "text-white/40"}`}>
                      {i + 1}.
                    </span>
                    <span className="text-white/90 text-sm font-bold flex-1 truncate">{u.display_name}</span>
                    <span className="text-gold text-sm font-bold">{u.special_cards}⭐</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── Star Modal ─── */}
      <AnimatePresence>
        {starModal && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setStarModal(null)}>
            <motion.div className="bg-[#12122A] border border-white/10 rounded-2xl p-6 w-full max-w-sm"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}>
              <h3 className="text-white font-bold text-lg mb-1">⭐ Csillag kezelés</h3>
              <p className="text-white/60 text-sm mb-4">{starModal.user.display_name}</p>
              <p className="text-white/50 text-xs mb-3">Jelenlegi: <span className="text-gold font-bold">{starModal.user.special_cards}⭐</span></p>

              <div className="flex items-center gap-3 mb-4">
                <motion.button onClick={() => setStarModal(m => m ? { ...m, amount: m.amount - 1 } : null)}
                  className="bg-red-500/15 border border-red-500/30 text-red-400 p-2.5 rounded-xl"
                  whileTap={{ scale: 0.9 }}>
                  <Minus size={18} />
                </motion.button>
                <div className="flex-1 text-center">
                  <span className={`text-3xl font-black ${starModal.amount >= 0 ? "text-neon-green" : "text-red-400"}`}>
                    {starModal.amount > 0 ? "+" : ""}{starModal.amount}
                  </span>
                  <div className="text-white/40 text-xs mt-1">
                    Új egyenleg: <span className="text-gold font-bold">{Math.max(0, starModal.user.special_cards + starModal.amount)}⭐</span>
                  </div>
                </div>
                <motion.button onClick={() => setStarModal(m => m ? { ...m, amount: m.amount + 1 } : null)}
                  className="bg-neon-green/15 border border-neon-green/30 text-neon-green p-2.5 rounded-xl"
                  whileTap={{ scale: 0.9 }}>
                  <Plus size={18} />
                </motion.button>
              </div>

              {/* Quick amounts */}
              <div className="flex gap-2 mb-5">
                {[1, 5, 10, 25, 50].map(n => (
                  <button key={n} onClick={() => setStarModal(m => m ? { ...m, amount: n } : null)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg py-1.5 text-xs font-bold text-white/60 hover:text-gold hover:border-gold/30 transition-colors">
                    +{n}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button onClick={() => setStarModal(null)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl py-2.5 text-white/60 font-bold text-sm"
                  whileTap={{ scale: 0.95 }}>
                  Mégse
                </motion.button>
                <motion.button onClick={handleStarChange} disabled={starModal.amount === 0 || saving}
                  className="flex-1 bg-neon-blue/20 border border-neon-blue/40 rounded-xl py-2.5 text-neon-blue font-bold text-sm disabled:opacity-40"
                  whileTap={{ scale: 0.95 }}>
                  {saving ? "Mentés..." : "Alkalmaz"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Toast ─── */}
      <AnimatePresence>
        {toast && (
          <motion.div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-card border border-white/10 rounded-xl px-5 py-3 text-white text-sm font-bold shadow-lg"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Helper components ───

function StatCard({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: number | string; sub?: string }) {
  return (
    <div className="bg-card border border-white/5 rounded-2xl p-3">
      <div className="flex items-center gap-2 mb-1.5">
        {icon}
        <span className="text-white/50 text-xs font-bold">{label}</span>
      </div>
      <div className="text-white text-xl font-black">{value}</div>
      {sub && <div className="text-white/40 text-xs font-medium mt-0.5">{sub}</div>}
    </div>
  );
}

function formatAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = now - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "most";
  if (mins < 60) return `${mins}p`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}ó`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}n`;
  return `${Math.floor(days / 30)}hó`;
}
