import {
  SerializedItunesPodcastDetailsProps,
  SerializedItunesPodcastsProps
} from "@/api/types";
import { MouseEventHandler } from "react";

export interface CustomCardCoverPodcastProps
  extends SerializedItunesPodcastsProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomSidebarPodcastProps {
  image: string;
  title: string;
  author: string;
  description?: string;
}

export interface CustomCountEpisodesProps {
  count: number;
}

export interface CustomTableEpisodesProps {
  thList: string[];
  podcastDetails: SerializedItunesPodcastDetailsProps;
  podcastId: string;
}
