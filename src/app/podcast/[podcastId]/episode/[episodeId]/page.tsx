import { PodcastEpisodePageProps } from "@/app/types";
import { PodcastEpisode } from "@/views/podcast-episode/podcast-episode";

const PodcastEpisodePage = ({ params }: PodcastEpisodePageProps) => (
  <PodcastEpisode podcastId={params.podcastId} episodeId={params.episodeId} />
);
export default PodcastEpisodePage;
