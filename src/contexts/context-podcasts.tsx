"use client";

import {
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState
} from "react";

import {
  SerializedItunesPodcastsProps,
  SerializedItunesPodcastDetailsProps,
  IndexedResultsPodcastDetailsProps
} from "@/api/types";

export const valueDefaultResultsPodcastDetails: IndexedResultsPodcastDetailsProps =
  {
    title: "",
    duration: "",
    date: "",
    episodeUrl: "",
    description: "",
    trackId: 0
  };

export const valueDefaultPodcastDetails: SerializedItunesPodcastDetailsProps = {
  author: "",
  title: "",
  summary: "",
  image: "",
  coverImage: "",
  id: "",
  resultCount: 0,
  results: [valueDefaultResultsPodcastDetails]
};

const ContextPodcasts = createContext<{
  podcasts: SerializedItunesPodcastsProps[];
  setPodcasts: (val: SetStateAction<SerializedItunesPodcastsProps[]>) => void;
  podcastDetails: SerializedItunesPodcastDetailsProps;
  setPodcastDetails: (
    val: SetStateAction<SerializedItunesPodcastDetailsProps>
  ) => void;
  podcastEpisode: IndexedResultsPodcastDetailsProps;
  setPodcastEpisode: (
    val: SetStateAction<IndexedResultsPodcastDetailsProps>
  ) => void;
}>({
  podcasts: [],
  setPodcasts: () => {},
  podcastDetails: valueDefaultPodcastDetails,
  setPodcastDetails: () => {},
  podcastEpisode: valueDefaultResultsPodcastDetails,
  setPodcastEpisode: () => {}
});

export const PodcastsProvider = ({ children }: any) => {
  const [podcasts, setPodcasts] = useState<SerializedItunesPodcastsProps[]>([]);
  const [podcastDetails, setPodcastDetails] =
    useState<SerializedItunesPodcastDetailsProps>(valueDefaultPodcastDetails);
  const [podcastEpisode, setPodcastEpisode] =
    useState<IndexedResultsPodcastDetailsProps>(
      valueDefaultResultsPodcastDetails
    );

  const values = useMemo(
    () => ({
      podcasts,
      setPodcasts,
      podcastDetails,
      setPodcastDetails,
      podcastEpisode,
      setPodcastEpisode
    }),
    [
      podcasts,
      setPodcasts,
      podcastDetails,
      setPodcastDetails,
      podcastEpisode,
      setPodcastEpisode
    ]
  );

  return (
    <ContextPodcasts.Provider value={values}>
      {children}
    </ContextPodcasts.Provider>
  );
};

const useContextPodcasts = () => useContext(ContextPodcasts);

export { ContextPodcasts, useContextPodcasts };
