import {
  ITUNES_GENRE,
  ITUNES_MAX_LIMIT_DETAIL_PODCAST,
  ITUNES_MAX_LIMIT_PODCASTS,
  ITUNES_URI
} from "./consts";
import {
  ResponseItunesDetailPodcastProps,
  ResponseItunesPodcastsProps
} from "./types";
import { parseItunesPodcastDetailData, parseItunesPodcastsData } from "./utils";

export const getPodcasts = async () => {
  const response = await fetch(
    `${ITUNES_URI}us/rss/toppodcasts/limit=${ITUNES_MAX_LIMIT_PODCASTS}/genre=${ITUNES_GENRE}/json`
  );
  const data: ResponseItunesPodcastsProps = await response.json();
  const parsedData = parseItunesPodcastsData(data);

  return parsedData;
};

export const getDetailPodcast = async (id: string) => {
  const response = await fetch(
    `${ITUNES_URI}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${ITUNES_MAX_LIMIT_DETAIL_PODCAST}/json`
  );
  const data: ResponseItunesDetailPodcastProps = await response.json();
  const parsedData = parseItunesPodcastDetailData(data);

  return parsedData;
};
