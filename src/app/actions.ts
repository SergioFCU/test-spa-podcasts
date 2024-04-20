"use server";

import {
  ITUNES_GENRE,
  ITUNES_MAX_LIMIT_PODCASTS,
  ITUNES_URI
} from "@/common/consts";
import { ResponseItunesPodcastsProps } from "@/common/types";
import { parseItunesPodcastsData } from "@/common/utils";

export const getPodcasts = async () => {
  const response = await fetch(
    `${ITUNES_URI}us/rss/toppodcasts/limit=${ITUNES_MAX_LIMIT_PODCASTS}/genre=${ITUNES_GENRE}/json`
  );
  const data: ResponseItunesPodcastsProps = await response.json();
  const parsedData = parseItunesPodcastsData(data);

  return parsedData;
};
