import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Limba Română – Plizio",
  description: "Test interactiv de limba română pentru clasa I. Exerciții de alfabet, silabe, ortografie, lectură și înțelegere. Verifică-ți cunoștințele!",
  alternates: { canonical: "https://plizio.com/romaniantest/" },
  openGraph: {
    title: "Test Limba Română – Plizio",
    description: "Test interactiv de limba română pentru clasa I. Exerciții de alfabet, silabe, ortografie, lectură și înțelegere. Verifică-ți cunoștințele!",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
