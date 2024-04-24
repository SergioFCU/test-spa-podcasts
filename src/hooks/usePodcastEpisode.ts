import { useCallback, useEffect } from "react";

import { useContextPodcasts } from "@/contexts/context-podcasts";
import { usePodcastDetails } from "./usePodcastDetails";

import { IndexedResultsPodcastDetailsProps } from "@/common/types";

export const usePodcastEpisode = (podcastId: string, episodeId: number) => {
  const { podcastDetails } = usePodcastDetails(podcastId);
  const { podcastEpisode, setPodcastEpisode } = useContextPodcasts();

  const findPodcastEpisode = useCallback(() => {
    const { results } = podcastDetails;

    const foundPodcastEpisode = results.find(
      (elem) => String(elem.trackId) === String(episodeId)
    ) as IndexedResultsPodcastDetailsProps;

    setPodcastEpisode(foundPodcastEpisode);
  }, [podcastDetails, episodeId, setPodcastEpisode]);

  useEffect(() => {
    findPodcastEpisode();
  }, [findPodcastEpisode]);

  return {
    podcastDetails,
    podcastEpisode
  };
};
