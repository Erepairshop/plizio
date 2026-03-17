import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 6 – Free Practice – Plizio",
  description: "Free online math practice for Grade 6: ratios, proportions, negative numbers, area and volume.",
  alternates: { canonical: "https://plizio.com/math-test/grade-6/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
