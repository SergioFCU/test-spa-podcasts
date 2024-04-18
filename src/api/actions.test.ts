import { getPodcastDetails, getPodcasts } from "./actions";

import {
  responseItunesPodcastDetailsMock,
  responseItunesPodcastsMock
} from "@/test/mocks";

import {
  ITUNES_GENRE,
  ITUNES_MAX_LIMIT_DETAIL_PODCAST,
  ITUNES_MAX_LIMIT_PODCASTS,
  ITUNES_URI
} from "./consts";

const mockResponsePodcastsMock = {
  json: jest.fn().mockResolvedValue(responseItunesPodcastsMock)
};

const mockResponsePodcastDetailsMock = {
  json: jest.fn().mockResolvedValue(responseItunesPodcastDetailsMock)
};

describe("getPodcasts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and parse iTunes podcasts data", async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponsePodcastsMock);

    await getPodcasts();

    expect(global.fetch).toHaveBeenCalledWith(
      `${ITUNES_URI}us/rss/toppodcasts/limit=${ITUNES_MAX_LIMIT_PODCASTS}/genre=${ITUNES_GENRE}/json`
    );
  });

  it("should fetch and parse iTunes podcast details data", async () => {
    const id = "123";
    global.fetch = jest.fn().mockResolvedValue(mockResponsePodcastDetailsMock);

    await getPodcastDetails(id);

    expect(global.fetch).toHaveBeenCalledWith(
      `${ITUNES_URI}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${ITUNES_MAX_LIMIT_DETAIL_PODCAST}/json`
    );
  });
});
