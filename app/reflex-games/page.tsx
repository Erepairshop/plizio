const GAMES = [
  {
    key: "reflexrush",
    name: "Reflex Rush",
    emoji: "💥",
    href: "/reflexrush/",
    tagline: "Lightning-Fast Reflex Training",
    desc: "Tap the right targets as they flash on screen, dodge bombs, and survive escalating waves. Multiple difficulty modes and target types. The purest test of raw reaction speed.",
    tags: ["Reaction", "Speed", "Survival"],
    color: "#FF2D78",
  },
  {
    key: "skyclimb",
    name: "Sky Climb",
    emoji: "🏔️",
    href: "/skyclimb/",
    tagline: "Endless Vertical Climbing Platformer",
    desc: "Jump from platform to platform as they rise and fall. Time your leaps perfectly to avoid falling. Increasingly unpredictable patterns force real-time adaptation and split-second timing.",
    tags: ["Platformer", "Timing", "Endless"],
    color: "#00D4FF",
  },
  {
    key: "racetrack",
    name: "Racetrack",
    emoji: "🏁",
    href: "/racetrack/",
    tagline: "Fast-Paced Racing Challenge",
    desc: "Navigate a fast-moving racetrack, dodge obstacles and outpace the competition. Tight steering, quick reflexes and anticipating the track ahead are your keys to victory.",
    tags: ["Racing", "Steering", "Speed"],
    color: "#FFD700",
  },
  {
    key: "citydrive",
    name: "City Drive",
    emoji: "🚗",
    href: "/citydrive/",
    tagline: "Urban Driving Simulation",
    desc: "Navigate busy city streets, switch lanes, avoid traffic and collect pickups. Multiple vehicles with different handling characteristics. The most immersive driving game in the collection.",
    tags: ["Driving", "Avoidance", "Simulation"],
    color: "#00FF88",
  },
  {
    key: "spotdiff",
    name: "Spot the Difference",
    emoji: "👁️",
    href: "/spotdiff/",
    tagline: "Find Differences – Visual Attention Challenge",
    desc: "Two nearly identical images — find every difference before time runs out. Sharpens visual attention, pattern recognition and focused scanning. Deceptively simple, genuinely challenging.",
    tags: ["Visual", "Attention", "Scanning"],
    color: "#B44DFF",
  },
  {
    key: "numberrush",
    name: "Number Rush",
    emoji: "🔢",
    href: "/numberrush/",
    tagline: "Numbers at Maximum Speed",
    desc: "Numbers appear and disappear rapidly — identify the correct ones before they're gone. Combines numerical fluency with pure reaction speed. One of the most intense games in the collection.",
    tags: ["Numbers", "Reaction", "Fluency"],
    color: "#FF9500",
  },
];

