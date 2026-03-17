import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Limba Română Clasa a II-a Online – Gratuit | PLIZIO",
  description: "Test gratuit de limba română pentru clasa a II-a (7–8 ani): ortografie, părți de vorbire, propoziția, textul narativ. Exersează online – fără înregistrare!",
  alternates: { canonical: "https://plizio.com/teste-romana/clasa-2/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
