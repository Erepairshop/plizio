"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  MailOpen,
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
    href: "/postcard/",
    icon: MailOpen,
    color: "#B4502A",
    label: { de: "Postkarte gestalten", hu: "Képeslap készítése", ro: "Creează o carte poștală", en: "Create a postcard" },
  },
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
  const [mounted, setMounted] = useState(false);
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  // Portal target only available after mount (static export has no DOM at build).
  useEffect(() => { setMounted(true); }, []);

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
        className="border border-[#ddd4c2] bg-[#fbf8f1]/95 p-2.5 text-[#211d18] shadow-[2px_2px_0_rgba(33,29,24,.14)] backdrop-blur-sm"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open menu"
      >
        <Menu size={18} className="text-[#6b6356]" />
      </motion.button>

      {/* Drawer — portaled to <body> so an ancestor's transform (entrance
          animation wrapper) can't become its containing block and shrink it. */}
      {mounted && createPortal(
        <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              style={{ zIndex: 100 }}
            />
            {/* Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="fixed top-0 left-0 flex flex-col border-r border-[#ddd4c2]"
              style={{ background: "#f6f1e7", color: "#211d18", zIndex: 101, width: "85%", maxWidth: "24rem", height: "100%" }}
            >
              <header className="flex items-center justify-between border-b border-[#ddd4c2] px-5 py-4">
                <h2 className="text-lg font-black text-[#211d18]">{TITLE[l]}</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center border border-[#ddd4c2] bg-[#fbf8f1] hover:border-[#b4502a]"
                  aria-label="Close"
                >
                  <X size={18} className="text-[#6b6356]" />
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
                          style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", color: "#211d18", textDecoration: "none" }}
                        >
                          <span
                            style={{ width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${item.color}22`, border: `1px solid ${item.color}40` }}
                          >
                            <Icon size={18} style={{ color: item.color }} />
                          </span>
                          <span style={{ fontWeight: 500, fontSize: "14px", color: "#211d18" }}>
                            {item.label[l] ?? item.label.de}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <footer className="border-t border-[#ddd4c2] px-5 py-4 text-xs text-[#6b6356]">
                plizio.com — © 2026
              </footer>
            </motion.aside>
          </>
        )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
