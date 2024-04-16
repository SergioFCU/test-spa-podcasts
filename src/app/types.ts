import { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode;
}

export interface PodcastDetailPageProps {
  params: { podcastId: string };
}

export interface PodcastEpisodePageProps {
  params: { episodeId: string };
}
