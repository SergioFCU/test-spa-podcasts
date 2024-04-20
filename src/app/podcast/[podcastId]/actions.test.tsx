import { ITUNES_MAX_LIMIT_DETAIL_PODCAST, ITUNES_URI } from "@/common/consts";
import { responseItunesPodcastDetailsMock } from "@/common/mocks";
import { getPodcastDetails } from "./actions";

const mockResponsePodcastDetailsMock = {
  json: jest.fn().mockResolvedValue(responseItunesPodcastDetailsMock)
};

describe("getPodcastDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
