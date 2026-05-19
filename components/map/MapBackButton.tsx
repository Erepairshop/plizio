"use client";
// Tiny client island so the parent page can stay a server component.
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export function MapBackButton({ href }: { href: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
      aria-label="back"
    >
      <ChevronLeft size={18} />
    </button>
  );
}
