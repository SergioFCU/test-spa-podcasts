import type { Metadata } from "next";

import "../styles/global.css";
import { RootLayoutProps } from "./types";

export const metadata: Metadata = {
  title: "test-spa-podcasts",
  description: "technical test senior frontend development Inditex"
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body>
      <div className="w-full h-full flex flex-col justify-center items-center px-32">
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
