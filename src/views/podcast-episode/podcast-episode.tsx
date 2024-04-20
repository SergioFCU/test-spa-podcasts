"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { CustomLayout } from "@/components/custom-layout/custom-layout";
import { usePodcastEpisode } from "@/hooks/usePodcastEpisode";

import { PodcastEpisodeProps } from "../types";

const RMCustomLink = ({ ...props }) => (
  <a {...props} className="text-blue-500 hover:underline">
    {props.children}
  </a>
);

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
        <h2 className="text-3xl font-semibold">{podcastEpisode.title}</h2>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ ...props }) => RMCustomLink({ ...props })
          }}
        >
          {podcastEpisode.description}
        </ReactMarkdown>
        <audio autoPlay controls className="w-full">
          <track kind="captions" />
          <source src={podcastEpisode.episodeUrl} type="audio/mp3" />
        </audio>
      </div>
    </CustomLayout>
  ) : (
    <div className="w-full h-full flex justify-end">
      <section>Loading...</section>
    </div>
  );
};
