"use client";

import { Mail } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";

type Lang = "de" | "hu" | "ro" | "en";

const CONTENT: Record<Lang, { title: string; intro: string; emailLabel: string }> = {
  de: { title: "Kontakt", intro: "Fragen, Feedback oder Interesse an einer Zusammenarbeit?", emailLabel: "E-Mail schreiben" },
  hu: { title: "Kapcsolat", intro: "Kérdésed van, visszajelzésed, vagy együttműködnél velünk?", emailLabel: "E-mail küldése" },
  ro: { title: "Contact", intro: "Ai întrebări, feedback sau vrei să colaborăm?", emailLabel: "Trimite e-mail" },
  en: { title: "Contact", intro: "Questions, feedback or interested in collaboration?", emailLabel: "Send email" },
};

const EMAIL = "hello@plizio.com";

export default function ContactPage() {
  const { lang } = useLang();
  const c = CONTENT[(lang as Lang) ?? "de"];
  return (
    <SimplePageLayout title={c.title}>
      <p className="text-base mb-6">{c.intro}</p>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-sky-500/20 border border-cyan-400/40 text-white font-bold hover:border-cyan-300/60 transition"
      >
        <Mail size={18} /> <span>{c.emailLabel}</span>
      </a>
      <p className="text-white/60 text-sm mt-4">{EMAIL}</p>
    </SimplePageLayout>
  );
}
