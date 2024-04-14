import { ItunesPodcastProps } from "@/api/types";
import { MouseEventHandler } from "react";

export interface CustomCardCoverPodcastProps extends ItunesPodcastProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
