import { MouseEventHandler } from "react";

import {
  SerializedItunesPodcastDetailsProps,
  SerializedItunesPodcastsProps
} from "@/api/types";

export interface CustomCardCoverPodcastProps
  extends SerializedItunesPodcastsProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomCountEpisodesProps {
  count: number;
}

export interface CustomTableEpisodesProps {
  thList: string[];
  podcastDetails: SerializedItunesPodcastDetailsProps;
  podcastId: string;
}

export interface CustomLayoutProps {
  podcastDetails: SerializedItunesPodcastDetailsProps;
  children: React.ReactNode;
}

export interface CustomRichTextProps {
  text: string;
  className?: string;
}
