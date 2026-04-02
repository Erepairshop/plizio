"use client";

import dynamic from "next/dynamic";

const StarholdPhase2Client = dynamic(() => import("./Phase2Client"), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_26%),linear-gradient(180deg,#06111f_0%,#050816_55%,#02050b_100%)]" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-5 text-sm font-black uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
          Loading Phase 2
        </div>
      </div>
    </main>
  ),
});

export default function Phase2Shell() {
  return <StarholdPhase2Client />;
}
