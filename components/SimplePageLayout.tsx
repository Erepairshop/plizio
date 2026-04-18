"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

export default function SimplePageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#060614] relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: (i % 4) * 0.5 + 0.5,
              height: (i % 4) * 0.5 + 0.5,
            }}
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: 2 + (i % 5) * 0.4, delay: (i % 9) * 0.3, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <header className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.push("/")}
            className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
            aria-label="back"
          >
            <ChevronLeft size={18} />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">{title}</h1>
            {subtitle && <p className="text-white/50 text-sm mt-0.5">{subtitle}</p>}
          </div>
        </header>

        <div className="prose prose-invert max-w-none text-white/80 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
