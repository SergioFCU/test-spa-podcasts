"use client";

import { ChangeEvent, useCallback, useEffect } from "react";

import { useContextPodcasts } from "@/contexts/context-podcasts";
import { useLocalStorage } from "./useLocalStorage";

import { getPodcasts } from "@/app/actions";
import { LOCALSTORAGE_PODCASTS_KEY } from "@/common/consts";
import { SerializedItunesPodcastsProps } from "@/common/types";

export const usePodcastHome = () => {
  const {
    handleLoadFromLocalStorage,
    handleSaveToLocalStorage,
    isWithin24Hours
  } = useLocalStorage();

  const { podcasts, setPodcasts, filteredPodcasts, setFilteredPodcasts } =
    useContextPodcasts();

  const _getPodcasts: () => Promise<void> = useCallback(async () => {
    if (podcasts.length <= 0) {
      const response = await getPodcasts();
      setPodcasts(response);
      setFilteredPodcasts(response);

      return handleSaveToLocalStorage(LOCALSTORAGE_PODCASTS_KEY, response);
    }
  }, [podcasts, setPodcasts, handleSaveToLocalStorage, getPodcasts]);

  const fetchPodcasts: () => Promise<void> = useCallback(async () => {
    try {
      if (podcasts.length <= 0) {
        const dataLocalStorage = handleLoadFromLocalStorage(
          LOCALSTORAGE_PODCASTS_KEY
        );

        if (dataLocalStorage && isWithin24Hours(dataLocalStorage.timestamp)) {
          setPodcasts(dataLocalStorage.data as SerializedItunesPodcastsProps[]);
          setFilteredPodcasts(
            dataLocalStorage.data as SerializedItunesPodcastsProps[]
          );
        }

        return _getPodcasts();
      }
    } catch (error) {
      console.error({ type: "Error fetch podcasts", error });
    }
  }, [
    podcasts,
    setPodcasts,
    handleLoadFromLocalStorage,
    isWithin24Hours,
    _getPodcasts
  ]);

  const onFilterPodcasts = useCallback(
    (search: ChangeEvent<HTMLInputElement>) => {
      if (search.target.value.length === 0) {
        return setFilteredPodcasts(podcasts);
      }

      const { value } = search.target;
      const lowercaseInput = value.toLowerCase();

      const filteredPodcasts = podcasts.filter((item) => {
        const title = item.title.toLowerCase();
        const author = item.author.toLowerCase();

        return (
          title.includes(lowercaseInput) || author.includes(lowercaseInput)
        );
      });

      setFilteredPodcasts(filteredPodcasts);
    },

    [podcasts, setFilteredPodcasts]
  );

  useEffect(() => {
    fetchPodcasts();
  }, [fetchPodcasts]);

  // useEffect(() => {
  //   return () => {
  //     setFilteredPodcasts(podcasts);
  //   };
  // }, [podcasts, setFilteredPodcasts]);

  return {
    podcastsCount: podcasts.length,
    filteredPodcasts,
    onFilterPodcasts
  };
};
