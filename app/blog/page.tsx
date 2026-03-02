import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathe & Lernspiele Blog – Tipps für Schüler und Eltern | PLIZIO",
  description: "Hilfreiche Tipps rund um Mathe, Lernspiele und Schulvorbereitung. Für Schüler, Eltern und Lehrer der Klassen 1–8.",
  alternates: { canonical: "https://plizio.com/blog/" },
};

const ARTICLES = [
  { slug: "einmaleins-lernen",         title: "Einmaleins lernen: 8 Methoden die wirklich funktionieren",     date: "2026-02-15", tag: "Klasse 3" },
  { slug: "mathe-tipps-klasse-3",      title: "Mathe Klasse 3 – Die 10 wichtigsten Tipps für Eltern",        date: "2026-02-20", tag: "Klasse 3" },
  { slug: "bruchrechnung-tipps",       title: "Bruchrechnung leicht gemacht – Tipps für Klasse 4 & 5",       date: "2026-02-25", tag: "Klasse 4–5" },
  { slug: "mathe-test-vorbereitung",   title: "Mathe Test Vorbereitung: Der perfekte Lernplan",              date: "2026-03-01", tag: "Allgemein" },
  { slug: "free-math-games-kids",      title: "Best Free Math Games for Kids – Play & Learn Online",         date: "2026-03-02", tag: "English" },
];

export default function BlogIndexPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <nav style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>
          <a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a>
          <span>›</span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>Blog</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>
          PLIZIO <span style={{ color: "#00FF88" }}>Blog</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 32, fontSize: 15 }}>
          Mathe-Tipps, Lernmethoden und Spielempfehlungen für Schüler, Eltern und Lehrer.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ARTICLES.map(a => (
            <a key={a.slug} href={`/blog/${a.slug}/`}
              style={{ display: "flex", flexDirection: "column", gap: 6, padding: "20px 20px", borderRadius: 18, background: "#12122A", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100, background: "rgba(0,212,255,0.1)", color: "#00D4FF" }}>{a.tag}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{a.date}</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.35 }}>{a.title}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
