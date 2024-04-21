import {
  ITUNES_GENRE,
  ITUNES_MAX_LIMIT_PODCASTS,
  ITUNES_URI
} from "@/common/consts";
import { responseItunesPodcastsMock } from "@/common/mocks";
import { getPodcasts } from "./actions";

const mockResponsePodcastsMock = {
  json: jest.fn().mockResolvedValue(responseItunesPodcastsMock)
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
});
