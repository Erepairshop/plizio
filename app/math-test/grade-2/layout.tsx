import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Math Test Grade 2 – Free Practice – Plizio",
  description: "Free online math practice for Grade 2: addition, subtraction up to 100, multiplication intro and word problems.",
  alternates: { canonical: "https://plizio.com/math-test/grade-2/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
