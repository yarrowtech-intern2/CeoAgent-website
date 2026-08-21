import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEO Agent OS - AI-Powered Virtual Company",
  description:
    "Download CEO Agent OS, a Windows application that delegates real work to specialist AI department agents.",
  keywords: ["CEO Agent OS", "CEO AI agent", "AI virtual company", "executive assistant software"],
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/Logo.png"
  },
  openGraph: {
    title: "CEO Agent OS - AI-Powered Virtual Company",
    description:
      "Give it a goal in plain English and get finished work from specialist AI department agents.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
