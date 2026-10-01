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
  title: {
    default: "Jitendra Prajapati — Backend & Distributed Systems Engineer",
    template: "%s | Jitendra Prajapati",
  },
  description:
    "Backend-focused engineer specializing in high-concurrency Node.js and Java backends, distributed databases (CockroachDB, PostgreSQL, MongoDB), WebRTC SFU streaming, and real-time Socket.IO architectures.",
  keywords: [
    "Jitendra Prajapati",
    "Backend Engineer",
    "Distributed Systems",
    "Node.js Developer",
    "TypeScript Engineer",
    "Java Backend Developer",
    "WebRTC SFU",
    "Socket.IO",
    "CockroachDB",
    "PostgreSQL",
    "MongoDB",
    "Full Stack Developer",
    "Software Engineer Portfolio",
    "Gujarat India Developer",
  ],
  authors: [
    {
      name: "Jitendra Prajapati",
      url: "https://github.com/Jitendra-2848",
    },
  ],
  creator: "Jitendra Prajapati",
  publisher: "Jitendra Prajapati",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Jitendra Prajapati — Backend & Distributed Systems Engineer",
    description:
      "Backend-focused engineer specializing in high-concurrency systems, distributed databases, real-time WebRTC SFU streaming, and Socket.IO architectures.",
    siteName: "Jitendra Prajapati Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jitendra Prajapati — Backend & Distributed Systems Engineer",
    description:
      "Backend-focused engineer specializing in high-concurrency systems, distributed databases, and real-time streaming.",
    creator: "@Jitendra2848",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google971beef2fe316be9",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jitendra Prajapati",
  jobTitle: "Full Stack Developer & Distributed Systems Engineer",
  url: "https://github.com/Jitendra-2848",
  sameAs: [
    "https://github.com/Jitendra-2848",
    "https://www.linkedin.com/in/jitendra-prajapati-ba2248369/",
    "https://x.com/Jitendra2848",
    "https://t.me/Xoro_0",
  ],
  knowsAbout: [
    "Backend Engineering",
    "Distributed Systems",
    "Node.js",
    "TypeScript",
    "Java",
    "WebRTC",
    "Socket.IO",
    "CockroachDB",
    "PostgreSQL",
    "MongoDB",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

