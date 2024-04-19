"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { CustomLayout } from "@/components/custom-layout/custom-layout";
import { usePodcastEpisode } from "@/hooks/usePodcastEpisode";

import { PodcastEpisodeProps } from "../types";

export const PodcastEpisode = ({
  podcastId,
  episodeId
}: PodcastEpisodeProps) => {
  const { podcastDetails, podcastEpisode } = usePodcastEpisode(
    podcastId,
    episodeId
  );

  return podcastEpisode &&
    String(podcastEpisode.trackId) === String(episodeId) ? (
    <CustomLayout podcastDetails={podcastDetails}>
      <div className="flex flex-col border-1 p-4 shadow-lg gap-5">
        <p className="text-3xl font-semibold">{podcastEpisode.title}</p>
        <ReactMarkdown
          children={podcastEpisode.description}
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a {...props} className="text-blue-500 hover:underline" />
            )
          }}
        />
        <audio autoPlay controls className="w-full">
          <source src={podcastEpisode?.episodeUrl ?? ""} type="audio/mp3" />
        </audio>
      </div>
    </CustomLayout>
  ) : (
    <div className="w-full h-full flex justify-end">
      <p>Loading...</p>
    </div>
  );
};
