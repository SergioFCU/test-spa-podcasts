import { Duration, DateTime } from "luxon";
import {
  ResponseItunesDetailPodcastProps,
  ResponseItunesPodcastsProps,
  SerializedItunesPodcastDetailsProps,
  SerializedItunesPodcastsProps
} from "./types";

export const formatDuration = (durationInMilliseconds: number): string => {
  const duration = Duration.fromMillis(durationInMilliseconds);

  return duration.toFormat("mm:ss");
};

export const formatDate = (date: string): string => {
  const dateTime = DateTime.fromISO(date);
  const formattedDate = dateTime.toFormat("MM/dd/yyyy");

  return formattedDate;
};

export const parseItunesPodcastsData = (data: ResponseItunesPodcastsProps) => {
  const parsedItunesPodcastsData = data.feed.entry.map((item) => ({
    title: item["im:name"].label,
    image: item["im:image"][2].label,
    author: item["im:artist"].label,
    id: item.id.attributes["im:id"],
    summary: item.summary.label
  }));

  return parsedItunesPodcastsData as SerializedItunesPodcastsProps[];
};

export const parseItunesPodcastDetailData = (
  data: ResponseItunesDetailPodcastProps,
  id: string
) => {
  const foundPodcastWrapperType = data.results.find(
    (item) => "artistName" in item
  );

  const parsedItunesPodcastDetailData = data.results.map((item) => ({
    title: item.trackName,
    duration: formatDuration(item.trackTimeMillis),
    date: formatDate(item.releaseDate),
    episodeUrl: "episodeUrl" in item ? item.episodeUrl : "",
    description: "description" in item ? item.description : "",
    trackId: item.trackId
  }));

  return {
    id,
    coverImage: foundPodcastWrapperType?.artworkUrl600,
    resultCount: data.resultCount,
    results: parsedItunesPodcastDetailData
  } as SerializedItunesPodcastDetailsProps | null;
};
