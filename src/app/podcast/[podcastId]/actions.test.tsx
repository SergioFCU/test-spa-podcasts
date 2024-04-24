import { ITUNES_MAX_LIMIT_DETAIL_PODCAST, ITUNES_URI } from "@/common/consts";
import { responseItunesPodcastDetailsMock } from "@/common/mocks";
import { getPodcastDetailsAPI } from "./actions";

const id = "1485250501";

describe("getPodcastDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch iTunes podcast details data", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => responseItunesPodcastDetailsMock
    });

    await getPodcastDetailsAPI(id);

    expect(global.fetch).toHaveBeenCalledWith(
      `${ITUNES_URI}lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${ITUNES_MAX_LIMIT_DETAIL_PODCAST}/json`
    );
  });

  it("should fetch and parse iTunes podcast details data", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: () => undefined
    });

    await expect(getPodcastDetailsAPI(id)).rejects.toThrow(
      "Error fetching podcast details"
    );
  });
});
