"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import VisualLab from "@/components/VisualLab";
import { useLang } from "@/components/LanguageProvider";

function VisualLabPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { lang } = useLang();

  const subject = (searchParams?.get("subject") as any) || "geographie";
  const grade = parseInt(searchParams?.get("grade") || "5", 10);
  const game = searchParams?.get("game");

  return (
    <div className="min-h-screen bg-[#060614]">
      <VisualLab
        subject={subject}
        grade={grade}
        lang={lang as any}
        open={true}
        onClose={() => router.push("/learn")}
      />
    </div>
  );
}

export default function VisualLabPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060614]" />}>
      <VisualLabPageInner />
    </Suspense>
  );
}
