import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import GrainOverlay from "@/components/ui/GrainOverlay";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "[Nombre del Estudio] — Arquitectura Web & Experiencias Digitales de Alto Calibre",
  description:
    "Estudio de ingeniería frontend creativa, dirección de arte y diseño de interacción para marcas líderes globales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f5f5f3] selection:bg-[#f5f5f3] selection:text-[#080808] relative overflow-x-hidden">
        <SmoothScrollProvider>
          <GrainOverlay />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
