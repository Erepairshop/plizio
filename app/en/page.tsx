"use client";

import { useEffect } from "react";
import Link from "next/link";
import { saveLanguage } from "@/lib/language";

export default function EnPage() {
  useEffect(() => {
    saveLanguage("en");
  }, []);

  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          PLIZIO – Free Online Browser Games
        </h1>
        <p style={{ color: "#9ca3af" }}>
          Play free online games instantly – no download, no sign-up!
          Racing, quiz, memory, reflex and adventure games on any device.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            marginTop: "1.25rem",
            padding: "0.85rem 1.2rem",
            borderRadius: "14px",
            color: "#0A0A1A",
            background: "linear-gradient(135deg, #00D4FF, #B44DFF)",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Go to homepage
        </Link>
      </div>
    </main>
  );
}
