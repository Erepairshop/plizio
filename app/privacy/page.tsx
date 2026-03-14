"use client";
import { useState } from "react";

const T = {
  de: {
    title: "Datenschutzerklärung",
    back: "← Zurück",
    intro: "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.",
    s1: "1. Verantwortlicher",
    s1t: "Erik Borota, Siedlungsring 51, 89415 Lauingen, Deutschland\nE-Mail: info@plizio.com",
    s2: "2. Erhobene Daten",
    s2t: "Plizio erhebt folgende Daten:\n• Google Analytics: anonymisierte Nutzungsstatistiken (Seitenaufrufe, Verweildauer, Land) – nur mit Ihrer Einwilligung\n• Lokale Speicherung (localStorage): Spielfortschritt, Einstellungen und Sammelkarten werden ausschließlich lokal in Ihrem Browser gespeichert und nicht an unsere Server übertragen.\n• Keine Registrierung, keine Konten, keine personenbezogenen Daten erforderlich.",
    s3: "3. Google Analytics",
    s3t: "Wir verwenden Google Analytics (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) zur Analyse des Nutzerverhaltens. Google Analytics setzt Cookies und überträgt Daten an Server in den USA. Die Verarbeitung erfolgt nur nach Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Cookie-Banner erneut öffnen oder Cookies in Ihrem Browser löschen.",
    s4: "4. Cookies",
    s4t: "Wir verwenden ausschließlich technisch notwendige lokale Speicherung (localStorage) für den Spielbetrieb sowie – nur mit Einwilligung – Google Analytics Cookies. Ein Consent-Banner ermöglicht Ihnen die Kontrolle darüber.",
    s5: "5. Ihre Rechte (DSGVO)",
    s5t: "Sie haben das Recht auf:\n• Auskunft über Ihre gespeicherten Daten\n• Berichtigung unrichtiger Daten\n• Löschung Ihrer Daten\n• Widerspruch gegen die Verarbeitung\n• Datenübertragbarkeit\n\nKontakt: info@plizio.com",
    s6: "6. Änderungen",
    s6t: "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version ist stets auf dieser Seite verfügbar.",
    impressum: "Impressum",
  },
  en: {
    title: "Privacy Policy",
    back: "← Back",
    intro: "Protecting your personal data is important to us. This Privacy Policy explains what data we collect, how we use it, and your rights.",
    s1: "1. Data Controller",
    s1t: "Erik Borota, Siedlungsring 51, 89415 Lauingen, Germany\nEmail: info@plizio.com",
    s2: "2. Data We Collect",
    s2t: "Plizio collects the following data:\n• Google Analytics: anonymized usage statistics (page views, session duration, country) – only with your consent\n• Local storage (localStorage): game progress, settings and collectible cards are stored locally in your browser only and are never transmitted to our servers.\n• No registration, no accounts, no personal data required.",
    s3: "3. Google Analytics",
    s3t: "We use Google Analytics (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) to analyze usage behavior. Google Analytics uses cookies and transfers data to servers in the USA. Processing only occurs with your explicit consent (Art. 6(1)(a) GDPR). You can withdraw your consent at any time by reopening the cookie banner or clearing cookies in your browser.",
    s4: "4. Cookies",
    s4t: "We only use technically necessary local storage (localStorage) for gameplay and – only with consent – Google Analytics cookies. A consent banner gives you control over this.",
    s5: "5. Your Rights (GDPR)",
    s5t: "You have the right to:\n• Access your stored data\n• Correct inaccurate data\n• Delete your data\n• Object to processing\n• Data portability\n\nContact: info@plizio.com",
    s6: "6. Changes",
    s6t: "We reserve the right to update this Privacy Policy as needed. The current version is always available on this page.",
    impressum: "Impressum",
  },
  hu: {
    title: "Adatvédelmi Nyilatkozat",
    back: "← Vissza",
    intro: "Személyes adatai védelme fontos számunkra. Ez az adatvédelmi nyilatkozat tájékoztatja Önt arról, milyen adatokat gyűjtünk, hogyan használjuk azokat, és milyen jogai vannak.",
    s1: "1. Adatkezelő",
    s1t: "Erik Borota, Siedlungsring 51, 89415 Lauingen, Németország\nE-mail: info@plizio.com",
    s2: "2. Gyűjtött adatok",
    s2t: "A Plizio az alábbi adatokat gyűjti:\n• Google Analytics: anonimizált használati statisztikák (oldalmegtekintések, tartózkodási idő, ország) – kizárólag az Ön hozzájárulásával\n• Helyi tárolás (localStorage): játékhaladás, beállítások és gyűjtőkártyák kizárólag a böngészőjében tárolódnak, és soha nem kerülnek szervereinkre.\n• Nincs regisztráció, nincs fiók, nincs szükség személyes adatokra.",
    s3: "3. Google Analytics",
    s3t: "Google Analytics-t (Google LLC, Mountain View, CA, USA) használunk a felhasználói viselkedés elemzéséhez. A Google Analytics sütiket helyez el és adatokat továbbít USA-beli szerverekre. Az adatkezelés kizárólag az Ön kifejezett hozzájárulásával történik (GDPR 6. cikk (1) bek. a) pont). Hozzájárulását bármikor visszavonhatja a cookie-banner újbóli megnyitásával vagy a böngészőben a sütik törlésével.",
    s4: "4. Sütik",
    s4t: "Kizárólag a játékhoz technikailag szükséges helyi tárolást (localStorage) és – kizárólag hozzájárulás esetén – Google Analytics sütiket használunk. Egy hozzájárulási sáv lehetővé teszi az Ön számára az irányítást.",
    s5: "5. Az Ön jogai (GDPR)",
    s5t: "Önnek joga van:\n• hozzáférni a tárolt adataihoz\n• helytelen adatok helyesbítéséhez\n• adatai törléséhez\n• az adatkezelés ellen tiltakozni\n• adathordozhatósághoz\n\nKontakt: info@plizio.com",
    s6: "6. Változtatások",
    s6t: "Fenntartjuk a jogot, hogy szükség esetén módosítsuk ezt a nyilatkozatot. Az aktuális verzió mindig ezen az oldalon érhető el.",
    impressum: "Impresszum",
  },
  ro: {
    title: "Politica de Confidențialitate",
    back: "← Înapoi",
    intro: "Protejarea datelor dvs. personale este importantă pentru noi. Această politică de confidențialitate vă informează ce date colectăm, cum le folosim și ce drepturi aveți.",
    s1: "1. Operator de date",
    s1t: "Erik Borota, Siedlungsring 51, 89415 Lauingen, Germania\nEmail: info@plizio.com",
    s2: "2. Date colectate",
    s2t: "Plizio colectează următoarele date:\n• Google Analytics: statistici de utilizare anonimizate (vizualizări de pagini, durată sesiune, țară) – doar cu consimțământul dvs.\n• Stocare locală (localStorage): progresul în joc, setările și cărțile de colecție sunt stocate exclusiv local în browserul dvs. și nu sunt niciodată transmise serverelor noastre.\n• Fără înregistrare, fără conturi, fără date personale necesare.",
    s3: "3. Google Analytics",
    s3t: "Folosim Google Analytics (Google LLC, Mountain View, CA, SUA) pentru analiza comportamentului utilizatorilor. Google Analytics folosește cookie-uri și transferă date pe servere din SUA. Procesarea are loc doar cu consimțământul dvs. explicit (Art. 6(1)(a) GDPR). Vă puteți retrage consimțământul oricând redeschizând bannerul de cookie-uri sau ștergând cookie-urile din browser.",
    s4: "4. Cookie-uri",
    s4t: "Folosim exclusiv stocarea locală (localStorage) necesară tehnic pentru joc și – doar cu consimțământ – cookie-uri Google Analytics. Un banner de consimțământ vă oferă controlul asupra acestui aspect.",
    s5: "5. Drepturile dvs. (GDPR)",
    s5t: "Aveți dreptul la:\n• Acces la datele stocate\n• Corectarea datelor inexacte\n• Ștergerea datelor dvs.\n• Opoziție față de procesare\n• Portabilitatea datelor\n\nContact: info@plizio.com",
    s6: "6. Modificări",
    s6t: "Ne rezervăm dreptul de a actualiza această politică după necesitate. Versiunea actuală este întotdeauna disponibilă pe această pagină.",
    impressum: "Imprimatură",
  },
};

