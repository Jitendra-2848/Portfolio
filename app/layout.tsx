import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jitendra Prajapati — Full Stack & Backend Engineer",
  description: "Backend-focused engineer specializing in high-concurrency systems, distributed databases, and real-time streaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#08080a] text-[#EDEDED] font-sans antialiased selection:bg-[#BFFF3C] selection:text-[#08080a]">
        {children}
      </body>
    </html>
  );
}
