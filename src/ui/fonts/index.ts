import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";

export const fontSans = localFont({
  variable: "--font-sans",
  src: "./InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const fontMono = localFont({
  variable: "--font-mono",
  src: "./CascadiaCodePL.woff2",
  weight: "400 900",
  display: "swap",
  preload: true,
});

export const fontSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});
