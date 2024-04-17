import { SerializedItunesPodcastsProps } from "@/api/types";
import { MouseEventHandler } from "react";

export interface CustomCardCoverPodcastProps
  extends SerializedItunesPodcastsProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
