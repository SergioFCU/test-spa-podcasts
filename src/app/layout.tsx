import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "test-spa-podcasts",
  description: "technical test senior frontend development Inditex"
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
