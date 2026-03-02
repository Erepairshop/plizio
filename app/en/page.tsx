"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveLanguage } from "@/lib/language";

export default function EnPage() {
  const router = useRouter();

  useEffect(() => {
    saveLanguage("en");
    router.replace("/");
  }, [router]);

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
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Redirecting...</p>
      </div>
    </main>
  );
}
