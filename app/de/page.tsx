"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveLanguage } from "@/lib/language";

export default function DePage() {
  const router = useRouter();

  useEffect(() => {
    saveLanguage("de");
    router.replace("/");
  }, [router]);

  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          PLIZIO – Kostenlose Online Browser-Spiele
        </h1>
        <p style={{ color: "#9ca3af" }}>
          Spiele kostenlose Online-Spiele – kein Download, keine Anmeldung!
          Rennspiele, Quiz, Gedächtnis-, Reaktionsspiele und mehr auf jedem Gerät.
        </p>
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Weiterleiten...</p>
      </div>
    </main>
  );
}
