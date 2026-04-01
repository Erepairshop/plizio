"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK6Explorer from "@/app/astro-geographie/games/k6/GeographieK6Explorer";

export default function AstroGeographieK6Page() {
  const router = useRouter();
  const { lang } = useLang();
  const geoLang = lang === "en" ? "de" : lang;
  return <GeographieK6Explorer key={geoLang} lang={geoLang} onDone={() => router.push("/astro-geographie")} onClose={() => router.push("/astro-geographie")} />;
}
