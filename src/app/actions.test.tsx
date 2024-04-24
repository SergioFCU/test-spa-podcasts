import {
  ITUNES_GENRE,
  ITUNES_MAX_LIMIT_PODCASTS,
  ITUNES_URI
} from "@/common/consts";
import { responseItunesPodcastsMock } from "@/common/mocks";
import { getAllPodcastsAPI } from "./actions";

describe("getPodcasts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and parse iTunes podcasts data", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => responseItunesPodcastsMock
    });

    await getAllPodcastsAPI();

    expect(global.fetch).toHaveBeenCalledWith(
      `${ITUNES_URI}us/rss/toppodcasts/limit=${ITUNES_MAX_LIMIT_PODCASTS}/genre=${ITUNES_GENRE}/json`
    );
  });

  it("should failed fetch", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: () => undefined
    });

    await expect(getAllPodcastsAPI()).rejects.toThrow(
      "Failed to fetch podcasts"
    );
  });
});
