"use client";

import { useCallback, useEffect } from "react";

import { useContextPodcasts } from "@/contexts/context-podcasts";
import { useLocalStorage } from "./useLocalStorage";

import { getPodcasts } from "@/api/actions";
import { LOCALSTORAGE_PODCASTS_KEY } from "@/api/consts";

export const usePodcastHome = () => {
  const {
    handleLoadFromLocalStorage,
    handleSaveToLocalStorage,
    isWithin24Hours
  } = useLocalStorage();

  const { podcasts, setPodcasts } = useContextPodcasts();

  const _getPodcasts = useCallback(async () => {
    if (podcasts.length <= 0) {
      const response = await getPodcasts();
      setPodcasts(response);

      return handleSaveToLocalStorage(LOCALSTORAGE_PODCASTS_KEY, response);
    }
  }, [podcasts, setPodcasts, handleSaveToLocalStorage, getPodcasts]);

  const handleGetPodcasts = useCallback(async () => {
    try {
      if (podcasts && podcasts.length <= 0) {
        const gottenDataLocalStorage = handleLoadFromLocalStorage(
          LOCALSTORAGE_PODCASTS_KEY
        );

        return gottenDataLocalStorage &&
          isWithin24Hours(gottenDataLocalStorage.timestamp)
          ? setPodcasts(gottenDataLocalStorage.data)
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
    handleGetPodcasts();
  }, [handleGetPodcasts]);

  return {
    podcasts,
    setPodcasts
  };
};
