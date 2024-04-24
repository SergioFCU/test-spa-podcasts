import { useCallback, useEffect, useState } from "react";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePodcastHome } from "@/hooks/usePodcastHome";

import { getPodcastDetailsAPI } from "@/app/podcast/[podcastId]/actions";
import { LOCALSTORAGE_PODCAST_DETAILS_KEY } from "@/common/consts";

import { SerializedItunesPodcastDetailsProps } from "@/common/types";

export const usePodcastDetails = (podcastId: string) => {
  const { saveToLocalStorage, getValidLocalStorageData } = useLocalStorage();
  const { podcasts } = usePodcastHome();

  const [podcastDetails, setPodcastDetails] =
    useState<SerializedItunesPodcastDetailsProps>(
      {} as SerializedItunesPodcastDetailsProps
    );

  const getPodcastDetails = useCallback(async () => {
    const hasDataLocalStorage = getValidLocalStorageData(
      `${LOCALSTORAGE_PODCAST_DETAILS_KEY}-${podcastId}`
    );

    if (hasDataLocalStorage) {
      return hasDataLocalStorage;
    } else {
      const gottenPodcastDetails = (await getPodcastDetailsAPI(
        podcastId
      )) as SerializedItunesPodcastDetailsProps;

      const foundPodcastDetails = podcasts.find(
        (podcast) => podcast.id === podcastId
      );

      const response = { ...gottenPodcastDetails, ...foundPodcastDetails };

      saveToLocalStorage(
        `${LOCALSTORAGE_PODCAST_DETAILS_KEY}-${podcastId}`,
        response
      );

      return response;
    }
  }, [
    getValidLocalStorageData,
    getPodcastDetailsAPI,
    podcasts,
    podcastId,
    saveToLocalStorage
  ]);

  const fetchPodcastDetails = useCallback(async () => {
    if (!Object.keys(podcastDetails).length) {
      try {
        const response =
          (await getPodcastDetails()) as SerializedItunesPodcastDetailsProps;
        setPodcastDetails(response);
      } catch (error) {
        console.error({ type: "Error fetch podcast details", error });
      }
    }
  }, [getPodcastDetails, podcastDetails, setPodcastDetails]);

  useEffect(() => {
    fetchPodcastDetails();
  }, [fetchPodcastDetails]);

  return {
    podcastDetails,
    setPodcastDetails
  };
};
