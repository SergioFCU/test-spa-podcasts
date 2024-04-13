"use client";

import { usePodcastHome } from "@/hooks/usePodcastHome";

export const PodcastHome = () => {
  const { podcasts } = usePodcastHome();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">Podcast Home</h1>
      {podcasts.map((podcast) => (
        <div key={podcast.id}>
          <img src={podcast.image} alt={podcast.title} />
          <h2>{podcast.title}</h2>
          <p>{podcast.author}</p>
        </div>
      ))}
    </div>
  );
};
