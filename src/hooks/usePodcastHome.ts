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
        const gottenDataLocalStorage = handleLoadFromLocalStorage(
          LOCALSTORAGE_PODCASTS_KEY
        );

        return gottenDataLocalStorage &&
          isWithin24Hours(gottenDataLocalStorage.timestamp)
          ? setPodcasts(
              gottenDataLocalStorage.data as SerializedItunesPodcastsProps[]
            )
          : _getPodcasts();
      }
    } catch (error) {
      console.error(error);
    }
  }, [
    podcasts,
    handleLoadFromLocalStorage,
    isWithin24Hours,
    setPodcasts,
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
