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
  title: "Karthik | Full Stack Developer",
  description: "Portfolio website showcasing my work as a Full Stack Developer and Software Engineer",
  keywords: ["Full Stack Developer", "Software Engineer", "Web Development", "React", "Node.js", "TypeScript"],
  authors: [{ name: "Karthik" }],
  openGraph: {
    title: "Karthik | Full Stack Developer",
    description: "Portfolio website showcasing my work as a Full Stack Developer and Software Engineer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik | Full Stack Developer",
    description: "Portfolio website showcasing my work as a Full Stack Developer and Software Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
