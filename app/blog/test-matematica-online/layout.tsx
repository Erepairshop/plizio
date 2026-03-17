import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Test Matematică Online – Exerciții gratuite – Plizio",
  description: "Teste de matematică online gratuite pentru clasele 1–8. Exersează adunarea, scăderea, fracțiile și geometria interactiv.",
  alternates: { canonical: "https://plizio.com/blog/test-matematica-online/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
