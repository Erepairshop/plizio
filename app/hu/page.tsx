"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveLanguage } from "@/lib/language";

export default function HuPage() {
  const router = useRouter();

  useEffect(() => {
    saveLanguage("hu");
    router.replace("/");
  }, [router]);

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
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Átirányítás...</p>
      </div>
    </main>
  );
}
