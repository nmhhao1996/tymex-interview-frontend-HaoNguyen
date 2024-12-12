import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

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
    <html lang="en">
      <body className="bg-stars-image">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
