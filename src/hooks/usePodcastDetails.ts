"use client";

import { useCallback, useEffect } from "react";

import { useContextPodcasts } from "@/contexts/context-podcasts";
import { useLocalStorage } from "./useLocalStorage";

import { getPodcastDetails } from "@/api/actions";
import { LOCALSTORAGE_PODCAST_DETAILS_KEY } from "@/api/consts";

import { SerializedItunesPodcastDetailsProps } from "@/api/types";

export const usePodcastDetails = (podcastId: string) => {
  const {
    handleLoadFromLocalStorage,
    handleSaveToLocalStorage,
    isWithin24Hours
  } = useLocalStorage();

  const { podcasts, podcastDetails, setPodcastDetails } = useContextPodcasts();

  const _getPodcastDetails: () => Promise<void> = useCallback(async () => {
    if (podcastDetails.id !== podcastId) {
      const response = (await getPodcastDetails(
        podcastId
      )) as SerializedItunesPodcastDetailsProps;

      const foundPodcast = podcasts.find((podcast) => podcast.id === podcastId);
      setPodcastDetails({ ...response, ...foundPodcast });

      return handleSaveToLocalStorage(
        `${LOCALSTORAGE_PODCAST_DETAILS_KEY}-${podcastId}`,
        { ...response, ...foundPodcast }
      );
    }
  }, [
    podcastDetails,
    setPodcastDetails,
    handleSaveToLocalStorage,
    getPodcastDetails
  ]);

  const fetchPodcastDetails: () => Promise<void> = useCallback(async () => {
    try {
      const dataLocalStorage = handleLoadFromLocalStorage(
        `${LOCALSTORAGE_PODCAST_DETAILS_KEY}-${podcastId}`
      );

      if (podcastDetails.id !== podcastId) {
        return dataLocalStorage && isWithin24Hours(dataLocalStorage.timestamp)
          ? setPodcastDetails(
              dataLocalStorage.data as SerializedItunesPodcastDetailsProps
            )
          : _getPodcastDetails();
      }
    } catch (error) {
      console.error(error);
    }
  }, [
    podcastDetails,
    handleLoadFromLocalStorage,
    isWithin24Hours,
    setPodcastDetails,
    _getPodcastDetails
  ]);

  useEffect(() => {
    fetchPodcastDetails();
  }, [fetchPodcastDetails, podcastId]);

  return {
    podcastDetails,
    setPodcastDetails
  };
};
