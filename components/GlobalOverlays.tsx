"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AITutorOverlay = dynamic(() => import("@/components/AITutorOverlay"), { ssr: false });

export default function GlobalOverlays() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AITutorOverlay />
    </>
  );
}
