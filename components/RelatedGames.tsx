// Shared component: shows related game links below game content (SEO internal linking)

const ALL_GAMES = {
  mathtest:    { name: "Math Test",           emoji: "🧮", href: "/mathtest/",     category: ["educational", "brain"] },
  kodex:       { name: "Kódex Expedíció",     emoji: "🔐", href: "/kodex/",        category: ["educational", "brain"] },
  wordscramble:{ name: "Word Scramble",       emoji: "🔀", href: "/wordscramble/", category: ["educational", "brain"] },
  quickpick:   { name: "Quick Pick",          emoji: "⚡", href: "/quickpick/",    category: ["educational", "brain"] },
  milliomos:   { name: "Ki Nyer Milliót?",    emoji: "💰", href: "/milliomos/",    category: ["educational", "brain"] },
  memoryflash: { name: "Memory Flash",        emoji: "🧠", href: "/memoryflash/",  category: ["brain"] },
  numberrush:  { name: "Number Rush",         emoji: "🔢", href: "/numberrush/",   category: ["brain", "reflex"] },
  reflexrush:  { name: "Reflex Rush",         emoji: "💥", href: "/reflexrush/",   category: ["reflex"] },
  spotdiff:    { name: "Spot the Difference", emoji: "👁️", href: "/spotdiff/",     category: ["brain", "reflex"] },
  wordhunt:    { name: "Word Hunt",           emoji: "🔎", href: "/wordhunt/",     category: ["brain", "language"] },
  sequencerush:{ name: "Sequence Rush",       emoji: "🔠", href: "/sequencerush/", category: ["reflex", "brain"] },
};

const RELATED_MAP: Record<string, string[]> = {
  mathtest:     ["kodex", "wordscramble", "quickpick", "milliomos"],
  kodex:        ["wordscramble", "milliomos", "memoryflash", "quickpick"],
  wordscramble: ["kodex", "quickpick", "milliomos", "memoryflash"],
  quickpick:    ["mathtest", "kodex", "numberrush", "memoryflash"],
  milliomos:    ["kodex", "wordscramble", "quickpick", "memoryflash"],
  memoryflash:  ["kodex", "wordscramble", "numberrush", "spotdiff"],
  numberrush:   ["reflexrush", "quickpick", "memoryflash", "spotdiff"],
  reflexrush:   ["numberrush", "spotdiff", "wordhunt", "sequencerush"],
  spotdiff:     ["memoryflash", "kodex", "wordhunt", "sequencerush"],
  wordhunt:     ["sequencerush", "spotdiff", "kodex", "wordscramble"],
  sequencerush: ["wordhunt", "spotdiff", "quickpick", "memoryflash"],
};

export default function RelatedGames({ game }: { game: keyof typeof RELATED_MAP }) {
  const related = RELATED_MAP[game] ?? [];
  if (related.length === 0) return null;

  return (
    <section
      style={{
        background: "#0A0A1A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 16px 32px",
      }}
      aria-label="Related games"
    >
      <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
        Related games
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {related.map((key) => {
          const g = ALL_GAMES[key as keyof typeof ALL_GAMES];
          if (!g) return null;
          return (
            <a
              key={key}
              href={g.href}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 14px", borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.55)", textDecoration: "none",
                fontSize: 13, fontWeight: 600,
                transition: "opacity 0.15s",
              }}
            >
              <span>{g.emoji}</span>
              <span>{g.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

// Category link helper (used in category pages)
export { ALL_GAMES, RELATED_MAP };
