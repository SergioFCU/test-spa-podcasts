import { PodcastEpisodePageProps } from "@/app/types";
import { PodcastEpisode } from "@/views/podcast-episode/podcast-episode";

const PodcastEpisodePage = ({ params }: PodcastEpisodePageProps) => (
  <PodcastEpisode episodeId={params.episodeId} />
);
export default PodcastEpisodePage;
