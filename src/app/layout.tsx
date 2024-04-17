import type { Metadata } from "next";

import { PodcastsProvider } from "@/contexts/context-podcasts";

import { RootLayoutProps } from "./types";

import "../styles/global.css";

export const metadata: Metadata = {
  title: "test-spa-podcasts",
  description: "technical test senior frontend development Inditex"
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body>
      <PodcastsProvider>
        <div className="w-full h-full flex flex-col justify-center items-center px-8 md:px-12 lg:px-36">
          {children}
        </div>
      </PodcastsProvider>
    </body>
  </html>
);

export default RootLayout;
