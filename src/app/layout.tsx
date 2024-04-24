import type { Metadata } from "next";

import { RootLayoutProps } from "./types";

import "../styles/global.css";

export const metadata: Metadata = {
  title: "test-spa-podcasts",
  description: "technical test senior frontend development Inditex"
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body>
      <div className="w-full h-full flex flex-col justify-center items-center px-8 md:px-12 xl:px-36 py-4 md:py-6 xl:py-18">
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
