import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magyar Teszt – Plizio",
  description: "Interaktív magyar nyelvtan teszt 1–6. osztályig. Válaszd ki az osztályodat és a témákat, majd oldd meg a feladatokat!",
  alternates: { canonical: "https://plizio.com/magyarteszt/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
