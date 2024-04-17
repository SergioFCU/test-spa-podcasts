"use client";

import {
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState
} from "react";

import { SerializedItunesPodcastsProps } from "@/api/types";

const ContextPodcasts = createContext<{
  podcasts: SerializedItunesPodcastsProps[];
  setPodcasts: (val: SetStateAction<SerializedItunesPodcastsProps[]>) => void;
}>({
  podcasts: [],
  setPodcasts: () => {}
});

export const PodcastsProvider = ({ children }: any) => {
  const [podcasts, setPodcasts] = useState<SerializedItunesPodcastsProps[]>([]);

  const values = useMemo(
    () => ({
      podcasts,
      setPodcasts
    }),
    [podcasts, setPodcasts]
  );

  return (
    <ContextPodcasts.Provider value={values}>
      {children}
    </ContextPodcasts.Provider>
  );
};

const useContextPodcasts = () => useContext(ContextPodcasts);

export { ContextPodcasts, useContextPodcasts };
