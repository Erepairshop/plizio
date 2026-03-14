import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Plizio",
  description: "Impressum und rechtliche Angaben für Plizio.",
  alternates: { canonical: "https://plizio.com/impressum/" },
  robots: { index: false },
};

const s = {
  main: { background: "#0A0A1A", color: "white", minHeight: "100vh" } as React.CSSProperties,
  wrap: { maxWidth: 680, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  h1: { fontSize: 28, fontWeight: 800, marginBottom: 32, color: "#00FF88" } as React.CSSProperties,
  h2: { fontSize: 17, fontWeight: 700, marginTop: 28, marginBottom: 8, color: "#e0e0ff" } as React.CSSProperties,
  p: { lineHeight: 1.75, color: "#b0b0cc", marginBottom: 8, fontSize: 15 } as React.CSSProperties,
  back: { display: "inline-block", color: "#9999bb", textDecoration: "none", fontSize: 14, marginBottom: 32 } as React.CSSProperties,
  divider: { borderColor: "#1a1a3a", marginTop: 32, marginBottom: 32 } as React.CSSProperties,
};

export default function ImpressumPage() {
  return (
    <main style={s.main}>
      <div style={s.wrap}>
        <a href="/" style={s.back}>← Zurück zur Startseite</a>
        <h1 style={s.h1}>Impressum</h1>

        <h2 style={s.h2}>Angaben gemäß § 5 TMG</h2>
        <p style={s.p}>
          Erik Borota<br />
          Siedlungsring 51<br />
          89415 Lauingen<br />
          Deutschland
        </p>

        <h2 style={s.h2}>Umsatzsteuer-ID</h2>
        <p style={s.p}>
          USt.-IdNr.: DE308874569
        </p>

        <h2 style={s.h2}>Kontakt</h2>
        <p style={s.p}>
          E-Mail: <a href="mailto:info@plizio.com" style={{ color: "#00FF88" }}>info@plizio.com</a><br />
          Website: <a href="https://plizio.com" style={{ color: "#00FF88" }}>www.plizio.com</a>
        </p>

        <h2 style={s.h2}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p style={s.p}>Erik Borota</p>

        <hr style={s.divider} />

        <h2 style={s.h2}>Haftungsausschluss</h2>
        <p style={s.p}>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich.
        </p>

        <h2 style={s.h2}>Urheberrecht</h2>
        <p style={s.p}>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>

        <hr style={s.divider} />

        <p style={{ ...s.p, fontSize: 13, color: "#666688" }}>
          <a href="/privacy/" style={{ color: "#9999bb" }}>Datenschutzerklärung</a>
          {" · "}
          <a href="/" style={{ color: "#9999bb" }}>Plizio – Lernspiele</a>
        </p>
      </div>
    </main>
  );
}
