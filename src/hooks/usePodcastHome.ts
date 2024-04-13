"use client";

import { useCallback, useEffect, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

import { getPodcasts } from "@/api/actions";
import { LOCALSTORAGE_PODCASTS_KEY } from "@/api/consts";
import { ItunesPodcastProps } from "@/api/types";

export const usePodcastHome = () => {
  const {
    handleLoadFromLocalStorage,
    handleSaveToLocalStorage,
    isWithin24Hours
  } = useLocalStorage();

  const [podcasts, setPodcasts] = useState<ItunesPodcastProps[]>([]);

  const handleChangePodcasts = (podcasts: ItunesPodcastProps[]) => {
    setPodcasts(podcasts);
  };

  const _getPodcasts = useCallback(async () => {
    const response = await getPodcasts();
    handleChangePodcasts(response);
    return handleSaveToLocalStorage(LOCALSTORAGE_PODCASTS_KEY, response);
  }, []);

  const handleGetPodcasts = useCallback(async () => {
    try {
      const gottenDataLocalStorage = handleLoadFromLocalStorage(
        LOCALSTORAGE_PODCASTS_KEY
      );

      gottenDataLocalStorage &&
      isWithin24Hours(gottenDataLocalStorage.timestamp)
        ? handleChangePodcasts(gottenDataLocalStorage.data)
        : _getPodcasts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    handleGetPodcasts();
  }, [handleGetPodcasts]);

  return {
    podcasts,
    handleChangePodcasts
  };
};
