import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = { title: "AGS Realtors & Construction — Concept Demo", description: "A concept property discovery experience for AGS Realtors & Construction in Dehradun, using sample data.", icons: { icon: "/favicon.svg" } };

export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>; }
