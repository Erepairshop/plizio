const GAMES = [
  {
    key: "kodex",
    name: "Kódex Expedíció",
    emoji: "🔐",
    href: "/kodex/",
    tagline: "10-Level Word Decoding Expedition",
    desc: "Decode secret words and sentences letter by letter across 10 levels. Use badge powers — vowel reveals, shields, explorer hints — and collect secret letters that form the final code.",
    tags: ["Deduction", "Vocabulary", "10 Levels"],
    color: "#B44DFF",
  },
  {
    key: "milliomos",
    name: "Ki Nyer Milliót?",
    emoji: "💰",
    href: "/milliomos/",
    tagline: "Quiz Game – Who Wants to Be a Millionaire",
    desc: "15 questions of escalating difficulty across multiple knowledge categories. Three lifelines, one shot at the million. Broad general knowledge, strategic thinking and staying cool under pressure.",
    tags: ["General Knowledge", "Quiz", "Strategy"],
    color: "#FFD700",
  },
  {
    key: "wordscramble",
    name: "Word Scramble",
    emoji: "🔀",
    href: "/wordscramble/",
    tagline: "Unscramble Words Against the Clock",
    desc: "Rearrange shuffled letters to form the correct word before time runs out. 10-level expedition with power badges, fake decoy letters from level 6, and a legendary reward at the end.",
    tags: ["Word Game", "Speed", "Pattern"],
    color: "#00D4FF",
  },
  {
    key: "memoryflash",
    name: "Memory Flash",
    emoji: "🧠",
    href: "/memoryflash/",
    tagline: "Pattern Memory & Recall Challenge",
    desc: "Watch a sequence flash on screen, then reproduce it from memory. Sequences grow longer and faster with each level. The ultimate test of working memory and concentration.",
    tags: ["Memory", "Concentration", "Sequential"],
    color: "#00FF88",
  },
  {
    key: "quickpick",
    name: "Quick Pick",
    emoji: "⚡",
    href: "/quickpick/",
    tagline: "Fast Math & Pattern Recognition",
    desc: "Split-second decisions: pick the correct answer from multiple choices before the timer expires. Trains rapid number processing, mathematical intuition and decision speed.",
    tags: ["Math", "Speed", "Decision"],
    color: "#FF9500",
  },
  {
    key: "numberrush",
    name: "Number Rush",
    emoji: "🔢",
    href: "/numberrush/",
    tagline: "Number Recognition Under Pressure",
    desc: "Numbers fly at you — identify, sort or pick the right ones before they disappear. Builds numerical fluency and processing speed that directly improves math performance.",
    tags: ["Numbers", "Speed", "Fluency"],
    color: "#FF2D78",
  },
  {
    key: "daily",
    name: "Daily Challenge",
    emoji: "📅",
    href: "/daily/",
    tagline: "A Fresh Brain Challenge Every Day",
    desc: "A new, handcrafted brain challenge every single day. Streak rewards, special cards and a daily leaderboard keep you coming back. The most effective way to build a daily mental workout habit.",
    tags: ["Daily", "Habit", "Streak"],
    color: "#00D4FF",
  },
];

export default function BrainGamesPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px 64px" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <span>›</span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>Brain Games</span>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700, marginBottom: 12, background: "rgba(180,77,255,0.1)", color: "#B44DFF", border: "1px solid rgba(180,77,255,0.25)" }}>
            7 Games · Free · No Account Required
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
            Free Brain Games Online –{" "}
            <span style={{ color: "#B44DFF" }}>Sharpen Your Mind</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
            Your brain is a muscle — and like any muscle, it gets stronger with the right exercises. PLIZIO's collection of free online brain games is designed to challenge memory, logic, vocabulary, reasoning and processing speed. Whether you have 5 minutes or an hour, our games adapt to your pace and push you just hard enough to grow. No downloads, no subscriptions, no nonsense — just pure brain training in your browser.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>
            From the deductive challenge of Kódex Expedíció to the rapid-fire number processing of Number Rush, from the deep memory demands of Memory Flash to the broad knowledge sweep of Ki Nyer Milliót? — there's a brain game here for every type of thinker. Play alone, challenge friends, or use our Daily Challenge to build a consistent brain-training habit.
          </p>
          <a href="/kodex" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, padding: "12px 24px", borderRadius: 16, fontWeight: 900, fontSize: 14, color: "black", background: "linear-gradient(135deg,#B44DFF,#00D4FF)", textDecoration: "none" }}>
            🧠 Train Your Brain Now
          </a>
        </div>

        {/* Game list */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#B44DFF", marginBottom: 20 }}>
            All Brain Games ({GAMES.length})
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

        {/* How brain training works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "#00FF88", marginBottom: 16 }}>
            The Science of Browser-Based Brain Training
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.75 }}>
            <p>
              Neuroplasticity — the brain's ability to reorganize itself by forming new neural connections — is most active when we engage in novel, challenging tasks. Browser-based brain games like ours provide exactly that environment: each session introduces slight variations in difficulty, timing and problem type that keep the brain actively adapting rather than settling into comfortable routine.
            </p>
            <p>
              Working memory — your brain's mental "scratchpad" for holding and manipulating information — is one of the strongest predictors of academic performance and professional success. Memory Flash directly targets working memory by requiring you to hold increasingly complex sequences in mind. Research shows that working memory training generalizes to real-world tasks like reading comprehension, mental arithmetic and problem-solving.
            </p>
            <p>
              Processing speed is another key cognitive metric — how quickly can you recognize a pattern, retrieve a fact, or make a decision? Quick Pick and Number Rush target this directly. Faster processing speed means better performance on timed tests, quicker mental math, and sharper attention during lectures and meetings.
            </p>
            <p>
              Vocabulary breadth — the number of words you know and can rapidly recognize — is one of the strongest predictors of reading comprehension and verbal intelligence. Kódex Expedíció and Word Scramble both expand vocabulary while building letter pattern recognition skills. The expedition format (10 progressive levels, badges, a final secret code) creates the sustained engagement needed for vocabulary to truly stick.
            </p>
          </div>
        </section>

        {/* Related categories */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>
            More Game Categories
          </h2>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/educational-games/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(0,255,136,0.1)", color: "#00FF88", border: "1px solid rgba(0,255,136,0.25)", textDecoration: "none" }}>📚 Educational Games</a>
            <a href="/reflex-games/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(255,45,120,0.1)", color: "#FF2D78", border: "1px solid rgba(255,45,120,0.25)", textDecoration: "none" }}>💥 Reflex Games</a>
            <a href="/mathe-test/" style={{ padding: "10px 18px", borderRadius: 14, fontWeight: 700, fontSize: 13, background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)", textDecoration: "none" }}>🧮 Mathe Test Klasse 1–8</a>
          </div>
        </section>

      </div>
    </main>
  );
}
