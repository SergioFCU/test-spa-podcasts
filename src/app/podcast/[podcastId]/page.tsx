import { PodcastDetailPageProps } from "@/app/types";
import { PodcastDetail } from "@/views/podcast-detail/podcast-detail";

const PodcastDetailPage = ({ params }: PodcastDetailPageProps) => (
  <PodcastDetail podcastId={params.podcastId} />
);

export default PodcastDetailPage;