export default function ReflexGamesPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px 64px" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <span>›</span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>Reflex Games</span>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700, marginBottom: 12, background: "rgba(255,45,120,0.1)", color: "#FF2D78", border: "1px solid rgba(255,45,120,0.25)" }}>
            6 Games · Free · No Account Required
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            Free Reflex Games Online –{" "}
            <span style={{ color: "#FF2D78" }}>Test Your Reaction Time</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
            How fast are your reflexes? PLIZIO's free online reflex games put your reaction speed, spatial awareness, timing and split-second decision-making to the ultimate test. From the pure reaction demands of Reflex Rush to the strategic timing of Sky Climb, from urban driving in City Drive to the visual precision of Spot the Difference — every game in this collection is designed to push your reaction capabilities to the limit. No download, no account — just raw reflexes.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>
            Reflex games aren't just fun — they build real cognitive skills. Reaction time, hand-eye coordination, spatial processing, and rapid decision-making all improve with regular practice. These skills translate directly to sports performance, driving safety, and even test-taking under timed conditions. Start with any game, improve your personal best, and climb through the difficulty levels.
          </p>
          <a href="/reflexrush" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, padding: "12px 24px", borderRadius: 16, fontWeight: 900, fontSize: 14, color: "black", background: "linear-gradient(135deg,#FF2D78,#FFD700)", textDecoration: "none" }}>
            💥 Test Your Reflexes
          </a>
        </div>

        {/* Game list */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#FF2D78", marginBottom: 20 }}>
            All Reflex Games ({GAMES.length})
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

        {/* What are reflex games */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#00D4FF", marginBottom: 16 }}>
            What Are Reflex Games and Why Do They Matter?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.75 }}>
            <p>
              Reflex games are browser-based games that primarily challenge your reaction time — the interval between a stimulus appearing on screen and your physical response (tap, click, swipe). The average human reaction time is around 200–250 milliseconds for visual stimuli, but with regular practice, elite performers can consistently respond in under 150ms. Our games are calibrated across this range, providing challenges that are achievable yet genuinely demanding.
            </p>
            <p>
              Beyond raw reaction speed, PLIZIO's reflex games develop several distinct cognitive and motor skills. Sky Climb trains predictive timing — not just reacting to what's happening now, but anticipating what will happen in the next half-second. Racetrack and City Drive develop spatial processing and trajectory prediction. Spot the Difference is about sustained visual attention and systematic scanning — a different kind of speed that involves thoroughness rather than just quickness.
            </p>
            <p>
              These skills have real-world value. Drivers who regularly train their reaction times have measurably shorter braking distances. Athletes who train visual reaction speed make better split-second decisions in competition. Students who practice rapid processing in games perform better on time-pressured standardized tests. Even in professional settings, fast response and sharp attention under pressure are highly valued.
            </p>
            <p>
              PLIZIO's reflex games are mobile-optimized — touch controls feel as natural as keyboard or mouse controls, making them perfectly suited for quick practice sessions on a smartphone. Whether you're waiting for a bus, taking a study break, or specifically training for sports performance, five minutes with Reflex Rush or Number Rush will give your reaction system a genuine workout.
            </p>
          </div>
        </section>

        {/* Tips */}
        <section style={{ marginBottom: 48, padding: 24, borderRadius: 20, background: "rgba(255,45,120,0.04)", border: "1px solid rgba(255,45,120,0.12)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: "#FF2D78", marginBottom: 12 }}>
            Tips to Improve Your Reflexes
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6 }}>
            <p>• <strong style={{ color: "rgba(255,255,255,0.75)" }}>Warm up first:</strong> Don't jump straight into hard mode. Start with 2–3 easier rounds to prime your neural pathways.</p>
            <p>• <strong style={{ color: "rgba(255,255,255,0.75)" }}>Focus on consistency:</strong> Aim for consistent medium performance rather than erratic flashes of brilliance. Consistency is the real measure of reflex quality.</p>
            <p>• <strong style={{ color: "rgba(255,255,255,0.75)" }}>Minimize distractions:</strong> Reflexes are degraded significantly by divided attention. Find a quiet environment and give the game your full focus.</p>
            <p>• <strong style={{ color: "rgba(255,255,255,0.75)" }}>Play daily:</strong> Even 10 minutes a day produces measurable reaction time improvements over 2–4 weeks of consistent practice.</p>
            <p>• <strong style={{ color: "rgba(255,255,255,0.75)" }}>Rest between sessions:</strong> Fatigued players have slower reflexes. Short, focused sessions beat long exhausted ones.</p>
          </div>
        </section>

        {/* Related categories */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>
            More Game Categories
          </h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/educational-games/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", textDecoration: "none" }}>📚 Educational Games</a>
            <a href="/brain-games/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(180,77,255,0.1)", color: "#B44DFF", border: "1px solid rgba(180,77,255,0.25)", textDecoration: "none" }}>🧠 Brain Games</a>
            <a href="/mathe-test/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)", textDecoration: "none" }}>🧮 Mathe Test Klasse 1–8</a>
          </div>
        </section>

      </div>
    </main>
  );
}
