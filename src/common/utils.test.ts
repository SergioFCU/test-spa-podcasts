import {
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

    expect(parsedData).toEqual([
      {
        title: "The Joe Budden Podcast",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
        author: "The Joe Budden Network",
        id: "1535809341",
        summary:
          "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
      },
      {
        title: "THE MORNING SHIFT",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/170x170bb.png",
        author: "YOUKNOW MEDIA",
        id: "1676884110",
        summary:
          "Join Brook, Jordan & Matua Marc every week day from 6AM for a yarn all things culture, entertainment, sports, funny and thought provoking.\n\nIf you're keen to sponsor the show or any enquiries email info@themorningshift.com\n\nPowered by YOUKNOW MEDIA"
      },
      {
        title: "New Rory & MAL",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/170x170bb.png",
        author: 'Rory Farrell & Jamil "Mal" Clay & Studio71',
        id: "1572182022",
        summary:
          "New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal\n\nFor advertising opportunities please email PodcastPartnerships@Studio71us.com   \nWe want to make the podcast even better, help us learn how we can: https://bit.ly/2EcYbu4  \nPrivacy Policy: https://www.studio71.com/terms-and-conditions-use/#Privacy%20Policy"
      }
    ]);
  });
});

describe("parseItunesPodcastDetailData", () => {
  it("should parse iTunes podcast detail data correctly", () => {
    const id = "123456";

    const parsedData = parseItunesPodcastDetailData(
      responseItunesPodcastDetailsMock,
      id
    );

    expect(parsedData).toEqual({
      id: "123456",
      coverImage: undefined,
      resultCount: 1,
      results: [
        {
          title: "MF DOOM: A Hero in a Villain's Mask",
          duration: "42:24",
          date: "03/26/2024",
          episodeUrl:
            "https://traffic.megaphone.fm/GLT5992162491.mp3?updated=1711377280",
          description:
            "Season 12 of Dissect celebrates the life and legacy of MF DOOM through a line by line, beat by beat analysis of his art. Most of the season will be spent dissecting DOOM and Madlib’s classic album Madvillainy, but we’ll also be covering his debut Operation Doomsday, MM..FOOD, and Born Like This. \nOn today’s episode, we explore the legend of DOOM’s origin story, including Daniel Dumile’s childhood in New York, the rise and tragic fall of his rap group KMD, and his reemergence as MF DOOM in the late 90s.\nHost, Writer, EP: Cole Cuchna\nWriter/Researcher: Camden Ostrander\nOriginal Score/Audio: Kevin Pooler\nAdditional Production Supervision: Justin Sayles\nTheme Music: Birocratic\nLearn more about your ad choices. Visit podcastchoices.com/adchoices",
          trackId: 1000650475188
        }
      ]
    });
  });
});
