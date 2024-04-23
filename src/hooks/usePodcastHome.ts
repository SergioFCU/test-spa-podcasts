"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { getPodcasts } from "@/app/actions";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import { LOCALSTORAGE_PODCASTS_KEY } from "@/common/consts";
import { SerializedItunesPodcastsProps } from "@/common/types";

export const usePodcastHome = () => {
  const { saveToLocalStorage, getValidLocalStorageData } = useLocalStorage();

  const [podcasts, setPodcasts] = useState<SerializedItunesPodcastsProps[]>([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState<
    SerializedItunesPodcastsProps[]
  >([]);

  const _getPodcasts: () => Promise<void> = useCallback(async () => {
    if (podcasts.length <= 0) {
      const response = await getPodcasts();
      setPodcasts(response);
      setFilteredPodcasts(response);

      return saveToLocalStorage(LOCALSTORAGE_PODCASTS_KEY, response);
    }
  }, [podcasts, saveToLocalStorage]);

  const fetchPodcasts: () => Promise<void> = useCallback(async () => {
    try {
      if (!podcasts.length) {
        const hasDataLocalStorage = getValidLocalStorageData(
          LOCALSTORAGE_PODCASTS_KEY
        ) as SerializedItunesPodcastsProps[];

        if (hasDataLocalStorage) {
          setPodcasts(hasDataLocalStorage);
          setFilteredPodcasts(hasDataLocalStorage);
        } else {
          await _getPodcasts();
        }
      }
    } catch (error) {
      console.error({ type: "Error fetch podcasts", error });
    }
  }, [_getPodcasts, getValidLocalStorageData, podcasts]);

  const onFilterPodcasts = useCallback(
    (search: ChangeEvent<HTMLInputElement>) => {
      if (search.target.value.length === 0) {
        return setFilteredPodcasts(podcasts);
      }

      const lowercaseInput = search.target.value.toLowerCase();
      const filteredPodcasts = podcasts.filter((item) => {
        const title = item.title.toLowerCase();
        const author = item.author.toLowerCase();

        return (
          title.includes(lowercaseInput) || author.includes(lowercaseInput)
        );
      });

      setFilteredPodcasts(filteredPodcasts);
    },
    [podcasts]
  );

  useEffect(() => {
    fetchPodcasts();
  }, [fetchPodcasts]);

  return {
    podcastsCount: podcasts.length,
    filteredPodcasts,
    onFilterPodcasts
  };
};
