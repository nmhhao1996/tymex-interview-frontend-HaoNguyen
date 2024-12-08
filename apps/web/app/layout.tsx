import type { Metadata } from "next";
import "./globals.css";
import themeConfig from "./theme.json";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProvider from "../components/ui/theme-provider";

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
      <body>
        <AntdRegistry>
          <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
