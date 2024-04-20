export interface PodcastDetailProps {
  podcastId: string;
}

export interface PodcastEpisodeProps extends PodcastDetailProps {
  episodeId: number;
}
