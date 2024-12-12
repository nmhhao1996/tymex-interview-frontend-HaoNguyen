import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import { ScrollToTopButton } from "../components/scroll-to-top-button";

const droneRangerPro = localFont({
  src: "./assets/fonts/DroneRangerPro_Bold.otf",
  display: "swap",
  weight: "bold",
  variable: "--font-drone-ranger-pro",
});

export const metadata: Metadata = {
  title: "TymeX",
  description: "TymeX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={droneRangerPro.variable}>
      <body className="bg-stars-image">
        <Providers>{children}</Providers>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
