"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveLanguage } from "@/lib/language";

export default function RoPage() {
  const router = useRouter();

  useEffect(() => {
    saveLanguage("ro");
    router.replace("/");
  }, [router]);

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
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Redirecționare...</p>
      </div>
    </main>
  );
}
