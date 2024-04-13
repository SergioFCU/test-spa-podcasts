import { PodcastDetailProps } from "./types";

export const PodcastDetail = ({ podcastId }: PodcastDetailProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">Podcast Detail: {podcastId}</h1>
    </div>
  );
};