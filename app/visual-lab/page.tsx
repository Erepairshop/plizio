"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/components/LanguageProvider";
import VisualLab from "@/components/VisualLab";
import type { Lang, VisualLabSubject } from "@/components/VisualLab";

function VisualLabPageInner() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  return (
    <VisualLab
      subject="geographie"
      grade={5}
      lang={l}
      open={true}
      onClose={() => router.push("/learn")}
    />
  );
}

export default function VisualLabPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#020408]" />}>
      <VisualLabPageInner />
    </Suspense>
  );
}
