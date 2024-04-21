"use client";

import { CustomCardCoverPodcast } from "@/components/custom-card-cover-podcast/custom-card-cover-podcast";
import { CustomHeaderPodcast } from "@/components/custom-header-podcast/custom-header-podcast";
import { usePodcastHome } from "@/hooks/usePodcastHome";
import { useRouter } from "next/navigation";

export const PodcastHome = () => {
  const router = useRouter();
  const { podcastsCount, onFilterPodcasts, filteredPodcasts } =
    usePodcastHome();

  return (
    <div className="w-full h-full flex flex-col">
      <CustomHeaderPodcast isShow={!podcastsCount}>
        <div className="flex justify-end items-center mb-12 gap-3">
          <div className="w-fit h-fit flex items-center rounded-lg p-1 font-semibold text-white bg-sky-700">
            {filteredPodcasts.length}
          </div>
          <input
            className="w-fit rounded-lg p-2 border-1 border-gray-400 focus:ring-white"
            type="text"
            placeholder="Filter podcasts..."
            onChange={onFilterPodcasts}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-10">
          {filteredPodcasts.map((podcast) => (
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
      </CustomHeaderPodcast>
    </div>
  );
};
