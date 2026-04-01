"use client";

import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import GeographieK5Explorer from "@/app/astro-geographie/games/k5/GeographieK5Explorer";

export default function AstroGeographieK5Page() {
  const router = useRouter();
  const { lang } = useLang();

  return <GeographieK5Explorer lang={lang} onDone={() => {}} onClose={() => router.push("/astro-geographie")} />;
}
