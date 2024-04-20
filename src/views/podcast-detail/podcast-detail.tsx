"use client";

import { usePodcastDetails } from "@/hooks/usePodcastDetails";

import { CustomCountEpisodes } from "@/components/custom-count-episodes/custom-count-episodes";
import { CustomHeaderPodcast } from "@/components/custom-header-podcast/custom-header-podcast";
import { CustomLayout } from "@/components/custom-layout/custom-layout";
import { CustomTableEpisodes } from "@/components/custom-table-episodes/custom-table-episodes";

import { PodcastDetailProps } from "../types";

export const PodcastDetail = ({ podcastId }: PodcastDetailProps) => {
  const { podcastDetails } = usePodcastDetails(podcastId);

  return (
    <CustomHeaderPodcast>
      {podcastDetails.id === podcastId ? (
        <CustomLayout podcastDetails={podcastDetails}>
          <CustomCountEpisodes count={podcastDetails.resultCount} />
          <CustomTableEpisodes
            thList={["Title", "Date", "Duration"]}
            podcastDetails={podcastDetails}
            podcastId={podcastId ?? ""}
          />
        </CustomLayout>
      ) : (
        <div className="w-full h-full flex justify-end">
          <p>Loading...</p>
        </div>
      )}
    </CustomHeaderPodcast>
  );
};
