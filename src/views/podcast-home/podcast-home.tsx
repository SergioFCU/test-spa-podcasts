"use client";

import { CustomCardCoverPodcast } from "@/components/custom-card-cover-podcast/custom-card-cover-podcast";
import { usePodcastHome } from "@/hooks/usePodcastHome";
import { useRouter } from "next/navigation";

export const PodcastHome = () => {
  const router = useRouter();
  const { podcasts } = usePodcastHome();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10">
        {podcasts.map((podcast) => (
          <CustomCardCoverPodcast
            key={podcast.id}
            id={podcast.id}
            title={podcast.title}
            author={podcast.author}
            image={podcast.image}
            onClick={() => router.push(`/podcast/${podcast.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
