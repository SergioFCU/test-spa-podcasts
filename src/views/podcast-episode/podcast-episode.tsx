import { PodcastEpisodeProps } from "./types";

export const PodcastEpisode = ({ episodeId }: PodcastEpisodeProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">Episode: {episodeId} </h1>
    </div>
  );
};
