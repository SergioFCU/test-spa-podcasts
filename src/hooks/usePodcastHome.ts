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

  const getAllPodcasts = useCallback(async () => {
    const hasDataLocalStorage = getValidLocalStorageData(
      LOCALSTORAGE_PODCASTS_KEY
    );

    if (hasDataLocalStorage) {
      return hasDataLocalStorage;
    } else {
      const response = await getPodcasts();
      saveToLocalStorage(LOCALSTORAGE_PODCASTS_KEY, response);

      return response;
    }
  }, [getPodcasts, saveToLocalStorage, getValidLocalStorageData]);

  const fetchAllPodcasts = useCallback(async () => {
    try {
      if (!podcasts.length) {
        const response =
          (await getAllPodcasts()) as SerializedItunesPodcastsProps[];
        setPodcasts(response);
        setFilteredPodcasts(response);
      }
    } catch (error) {
      console.error({ type: "Error fetch podcasts", error });
    }
  }, [getAllPodcasts, podcasts]);

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
    fetchAllPodcasts();
  }, [fetchAllPodcasts]);

  return {
    podcasts,
    filteredPodcasts,
    getAllPodcasts,
    onFilterPodcasts
  };
};
