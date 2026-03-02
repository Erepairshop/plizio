const GAMES = [
  {
    key: "mathtest",
    name: "Math Test",
    emoji: "🧮",
    href: "/mathtest/",
    tagline: "Free Math Tests for Grade 1–8",
    desc: "Practice real school curriculum math with grade-appropriate questions. Addition, subtraction, multiplication, division, fractions, geometry and more. Available in English, German, Hungarian and Romanian.",
    tags: ["Math", "Grade 1–8", "Multilingual"],
    color: "#00FF88",
  },
  {
    key: "kodex",
    name: "Kódex Expedíció",
    emoji: "🔐",
    href: "/kodex/",
    tagline: "10-Level Word Decoding Expedition",
    desc: "Decode words and sentences across 10 increasingly difficult levels. Collect secret letters, unlock badges and reveal the final secret code. A unique blend of vocabulary, logic and deduction.",
    tags: ["Word Game", "Logic", "10 Levels"],
    color: "#B44DFF",
  },
  {
    key: "wordscramble",
    name: "Word Scramble Expedition",
    emoji: "🔀",
    href: "/wordscramble/",
    tagline: "Unscramble Words Across 10 Levels",
    desc: "Reassemble scrambled letters into correct words before time runs out. 10-level expedition with power badges, fake letters from level 6 and a legendary card reward at the end.",
    tags: ["Word Game", "Speed", "10 Levels"],
    color: "#00D4FF",
  },
  {
    key: "quickpick",
    name: "Quick Pick",
    emoji: "⚡",
    href: "/quickpick/",
    tagline: "Fast-Paced Quiz & Pattern Recognition",
    desc: "A rapid-fire quiz game that tests mathematical reasoning and pattern recognition. Select the correct answer before the timer runs out. Great for sharpening mental agility.",
    tags: ["Quiz", "Speed", "Math"],
    color: "#FFD700",
  },
  {
    key: "milliomos",
    name: "Ki Nyer Milliót?",
    emoji: "💰",
    href: "/milliomos/",
    tagline: "Who Wants to Be a Millionaire – Quiz",
    desc: "The classic TV quiz format reimagined as a browser game. Answer increasingly difficult questions across multiple categories. Use lifelines wisely to reach the million!",
    tags: ["Quiz", "Knowledge", "Lifelines"],
    color: "#FF9500",
  },
  {
    key: "daily",
    name: "Daily Challenge",
    emoji: "📅",
    href: "/daily/",
    tagline: "A New Brain Challenge Every Day",
    desc: "Log in daily for a fresh educational challenge. Earn streak rewards, collect special cards and compete on the daily leaderboard. The best way to build a daily learning habit.",
    tags: ["Daily", "Streak", "Rewards"],
    color: "#FF2D78",
  },
];

export default function EducationalGamesPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px 64px" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <span>›</span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>Educational Games</span>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700, marginBottom: 12, background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)" }}>
            6 Games · Free · No Account Required
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            Free Educational Games Online –{" "}
            <span style={{ color: "#00FF88" }}>Learn While You Play</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
            Learning doesn't have to be boring. PLIZIO's collection of free educational browser games covers math, vocabulary, logic, general knowledge and memory — all aligned with real school curricula. Whether you're a student preparing for a test, a parent looking for engaging learning tools, or a teacher searching for classroom supplements, our games are ready to play instantly in your browser — no download, no registration, completely free.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>
            Our educational games are used by students across Germany, Hungary, Romania and English-speaking countries. Each game is designed to build genuine skills: numerical fluency, vocabulary breadth, logical reasoning, and memory retention. The gamified format — with rewards, streaks and level progression — keeps students engaged far longer than traditional worksheets.
          </p>
          <a href="/mathtest" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, padding: "12px 24px", borderRadius: 16, fontWeight: 900, fontSize: 14, color: "black", background: "linear-gradient(135deg,#00FF88,#00D4FF)", textDecoration: "none" }}>
            🚀 Start a Game Now
          </a>
        </div>

        {/* Game list */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#00D4FF", marginBottom: 20 }}>
            All Educational Games ({GAMES.length})
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {GAMES.map((g) => (
              <a
                key={g.key}
                href={g.href}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 16,
                  padding: "20px 20px", borderRadius: 20,
                  background: "#12122A", border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none", color: "white",
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0, background: `${g.color}18`, border: `1px solid ${g.color}30` }}>
                  {g.emoji}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ fontWeight: 900, fontSize: 16, color: g.color }}>{g.name}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>{g.tagline}</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6, margin: "0 0 8px" }}>{g.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {g.tags.map(t => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100, background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Why educational games */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#B44DFF", marginBottom: 16 }}>
            Why Educational Games Work
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.75 }}>
            <p>
              The science behind game-based learning is robust and well-established. When students engage with educational content through games, their brains release dopamine — the reward neurotransmitter — which reinforces learning and makes information stick. Studies consistently show that students who learn through interactive games retain information longer and score higher on assessments than those who use passive study methods alone.
            </p>
            <p>
              PLIZIO's educational games are built on core learning science principles: immediate feedback, spaced repetition, progressive difficulty and intrinsic motivation. When a child gets an answer right in our Math Test and sees their score tick upward, that instant validation is far more powerful than a grade returned days after an exam. When they miss a question and immediately understand why, they're far more likely to remember the correct answer next time.
            </p>
            <p>
              Our Word Scramble and Kódex Expedíció games expand vocabulary while building pattern recognition skills — crucial for reading comprehension across all subjects. The Quick Pick game trains the rapid recall that helps students in timed exam situations. Ki Nyer Milliót? (Who Wants to Be a Millionaire) builds broad general knowledge across categories while teaching strategic thinking through its lifeline mechanics.
            </p>
            <p>
              Daily Challenge creates the learning habit that truly separates high-achieving students: consistent, daily practice. Just 10–15 minutes of daily engagement with educational games produces measurable improvements in academic performance over a 4–6 week period. The streak system and daily rewards make it easy to maintain that habit.
            </p>
          </div>
        </section>

        {/* For parents/teachers */}
        <section style={{ marginBottom: 48, padding: 24, borderRadius: 20, background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#00D4FF", marginBottom: 12 }}>
            For Parents & Teachers
          </h2>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7 }}>
            <p style={{ marginBottom: 12 }}>
              All PLIZIO educational games are completely free — no subscription, no hidden costs, no advertising aimed at children. We believe quality educational resources should be universally accessible. Our Math Test covers the full Grade 1–8 curriculum across four languages, making it especially useful for multilingual households and international schools.
            </p>
            <p>
              Games work on all devices: smartphones, tablets and computers. No app download is required — open your browser and play. Students can use PLIZIO independently for self-directed learning, or teachers can project games on classroom screens for group activities. Parent-friendly: no account is ever required, and no personal data is collected.
            </p>
          </div>
        </section>

        {/* Related categories */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>
            More Game Categories
          </h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/brain-games/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(180,77,255,0.1)", color: "#B44DFF", border: "1px solid rgba(180,77,255,0.25)", textDecoration: "none" }}>🧠 Brain Games</a>
            <a href="/reflex-games/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(255,45,120,0.1)", color: "#FF2D78", border: "1px solid rgba(255,45,120,0.25)", textDecoration: "none" }}>💥 Reflex Games</a>
            <a href="/mathe-test/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", textDecoration: "none" }}>🧮 Mathe Test Klasse 1–8</a>
          </div>
        </section>

      </div>
    </main>
  );
}
