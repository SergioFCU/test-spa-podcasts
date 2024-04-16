import { ITUNES_GENRE, ITUNES_MAX_LIMIT, ITUNES_URI } from "./consts";
import { ItunesPodcastProps, ResponseItunesPodcastsProps } from "./types";
import { parseItunesPodcastsData } from "./utils";

export const getPodcasts = async () => {
  const response = await fetch(
    `${ITUNES_URI}us/rss/toppodcasts/limit=${ITUNES_MAX_LIMIT}/genre=${ITUNES_GENRE}/json`
  );
  const data: ResponseItunesPodcastsProps = await response.json();
  const parsedData = parseItunesPodcastsData(data);

  return parsedData as ItunesPodcastProps[];
};
