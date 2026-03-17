import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 3 – Free Practice – Plizio",
  description: "Free online math practice for Grade 3: multiplication, division, fractions intro and geometry basics.",
  alternates: { canonical: "https://plizio.com/math-test/grade-3/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
