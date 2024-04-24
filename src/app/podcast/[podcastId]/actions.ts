"use server";

import { ITUNES_MAX_LIMIT_DETAIL_PODCAST, ITUNES_URI } from "@/common/consts";
import { ResponseItunesDetailPodcastProps } from "@/common/types";
import { parseItunesPodcastDetailData } from "@/common/utils";

export const getPodcastDetailsAPI = async (id: string) => {
  const response = await fetch(
    `${ITUNES_URI}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${ITUNES_MAX_LIMIT_DETAIL_PODCAST}/json`
  );

  if (!response.ok) {
    throw new Error("Error fetching podcast details");
  }

  const data: ResponseItunesDetailPodcastProps = await response.json();
  const parsedData = parseItunesPodcastDetailData(data, id);

  return parsedData;
};
