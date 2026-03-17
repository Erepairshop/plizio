import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 5 – Free Practice – Plizio",
  description: "Free online math practice for Grade 5: fractions, decimals, percentages, ratios and geometry.",
  alternates: { canonical: "https://plizio.com/math-test/grade-5/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
