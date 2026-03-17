import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 4 – Free Practice – Plizio",
  description: "Free online math practice for Grade 4: long multiplication, division, fractions and area calculations.",
  alternates: { canonical: "https://plizio.com/math-test/grade-4/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
