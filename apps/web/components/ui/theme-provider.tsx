'use client';
import { ConfigProvider, ThemeConfig, theme } from "antd";

export default function ThemeProvider({
    theme: themeConfig,
    children,
}: {
    theme: ThemeConfig;
    children: React.ReactNode;
}): JSX.Element {
  return (
    <ConfigProvider
      theme={{
        ...themeConfig,
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
