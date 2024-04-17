"use client";

import { useCallback, useEffect, useState } from "react";

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

  const [podcasts, setPodcasts] = useState<SerializedItunesPodcastsProps[]>([]);

  const handleChangePodcasts = useCallback(
    (podcasts: SerializedItunesPodcastsProps[]) => {
      setPodcasts(podcasts);
    },
    []
  );

  const _getPodcasts = useCallback(async () => {
    const response = await getPodcasts();
    handleChangePodcasts(response);

    return handleSaveToLocalStorage(LOCALSTORAGE_PODCASTS_KEY, response);
  }, [handleChangePodcasts, handleSaveToLocalStorage]);

  const handleGetPodcasts = useCallback(async () => {
    try {
      if (podcasts && podcasts.length <= 0) {
        const gottenDataLocalStorage = handleLoadFromLocalStorage(
          LOCALSTORAGE_PODCASTS_KEY
        );

        return gottenDataLocalStorage &&
          isWithin24Hours(gottenDataLocalStorage.timestamp)
          ? handleChangePodcasts(gottenDataLocalStorage.data)
          : _getPodcasts();
      }
    } catch (error) {
      console.error(error);
    }
  }, [
    podcasts,
    handleLoadFromLocalStorage,
    isWithin24Hours,
    handleChangePodcasts,
    _getPodcasts
  ]);

  useEffect(() => {
    handleGetPodcasts();
  }, [handleGetPodcasts]);

  return {
    podcasts,
    handleChangePodcasts
  };
};
