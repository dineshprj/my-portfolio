import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Dinesh Prajapati | Frontend Developer",
  description:
    "Portfolio of Dinesh Prajapati - Frontend Developer specializing in React, Next.js, TypeScript, and modern responsive web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-background min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
