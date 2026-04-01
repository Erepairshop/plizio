"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK6Explorer from "@/app/astro-geographie/games/k6/GeographieK6Explorer";

export default function AstroGeographieK6Page() {
  const router = useRouter();
  const { lang } = useLang();
  return <GeographieK6Explorer lang={lang} onDone={() => {}} onClose={() => router.push("/astro-geographie")} />;
}
