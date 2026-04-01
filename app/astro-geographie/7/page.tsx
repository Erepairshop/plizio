"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK7Explorer from "@/app/astro-geographie/games/k7/GeographieK7Explorer";

export default function AstroGeographieK7Page() {
  const router = useRouter();
  const { lang } = useLang();
  return <GeographieK7Explorer lang={lang} onDone={() => {}} onClose={() => router.push("/astro-geographie")} />;
}
