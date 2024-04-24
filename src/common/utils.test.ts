import {
  parsedResponseItunesPodcastsMock,
  responseItunesPodcastDetailsMock,
  responseItunesPodcastsMock
} from "@/common/mocks";
import {
  formatDuration,
  formatDate,
  parseItunesPodcastDetailData,
  parseItunesPodcastsData
} from "./utils";

describe("formatDuration", () => {
  it("should format duration correctly", () => {
    const durationInMilliseconds = 1000;
    const formattedDuration = formatDuration(durationInMilliseconds);

    expect(formattedDuration).toBe("00:01");
  });
});

describe("formatDate", () => {
  it("should format date correctly", () => {
    const date = "2024-03-26T00:00:00Z";
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe("03/26/2024");
  });
});

describe("parseItunesPodcastsData", () => {
  it("should parse iTunes podcasts data correctly", () => {
    const parsedData = parseItunesPodcastsData(responseItunesPodcastsMock);
    expect(parsedData).toEqual(parsedResponseItunesPodcastsMock);
  });
});

describe("parseItunesPodcastDetailData", () => {
  it("should parse iTunes podcast detail data correctly", () => {
    const parsedData = parseItunesPodcastDetailData(
      responseItunesPodcastDetailsMock,
      "1535809341"
    );

    expect(parsedData).toEqual({
      id: "1535809341",
      coverImage: undefined,
      resultCount: 2,
      results: [
        {
          title: undefined,
          duration: "00:00",
          date: "Invalid DateTime",
          episodeUrl: "",
          description: "",
          trackId: 1535809341
        },
        {
          title: "Episode 718 | 'The PAWG Whisperer'",
          duration: "00:00",
          date: "Invalid DateTime",
          episodeUrl:
            "https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_718.mp3?dest-id=2422538",
          description: "description",
          trackId: 1000653044367
        }
      ]
    });
  });
});
