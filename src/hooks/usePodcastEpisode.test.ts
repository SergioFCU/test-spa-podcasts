import { renderHook } from "@testing-library/react";

import { usePodcastEpisode } from "./usePodcastEpisode";

import { serializedPodcastDetailsMock } from "@/common/mocks";

jest.mock("../contexts/context-podcasts", () => ({
  useContextPodcasts: jest.fn(() => ({
    podcastDetails: serializedPodcastDetailsMock,
    setPodcastEpisode: jest.fn()
  }))
}));

const podcastIdMock = "1485250501";
const episodeIdMock = 1000652693448;

describe("usePodcastEpisode", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call usePodcastDetails with the correct arguments", () => {
    const { result } = renderHook(() =>
      usePodcastEpisode(podcastIdMock, episodeIdMock)
    );

    expect(result.current.podcastDetails).toEqual(serializedPodcastDetailsMock);
  });
});
