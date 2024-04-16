import { ResponseItunesPodcastsProps } from "./types";

export const parseItunesPodcastsData = (data: ResponseItunesPodcastsProps) => {
  const parsedItunesPoscastsData = data.feed.entry.map((item) => ({
    title: item["im:name"].label,
    image: item["im:image"][2].label,
    author: item["im:artist"].label,
    id: item.id.attributes["im:id"]
  }));

  return parsedItunesPoscastsData;
};
