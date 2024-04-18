"use client";

import { useWindowSize } from "react-use";

import { usePodcastDetails } from "@/hooks/usePodcastDetails";

import { CustomCountEpisodes } from "@/components/custom-count-episodes/custom-count-episodes";
import { CustomSidebarPodcast } from "@/components/custom-sidebar-podcast/custom-sidebar-podcast";
import { CustomTableEpisodes } from "@/components/custom-table-episodes/custom-table-episodes";
import { PodcastDetailProps } from "../types";

export const PodcastDetail = ({ podcastId }: PodcastDetailProps) => {
  const { height } = useWindowSize();
  const { podcastDetails } = usePodcastDetails(podcastId);

  return podcastDetails.id === podcastId ? (
    <div
      className="w-full h-full flex flex-col gap-16 xl:flex-row"
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
        <CustomCountEpisodes count={podcastDetails.resultCount} />
        <CustomTableEpisodes
          thList={["Title", "Date", "Duration"]}
          podcastDetails={podcastDetails}
          podcastId={podcastId ?? ""}
        />
      </section>
    </div>
  ) : (
    <div className="w-full h-full flex justify-end">
      <p>Loading...</p>
    </div>
  );
};
