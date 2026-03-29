"use client";

import { useEffect } from "react";
import Link from "next/link";
import { saveLanguage } from "@/lib/language";

export default function HuPage() {
  useEffect(() => {
    saveLanguage("hu");
  }, []);

  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          PLIZIO – Ingyenes Online Böngészős Játékok
        </h1>
        <p style={{ color: "#9ca3af" }}>
          Játssz ingyenes online játékokkal – letöltés és regisztráció nélkül!
          Versenyautós, kvíz, memória, reflex és kalandjátékok bármilyen eszközön.
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
          Ugrás a főoldalra
        </Link>
      </div>
    </main>
  );
}
