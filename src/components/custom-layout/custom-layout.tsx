"use client";

import { useWindowSize } from "react-use";

import { CustomLayoutProps } from "../types";
import { CustomSidebarPodcast } from "../custom-sidebar-podcast/custom-sidebar-podcast";

export const CustomLayout = ({
  podcastDetails,
  children
}: CustomLayoutProps) => {
  const { height } = useWindowSize();

  return (
    <div
      className="w-full flex flex-col h-full gap-16 xl:h-auto xl:flex-row"
      style={{ height: height - 10 }}
    >
      <section
        id="podcast-detail-left-sidebar"
        className="w-full xl:w-1/4 h-fit flex flex-col border-1 p-2 shadow-lg"
      >
        <CustomSidebarPodcast
          image={podcastDetails.image}
          title={podcastDetails.title}
          author={podcastDetails.author}
          description={podcastDetails.summary}
        />
      </section>
      <section
        id="podcast-detail-results"
        className="w-full xl:w-3/4 h-full flex flex-col gap-8"
      >
        {children}
      </section>
    </div>
  );
};
