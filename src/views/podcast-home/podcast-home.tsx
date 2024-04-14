"use client";

import { CustomCardCoverPodcast } from "@/components/custom-card-cover-podcast/custom-card-cover-podcast";
import { usePodcastHome } from "@/hooks/usePodcastHome";

export const PodcastHome = () => {
  const { podcasts } = usePodcastHome();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-4 justify-items-center gap-5">
        {podcasts.map((podcast) => (
          <CustomCardCoverPodcast
            key={podcast.id}
            id={podcast.id}
            title={podcast.title}
            author={podcast.author}
            image={podcast.image}
          />
        ))}
      </div>
    </div>
  );
};
