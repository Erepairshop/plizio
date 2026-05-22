import fs from "node:fs";
import path from "node:path";

export const metadata = {
  title: "Plizio Placeholder Set Preview",
  robots: "noindex, nofollow",
};

function listSvgs(dir: string): string[] {
  const abs = path.join(process.cwd(), "public", "placeholders", dir);
  try {
    return fs
      .readdirSync(abs)
      .filter((f) => f.endsWith(".svg"))
      .sort();
  } catch {
    return [];
  }
}

export default function PlaceholdersPreviewPage() {
  const pois = listSvgs("poi");
  const sights = listSvgs("sight");

  const SAMPLE_NAMES = [
    "Krakow",
    "Mont Blanc",
    "Salina Praid",
    "Brandenburger Tor",
    "Acropolis",
  ];

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 1280, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 4 }}>Plizio Placeholder Set</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        {pois.length} POI ({"800x480"}) + {sights.length} sight ({"400x400"}) = {pois.length + sights.length} SVG
      </p>

      <h2 style={{ marginTop: 24 }}>POI placeholders ({pois.length})</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
          marginTop: 12,
        }}
      >
        {pois.map((f, i) => {
          const type = f.replace("placeholder-", "").replace(".svg", "");
          const sample = SAMPLE_NAMES[i % SAMPLE_NAMES.length];
          return (
            <figure
              key={f}
              style={{
                position: "relative",
                margin: 0,
                aspectRatio: "5/3",
                borderRadius: 12,
                overflow: "hidden",
                background: "#f3f4f6",
              }}
            >
              <img
                src={`/placeholders/poi/${f}`}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  padding: "12px 14px",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: "-0.015em",
                  textShadow: "0 1px 2px rgba(0,0,0,.3)",
                  background:
                    "linear-gradient(to top, rgba(11,18,32,.55) 0%, rgba(11,18,32,.25) 50%, rgba(11,18,32,0) 100%)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span>{sample}</span>
                <span style={{ fontSize: 11, opacity: 0.85 }}>{type}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <h2 style={{ marginTop: 36 }}>Sight placeholders ({sights.length})</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 14,
          marginTop: 12,
        }}
      >
        {sights.map((f) => {
          const category = f.replace("placeholder-", "").replace(".svg", "");
          return (
            <figure
              key={f}
              style={{
                position: "relative",
                margin: 0,
                aspectRatio: "1/1",
                borderRadius: 12,
                overflow: "hidden",
                background: "#f3f4f6",
              }}
            >
              <img
                src={`/placeholders/sight/${f}`}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  padding: "10px 12px",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 12,
                  textShadow: "0 1px 2px rgba(0,0,0,.3)",
                  background:
                    "linear-gradient(to top, rgba(11,18,32,.55) 0%, rgba(11,18,32,.25) 50%, rgba(11,18,32,0) 100%)",
                  textAlign: "center",
                }}
              >
                {category}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </main>
  );
}
