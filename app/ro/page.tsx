"use client";

import { useEffect } from "react";
import Link from "next/link";
import { saveLanguage } from "@/lib/language";

export default function RoPage() {
  useEffect(() => {
    saveLanguage("ro");
  }, []);

  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          PLIZIO – Jocuri Online Gratuite în Browser
        </h1>
        <p style={{ color: "#9ca3af" }}>
          Joacă jocuri online gratuite – fără descărcare, fără înregistrare!
          Jocuri de curse, quiz, memorie, reflexe și aventură pe orice dispozitiv.
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
          Mergi la pagina principală
        </Link>
      </div>
    </main>
  );
}
