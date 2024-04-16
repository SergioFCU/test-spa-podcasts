import { responseItunesPodcastsMock } from "@/test/mocks";
import { getPodcasts } from "./actions";
import { ITUNES_GENRE, ITUNES_MAX_LIMIT, ITUNES_URI } from "./consts";

const mockResponse = {
  json: jest.fn().mockResolvedValue(responseItunesPodcastsMock)
};

// Mock the fetch function
global.fetch = jest.fn().mockResolvedValue(mockResponse);

describe("getPodcasts", () => {
  it("should fetch and parse iTunes podcasts data", async () => {
    await getPodcasts();

    expect(global.fetch).toHaveBeenCalledWith(
      `${ITUNES_URI}us/rss/toppodcasts/limit=${ITUNES_MAX_LIMIT}/genre=${ITUNES_GENRE}/json`
    );
  });
});
