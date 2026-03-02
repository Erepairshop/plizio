import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Math Test Online – Grades 1–8 | PLIZIO",
  description:
    "Free online math test for grades 1–8. Practice arithmetic, fractions, algebra, geometry and more. Instant feedback, no login, no download. Common Core aligned.",
  keywords: [
    "free math test online", "math test for kids", "online math practice",
    "math quiz grades 1-8", "elementary math test", "middle school math test",
    "common core math practice", "free math games", "math test no signup",
    "grade 3 math test", "grade 5 math test", "math test free browser",
  ],
  alternates: {
    canonical: "https://plizio.com/math-test/",
    languages: { "en": "https://plizio.com/math-test/", "x-default": "https://plizio.com/math-test/" },
  },
  openGraph: {
    title: "Free Math Test Online – Grades 1–8 | PLIZIO",
    description: "Practice math for grades 1–8. Arithmetic, fractions, algebra, geometry. Free, instant play, no login.",
    url: "https://plizio.com/math-test/",
    images: [{ url: "/og/math-test-en.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Online Math Test – Grades 1–8",
  description: "Free online math tests for grades 1 through 8, covering all US Common Core math standards.",
  url: "https://plizio.com/math-test/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [1, 2, 3, 4, 5, 6, 7, 8].map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Math Test Grade ${g}`,
      url: `https://plizio.com/math-test/grade-${g}/`,
    })),
  },
};

const GRADES = [
  { grade: 1, suffix: "st", age: "6–7", emoji: "🌱", topics: "Numbers to 20 · Addition/Subtraction · Shapes" },
  { grade: 2, suffix: "nd", age: "7–8", emoji: "🌿", topics: "Numbers to 1,000 · Regrouping · Time & Money" },
  { grade: 3, suffix: "rd", age: "8–9", emoji: "🌲", topics: "Multiplication · Division · Fractions · Area" },
  { grade: 4, suffix: "th", age: "9–10", emoji: "⛰️", topics: "Multi-digit × ÷ · Fractions · Decimals · Angles" },
  { grade: 5, suffix: "th", age: "10–11", emoji: "🌋", topics: "Fraction × ÷ · PEMDAS · Decimals · Volume" },
  { grade: 6, suffix: "th", age: "11–12", emoji: "🌀", topics: "Ratios · Percent · Negative numbers · Algebra" },
  { grade: 7, suffix: "th", age: "12–13", emoji: "🌊", topics: "Proportions · Equations · Probability · Circles" },
  { grade: 8, suffix: "th", age: "13–14", emoji: "🔥", topics: "Linear functions · Pythagorean · Exponents · Systems" },
];

