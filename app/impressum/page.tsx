"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";
import type { Language } from "@/lib/language";

const CONTENT: Record<Language, {
  title: string;
  subtitle: string;
  provider: string;
  providerDetails: string[];
  disclaimerTitle: string;
  disclaimerText: string;
}> = {
  hu: {
    title: "Impresszum",
    subtitle: "Jogi nyilatkozat és szolgáltatói adatok",
    provider: "Szolgáltató adatai",
    providerDetails: [
      "Tulajdonos: Erik Borota",
      "Siedlungsring 51",
      "89415 Lauingen (Donau)",
      "Németország",
      "Telefon: +49 176 98479520",
      "E-mail: info@plizio.com",
      "Közösségi adószám (USt-IdNr.): DE308874569",
      "A tartalomért felelős (§ 18 Abs. 2 MStV): Erik Borota"
    ],
    disclaimerTitle: "Felelősségkizárás",
    disclaimerText: "A weboldalon található információkat a legnagyobb gondossággal állítottuk össze. Azonban a tartalom pontosságáért, teljességéért és aktualitásáért nem vállalunk felelősséget. Külső linkek esetén a hivatkozott oldalak tartalmáért kizárólag azok üzemeltetői felelnek."
  },
  de: {
    title: "Impressum",
    subtitle: "Rechtliche Hinweise und Anbieterkennzeichnung",
    provider: "Angaben gemäß § 5 TMG",
    providerDetails: [
      "Erik Borota",
      "Siedlungsring 51",
      "89415 Lauingen (Donau)",
      "Deutschland",
      "Telefon: 0176 98479520",
      "E-Mail: info@plizio.com",
      "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE308874569",
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Erik Borota (Anschrift wie oben)"
    ],
    disclaimerTitle: "Haftungsausschluss",
    disclaimerText: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Bei externen Links sind ausschließlich deren Betreiber für den Inhalt verantwortlich."
  },
  ro: {
    title: "Informații legale",
    subtitle: "Impresum și datele furnizorului",
    provider: "Datele furnizorului",
    providerDetails: [
      "Proprietar: Erik Borota",
      "Siedlungsring 51",
      "89415 Lauingen (Donau)",
      "Germania",
      "Telefon: +49 176 98479520",
      "E-mail: info@plizio.com",
      "Cod de TVA (USt-IdNr.): DE308874569",
      "Responsabil de conținut (§ 18 Abs. 2 MStV): Erik Borota"
    ],
    disclaimerTitle: "Declinarea responsabilității",
    disclaimerText: "Informațiile de pe acest site au fost compilate cu cea mai mare grijă. Cu toate acestea, nu ne asumăm răspunderea pentru acuratețea, exhaustivitatea și actualitatea conținutului. Pentru linkurile externe, responsabilitatea conținutului revine exclusiv operatorilor acelor site-uri."
  },
  en: {
    title: "Legal Notice",
    subtitle: "Impressum and provider information",
    provider: "Provider Information",
    providerDetails: [
      "Owner: Erik Borota",
      "Siedlungsring 51",
      "89415 Lauingen (Donau)",
      "Germany",
      "Phone: +49 176 98479520",
      "Email: info@plizio.com",
      "VAT ID (USt-IdNr.): DE308874569",
      "Responsible for content (§ 18 Abs. 2 MStV): Erik Borota"
    ],
    disclaimerTitle: "Disclaimer",
    disclaimerText: "The information on this website has been compiled with the utmost care. However, we cannot accept any liability for the accuracy, completeness, or timeliness of the content. For external links, the operators of those linked pages are solely responsible for their content."
  }
};

export default function ImpressumPage() {
  const { lang } = useLang();
  const c = CONTENT[lang ?? "de"];

  return (
    <SimplePageLayout title={c.title} subtitle={c.subtitle}>
      <div className="space-y-8 mt-6 text-white/80">
        
        <section>
          <h2 className="text-xl font-bold text-white mb-4">{c.provider}</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            {c.providerDetails.map((line, i) => (
              <p key={i} className="m-0 leading-relaxed mb-2 last:mb-0">{line}</p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">{c.disclaimerTitle}</h2>
          <p className="leading-relaxed">
            {c.disclaimerText}
          </p>
        </section>

      </div>
    </SimplePageLayout>
  );
}
