"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  BookOpen,
  Info,
  Mail,
  Users,
  GraduationCap,
  HelpCircle,
  FileText,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

type Lang = "de" | "hu" | "ro" | "en";

interface MenuItem {
  href: string;
  icon: LucideIcon;
  color: string;
  label: Record<Lang, string>;
}

const ITEMS: MenuItem[] = [
  {
    href: "/blog",
    icon: BookOpen,
    color: "#22D3EE",
    label: { de: "Blog", hu: "Blog", ro: "Blog", en: "Blog" },
  },
  {
    href: "/about",
    icon: Info,
    color: "#34D399",
    label: { de: "Über uns", hu: "Rólunk", ro: "Despre noi", en: "About" },
  },
  {
    href: "/parents",
    icon: Users,
    color: "#F59E0B",
    label: { de: "Für Eltern", hu: "Szülőknek", ro: "Pentru părinți", en: "For Parents" },
  },
  {
    href: "/teachers",
    icon: GraduationCap,
    color: "#B44DFF",
    label: { de: "Für Lehrer", hu: "Tanároknak", ro: "Pentru profesori", en: "For Teachers" },
  },
  {
    href: "/faq",
    icon: HelpCircle,
    color: "#FB923C",
    label: { de: "FAQ", hu: "GYIK", ro: "Întrebări frecvente", en: "FAQ" },
  },
  {
    href: "/contact",
    icon: Mail,
    color: "#F472B6",
    label: { de: "Kontakt", hu: "Kapcsolat", ro: "Contact", en: "Contact" },
  },
  {
    href: "/impressum",
    icon: FileText,
    color: "rgba(255,255,255,0.5)",
    label: { de: "Impressum", hu: "Impresszum", ro: "Impresum", en: "Imprint" },
  },
  {
    href: "/privacy",
    icon: Shield,
    color: "rgba(255,255,255,0.5)",
    label: { de: "Datenschutz", hu: "Adatvédelem", ro: "Confidențialitate", en: "Privacy" },
  },
];

const TITLE: Record<Lang, string> = {
  de: "Menü",
  hu: "Menü",
  ro: "Meniu",
  en: "Menu",
};

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="bg-card/80 backdrop-blur-sm border border-white/10 p-2.5 rounded-full"
        style={{ boxShadow: "0 0 12px rgba(255,255,255,0.08)" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open menu"
      >
        <Menu size={18} className="text-white/80" />
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />
            {/* Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 left-0 z-[101] h-full w-[85%] max-w-sm border-r border-white/10 flex flex-col"
              style={{ background: "#0A0A1A" }}
            >
              <header className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <h2 className="text-white/90 font-black text-lg">{TITLE[l]}</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X size={18} className="text-white/70" />
                </button>
              </header>
              <nav className="overflow-y-auto px-3 py-3" style={{ flex: "1 1 auto", minHeight: 0 }}>
                <ul style={{ display: "flex", flexDirection: "column", gap: "4px", margin: 0, padding: 0, listStyle: "none" }}>
                  {ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "12px", color: "rgba(255,255,255,0.9)", textDecoration: "none" }}
                        >
                          <span
                            style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${item.color}22`, border: `1px solid ${item.color}40` }}
                          >
                            <Icon size={18} style={{ color: item.color }} />
                          </span>
                          <span style={{ fontWeight: 500, fontSize: "14px", color: "rgba(255,255,255,0.9)" }}>
                            {item.label[l] ?? item.label.de}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <footer className="px-5 py-4 border-t border-white/10 text-white/40 text-xs">
                plizio.com — © 2026
              </footer>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