export default function MathTestHubPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 16px 80px" }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: "#7777aa", marginBottom: 28 }}>
          <Link href="/" style={{ color: "#7777aa", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: "#e0e0ff" }}>Math Test</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {["Free", "No Login", "Instant Play", "Grades 1–8"].map(badge => (
              <span key={badge} style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF", borderRadius: 20, padding: "3px 12px", fontSize: 12, fontWeight: 700 }}>
                {badge}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            Free Online{" "}
            <span style={{ color: "#00D4FF" }}>Math Test</span>
            <br />
            <span style={{ fontSize: "0.55em", fontWeight: 400, color: "rgba(255,255,255,0.4)" }}>Grades 1–8 · US Common Core · Instant Feedback</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "#b0b0d0", maxWidth: 620, marginBottom: 28 }}>
            Practice math from 1st through 8th grade with randomly generated questions, instant grading,
            and letter grades (A–F). No account needed — just pick your grade and start. Works on any
            phone, tablet, or computer.
          </p>
          <Link href="/mathtest/" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(90deg, #00D4FF, #B44DFF)",
            color: "white", fontWeight: 800, fontSize: 17,
            padding: "14px 32px", borderRadius: 12, textDecoration: "none",
          }}>
            🚀 Start Math Test Now
          </Link>
        </div>

        {/* Grade Grid */}
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "#00D4FF" }}>
          Select Your Grade Level
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14, marginBottom: 56 }}>
          {GRADES.map(({ grade, suffix, age, emoji, topics }) => (
            <Link key={grade} href={`/math-test/grade-${grade}/`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#12122A",
                borderRadius: 14,
                padding: "20px 22px",
                border: "1px solid rgba(0,212,255,0.1)",
                transition: "border-color 0.2s",
                cursor: "pointer",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 28 }}>{emoji}</span>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: 17, color: "white", marginBottom: 2 }}>
                      {grade}{suffix} Grade
                    </p>
                    <p style={{ fontSize: 12, color: "#7777aa" }}>Ages {age}</p>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#8888bb", lineHeight: 1.5 }}>{topics}</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#00D4FF", marginTop: 12 }}>
                  View Grade {grade} Test →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Why section */}
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, color: "#00D4FF" }}>
          Why Use PLIZIO for Math Practice?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 48 }}>
          {[
            { icon: "🎲", title: "Randomized questions", text: "Every session is different. No memorizing answer patterns — real practice every time." },
            { icon: "⚡", title: "Instant feedback", text: "See your score and mistakes immediately. Faster learning than traditional worksheets." },
            { icon: "🆓", title: "Completely free", text: "No subscription, no ads, no payment. All grade levels are permanently free." },
            { icon: "📱", title: "Any device", text: "Works on phone, tablet, or computer. No app download required." },
            { icon: "🏆", title: "Letter grades (A–F)", text: "US grading system. See exactly where you stand: 90%+ = A, 80%+ = B, etc." },
            { icon: "🔁", title: "Unlimited retries", text: "Repeat as many times as you want. Perfect for daily practice or pre-test warmup." },
          ].map(f => (
            <div key={f.title} style={{ background: "#12122A", borderRadius: 12, padding: "18px 20px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ fontSize: 24 }}>{f.icon}</span>
              <p style={{ fontWeight: 700, fontSize: 15, marginTop: 8, marginBottom: 6, color: "#e0e0ff" }}>{f.title}</p>
              <p style={{ fontSize: 13, color: "#8888bb", lineHeight: 1.55 }}>{f.text}</p>
            </div>
          ))}
        </div>

        {/* Related */}
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, color: "rgba(255,255,255,0.65)" }}>
          More Educational Games
        </h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
          {[
            { href: "/mathtest/", label: "🔢 Math Test (Play Now)" },
            { href: "/quickpick/", label: "⚡ Quick Pick" },
            { href: "/numberrush/", label: "🔥 Number Rush" },
            { href: "/wordscramble/", label: "🔤 Word Scramble" },
            { href: "/educational-games/", label: "📚 All Educational Games" },
            { href: "/mathe-test/", label: "🇩🇪 Deutsche Version" },
          ].map(g => (
            <Link key={g.href} href={g.href} style={{
              background: "#12122A", border: "1px solid rgba(0,212,255,0.2)",
              color: "#00D4FF", borderRadius: 8, padding: "8px 16px",
              textDecoration: "none", fontSize: 14, fontWeight: 600,
            }}>
              {g.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #0d0d28, #12122A)", border: "2px solid #00D4FF", borderRadius: 16, padding: "36px", textAlign: "center" }}>
          <p style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Ready to test your math skills?</p>
          <p style={{ color: "#9090bb", marginBottom: 28, lineHeight: 1.65, fontSize: 16 }}>
            Pick your grade above, or jump straight into the test. Free, instant, no registration required.
          </p>
          <Link href="/mathtest/" style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #00D4FF, #B44DFF)",
            color: "white", fontWeight: 800, fontSize: 18,
            padding: "16px 40px", borderRadius: 12, textDecoration: "none",
          }}>
            Start Math Test →
          </Link>
        </div>

      </div>
    </main>
  );
}
