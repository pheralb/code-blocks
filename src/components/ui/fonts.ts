import { Geist, Geist_Mono, Onest } from "next/font/google";

export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fontHeadings = Onest({
  variable: "--font-headings",
  subsets: ["latin"],
});

export const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
