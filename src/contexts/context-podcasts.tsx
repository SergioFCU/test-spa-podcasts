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
} from "@/common/types";

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
  filteredPodcasts: SerializedItunesPodcastsProps[];
  setFilteredPodcasts: (
    val: SetStateAction<SerializedItunesPodcastsProps[]>
  ) => void;
}>({
  podcasts: [],
  setPodcasts: () => {},
  podcastDetails: valueDefaultPodcastDetails,
  setPodcastDetails: () => {},
  podcastEpisode: valueDefaultResultsPodcastDetails,
  setPodcastEpisode: () => {},
  filteredPodcasts: [],
  setFilteredPodcasts: () => {}
});

export const PodcastsProvider = ({ children }: any) => {
  const [podcasts, setPodcasts] = useState<SerializedItunesPodcastsProps[]>([]);
  const [podcastDetails, setPodcastDetails] =
    useState<SerializedItunesPodcastDetailsProps>(valueDefaultPodcastDetails);
  const [podcastEpisode, setPodcastEpisode] =
    useState<IndexedResultsPodcastDetailsProps>(
      valueDefaultResultsPodcastDetails
    );
  const [filteredPodcasts, setFilteredPodcasts] =
    useState<SerializedItunesPodcastsProps[]>(podcasts);

  const values = useMemo(
    () => ({
      podcasts,
      setPodcasts,
      podcastDetails,
      setPodcastDetails,
      podcastEpisode,
      setPodcastEpisode,
      filteredPodcasts,
      setFilteredPodcasts
    }),
    [
      podcasts,
      setPodcasts,
      podcastDetails,
      setPodcastDetails,
      podcastEpisode,
      setPodcastEpisode,
      filteredPodcasts,
      setFilteredPodcasts
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
