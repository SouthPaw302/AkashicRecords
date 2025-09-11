import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akashic Records - The Eternal Archive",
  description: "Access the cosmic database of all souls, events, and divine knowledge",
  keywords: ["akashic records", "cosmic database", "spiritual", "consciousness", "divine knowledge"],
  authors: [{ name: "Akashic Records Team" }],
  openGraph: {
    title: "Akashic Records - The Eternal Archive",
    description: "Access the cosmic database of all souls, events, and divine knowledge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
