"use client";

// Visitor error-report widget for the React/Next pages (games, maps, landing).
// Mirror of the static POI-page widget; POSTs to the same VPS endpoint
// (/report.php -> ntfy + logfile). (user 2026-06-15)
import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";

type T = { btn: string; title: string; ph: string; email: string; send: string; cancel: string; thanks: string; err: string };
const LABELS: Record<string, T> = {
  de: { btn: "Fehler melden", title: "Fehler auf dieser Seite melden", ph: "Was stimmt nicht? (falsche Daten, Bild, Übersetzung, Link …)", email: "E-Mail (optional, für Rückfragen)", send: "Senden", cancel: "Abbrechen", thanks: "Danke für deine Meldung!", err: "Senden fehlgeschlagen, bitte später erneut." },
  hu: { btn: "Hiba jelentése", title: "Hiba jelentése ezen az oldalon", ph: "Mit tapasztaltál? (hibás adat, kép, fordítás, link …)", email: "E-mail (opcionális, ha választ kérsz)", send: "Küldés", cancel: "Mégse", thanks: "Köszönjük a jelzést!", err: "A küldés nem sikerült, próbáld később." },
  ro: { btn: "Raportează o eroare", title: "Raportează o eroare pe această pagină", ph: "Ce nu este în regulă? (date, imagine, traducere, link …)", email: "E-mail (opțional, pentru răspuns)", send: "Trimite", cancel: "Anulează", thanks: "Mulțumim pentru sesizare!", err: "Trimiterea a eșuat, încearcă mai târziu." },
  en: { btn: "Report an issue", title: "Report an issue on this page", ph: "What's wrong? (incorrect data, image, translation, link …)", email: "Email (optional, if you want a reply)", send: "Send", cancel: "Cancel", thanks: "Thanks for letting us know!", err: "Sending failed, please try again later." },
};

export default function ReportIssue() {
  const { lang } = useLang();
  const t = LABELS[lang as string] || LABELS.en;
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"" | "sending" | "ok" | "bad">("");

  async function submit() {
    if (msg.trim().length < 3) return;
    setStatus("sending");
    try {
      const r = await fetch("/report.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg: msg.trim(), email: email.trim(), url: location.href, title: document.title, hp }),
      });
      if (!r.ok) throw new Error();
      setStatus("ok");
      setMsg(""); setEmail("");
      setTimeout(() => { setOpen(false); setStatus(""); }, 1600);
    } catch {
      setStatus("bad");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.btn}
        title={t.btn}
        style={{ position: "fixed", left: 12, bottom: "calc(12px + env(safe-area-inset-bottom))", zIndex: 9998, display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 11px", border: 0, borderRadius: 999, background: "rgba(20,28,40,.82)", color: "#fff", font: "600 12px/1 system-ui,sans-serif", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,.3)", backdropFilter: "blur(4px)", opacity: 0.7 }}
      >
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
        <span>{t.btn}</span>
      </button>

      {open && (
        <div
          role="dialog" aria-modal="true" aria-label={t.title}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          style={{ position: "fixed", inset: 0, zIndex: 10001, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(2,6,12,.72)", padding: 16 }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 440, background: "#fff", color: "#1a2230", borderRadius: 14, padding: "20px 18px 16px", boxShadow: "0 12px 40px rgba(0,0,0,.4)" }}>
            <button type="button" onClick={() => setOpen(false)} aria-label={t.cancel} style={{ position: "absolute", top: 8, right: 10, border: 0, background: "none", fontSize: "1.6rem", lineHeight: 1, color: "#888", cursor: "pointer" }}>×</button>
            <h3 style={{ margin: "0 0 12px", fontSize: "1.05rem", paddingRight: 24 }}>{t.title}</h3>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder={t.ph} maxLength={4000}
              style={{ width: "100%", boxSizing: "border-box", border: "1px solid #cdd5e0", borderRadius: 9, padding: "9px 11px", font: "400 .95rem system-ui,sans-serif", marginBottom: 9, resize: "vertical" }} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.email} maxLength={200} autoComplete="email"
              style={{ width: "100%", boxSizing: "border-box", border: "1px solid #cdd5e0", borderRadius: 9, padding: "9px 11px", font: "400 .95rem system-ui,sans-serif", marginBottom: 9 }} />
            <input type="text" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true"
              style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }} />
            <div style={{ display: "flex", gap: 9, justifyContent: "flex-end" }}>
              <button type="button" onClick={() => setOpen(false)} style={{ border: 0, borderRadius: 9, padding: "9px 16px", font: "600 .9rem system-ui,sans-serif", cursor: "pointer", background: "#eef1f6", color: "#444" }}>{t.cancel}</button>
              <button type="button" onClick={submit} disabled={status === "sending"} style={{ border: 0, borderRadius: 9, padding: "9px 16px", font: "600 .9rem system-ui,sans-serif", cursor: "pointer", background: "#2b7cff", color: "#fff", opacity: status === "sending" ? 0.5 : 1 }}>{t.send}</button>
            </div>
            {status === "ok" && <p style={{ margin: "10px 0 0", fontSize: ".9rem", color: "#1d8a45" }}>{t.thanks}</p>}
            {status === "bad" && <p style={{ margin: "10px 0 0", fontSize: ".9rem", color: "#c0392b" }}>{t.err}</p>}
          </div>
        </div>
      )}
    </>
  );
}
