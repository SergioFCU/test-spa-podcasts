import { useCallback, useEffect, useState } from "react";

import { IndexedResultsPodcastDetailsProps } from "@/common/types";
import { usePodcastDetails } from "@/hooks/usePodcastDetails";

export const usePodcastEpisode = (podcastId: string, episodeId: number) => {
  const { podcastDetails } = usePodcastDetails(podcastId);

  const [podcastEpisode, setPodcastEpisode] =
    useState<IndexedResultsPodcastDetailsProps>(
      {} as IndexedResultsPodcastDetailsProps
    );

  const getPodcastEpisode = useCallback(() => {
    if (Object.keys(podcastDetails).length) {
      const { results } = podcastDetails;

      const foundPodcastEpisode = results.find(
        (elem) => String(elem.trackId) === String(episodeId)
      ) as IndexedResultsPodcastDetailsProps;

      setPodcastEpisode(foundPodcastEpisode);
    }
  }, [podcastDetails, episodeId, setPodcastEpisode]);

  useEffect(() => {
    getPodcastEpisode();
  }, [getPodcastEpisode]);

  return {
    podcastDetails,
    podcastEpisode
  };
};
