"use client";

import { useCallback, useEffect } from "react";

import { useContextPodcasts } from "@/contexts/context-podcasts";
import { useLocalStorage } from "./useLocalStorage";

import { getPodcasts } from "@/api/actions";
import { LOCALSTORAGE_PODCASTS_KEY } from "@/api/consts";
import { SerializedItunesPodcastsProps } from "@/api/types";

export const usePodcastHome = () => {
  const {
    handleLoadFromLocalStorage,
    handleSaveToLocalStorage,
    isWithin24Hours
  } = useLocalStorage();

  const { podcasts, setPodcasts } = useContextPodcasts();

  const _getPodcasts: () => Promise<void> = useCallback(async () => {
    if (podcasts.length <= 0) {
      const response = await getPodcasts();
      setPodcasts(response);

      return handleSaveToLocalStorage(LOCALSTORAGE_PODCASTS_KEY, response);
    }
  }, [podcasts, setPodcasts, handleSaveToLocalStorage, getPodcasts]);

  const fetchPodcasts: () => Promise<void> = useCallback(async () => {
    try {
      if (podcasts.length <= 0) {
        const dataLocalStorage = handleLoadFromLocalStorage(
          LOCALSTORAGE_PODCASTS_KEY
        );

        return dataLocalStorage && isWithin24Hours(dataLocalStorage.timestamp)
          ? setPodcasts(
              dataLocalStorage.data as SerializedItunesPodcastsProps[]
            )
          : _getPodcasts();
      }
    } catch (error) {
      console.error(error);
    }
  }, [
    podcasts,
    setPodcasts,
    handleLoadFromLocalStorage,
    isWithin24Hours,
    _getPodcasts
  ]);

  useEffect(() => {
    fetchPodcasts();
  }, [fetchPodcasts]);

  return {
    podcasts,
    setPodcasts
  };
};
