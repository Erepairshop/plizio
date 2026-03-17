import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Limba Română – Plizio",
  description: "Test interactiv de limba română pentru clasa I. Exerciții de alfabet, silabe, ortografie, lectură și înțelegere. Verifică-ți cunoștințele!",
  alternates: { canonical: "https://plizio.com/romaniantest/" },
  openGraph: {
    title: "Test Limba Română – Plizio",
    description: "Test interactiv de limba română pentru clasa I. Exerciții de alfabet, silabe, ortografie, lectură și înțelegere. Verifică-ți cunoștințele!",
    images: [{ url: "/og/romaniantest.png", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
