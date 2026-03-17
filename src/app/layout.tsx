import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Make with AI | µLearn × Google",
  description: "Build. Ship. Learn. In 8 Hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-g-dark min-h-screen selection:bg-g-blue/20 selection:text-g-blue`}
      >
        <main className="min-h-screen border-x-4 border-g-dark max-w-[1600px] mx-auto bg-white/90 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