type Lang = keyof typeof T;

const s = {
  main: { background: "#0A0A1A", color: "white", minHeight: "100vh" } as React.CSSProperties,
  wrap: { maxWidth: 680, margin: "0 auto", padding: "40px 20px 80px" } as React.CSSProperties,
  topRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap" as const, gap: 12 } as React.CSSProperties,
  back: { color: "#9999bb", textDecoration: "none", fontSize: 14 } as React.CSSProperties,
  langRow: { display: "flex", gap: 8 } as React.CSSProperties,
  langBtn: (active: boolean): React.CSSProperties => ({ fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 6, border: "1px solid", borderColor: active ? "#00FF88" : "#333355", background: active ? "rgba(0,255,136,0.1)" : "transparent", color: active ? "#00FF88" : "#9999bb", cursor: "pointer" }),
  h1: { fontSize: 28, fontWeight: 800, marginBottom: 32, color: "#00FF88" } as React.CSSProperties,
  intro: { lineHeight: 1.75, color: "#b0b0cc", marginBottom: 32, fontSize: 15 } as React.CSSProperties,
  h2: { fontSize: 17, fontWeight: 700, marginTop: 32, marginBottom: 8, color: "#e0e0ff" } as React.CSSProperties,
  p: { lineHeight: 1.8, color: "#b0b0cc", fontSize: 14, whiteSpace: "pre-line" as const } as React.CSSProperties,
  divider: { borderColor: "#1a1a3a", marginTop: 36, marginBottom: 24 } as React.CSSProperties,
  footerLink: { color: "#9999bb", textDecoration: "none", fontSize: 13 } as React.CSSProperties,
};

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("de");
  const t = T[lang];

  return (
    <main style={s.main}>
      <div style={s.wrap}>
        <div style={s.topRow}>
          <a href="/" style={s.back}>{t.back}</a>
          <div style={s.langRow}>
            {(["de", "en", "hu", "ro"] as Lang[]).map((l) => (
              <button key={l} style={s.langBtn(lang === l)} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <h1 style={s.h1}>{t.title}</h1>
        <p style={s.intro}>{t.intro}</p>

        <h2 style={s.h2}>{t.s1}</h2>
        <p style={s.p}>{t.s1t}</p>

        <h2 style={s.h2}>{t.s2}</h2>
        <p style={s.p}>{t.s2t}</p>

        <h2 style={s.h2}>{t.s3}</h2>
        <p style={s.p}>{t.s3t}</p>

        <h2 style={s.h2}>{t.s4}</h2>
        <p style={s.p}>{t.s4t}</p>

        <h2 style={s.h2}>{t.s5}</h2>
        <p style={s.p}>{t.s5t}</p>

        <h2 style={s.h2}>{t.s6}</h2>
        <p style={s.p}>{t.s6t}</p>

        <hr style={s.divider} />
        <p style={{ fontSize: 13, color: "#555577" }}>
          <a href="/impressum/" style={s.footerLink}>{t.impressum}</a>
          {" · "}
          <a href="/" style={s.footerLink}>Plizio</a>
        </p>
      </div>
    </main>
  );
}
