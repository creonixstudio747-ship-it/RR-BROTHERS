import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Scene from "@/components/canvas/Scene";
import Experience from "@/components/canvas/Experience";
import ContactWidget from "@/components/ContactWidget";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasFont = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RR BROTHERS | Engineering the Future of Design",
  description: "Senior Full-Stack Developer & UI/UX Architect specializing in 3D Immersive Experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${interFont.variable} ${bebasFont.variable} antialiased bg-black text-white selection:bg-purple-500/30 overflow-x-hidden`}
      >
        <SmoothScroll>
          <Scene>
            <Experience />
          </Scene>
          <main className="relative z-10 min-h-screen w-full">
            {children}
          </main>
          <ContactWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
