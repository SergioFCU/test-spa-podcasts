"use server";

import {
  ITUNES_GENRE,
  ITUNES_MAX_LIMIT_PODCASTS,
  ITUNES_URI
} from "@/common/consts";
import { ResponseItunesPodcastsProps } from "@/common/types";
import { parseItunesPodcastsData } from "@/common/utils";

export const getAllPodcastsAPI = async () => {
  const response = await fetch(
    `${ITUNES_URI}us/rss/toppodcasts/limit=${ITUNES_MAX_LIMIT_PODCASTS}/genre=${ITUNES_GENRE}/json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts");
  }

  const data: ResponseItunesPodcastsProps = await response.json();
  const parsedData = parseItunesPodcastsData(data);

  return parsedData;
};
