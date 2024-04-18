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
  SerializedItunesPodcastDetailsProps
} from "@/api/types";

const valueDefaultPodcastDetails: SerializedItunesPodcastDetailsProps = {
  author: "",
  title: "",
  summary: "",
  image: "",
  coverImage: "",
  id: "",
  resultCount: 0,
  results: [
    {
      title: "",
      duration: "",
      date: "",
      episodeUrl: "",
      description: ""
    }
  ]
};

const ContextPodcasts = createContext<{
  podcasts: SerializedItunesPodcastsProps[];
  setPodcasts: (val: SetStateAction<SerializedItunesPodcastsProps[]>) => void;
  podcastDetails: SerializedItunesPodcastDetailsProps;
  setPodcastDetails: (
    val: SetStateAction<SerializedItunesPodcastDetailsProps>
  ) => void;
}>({
  podcasts: [],
  setPodcasts: () => {},
  podcastDetails: valueDefaultPodcastDetails,
  setPodcastDetails: () => {}
});

export const PodcastsProvider = ({ children }: any) => {
  const [podcasts, setPodcasts] = useState<SerializedItunesPodcastsProps[]>([]);
  const [podcastDetails, setPodcastDetails] =
    useState<SerializedItunesPodcastDetailsProps>(valueDefaultPodcastDetails);

  const values = useMemo(
    () => ({
      podcasts,
      setPodcasts,
      podcastDetails,
      setPodcastDetails
    }),
    [podcasts, setPodcasts, podcastDetails, setPodcastDetails]
  );

  return (
    <ContextPodcasts.Provider value={values}>
      {children}
    </ContextPodcasts.Provider>
  );
};

const useContextPodcasts = () => useContext(ContextPodcasts);

export { ContextPodcasts, useContextPodcasts };
