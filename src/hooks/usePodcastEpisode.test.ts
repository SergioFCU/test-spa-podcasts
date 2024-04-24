import { renderHook, waitFor } from "@testing-library/react";

import { usePodcastEpisode } from "./usePodcastEpisode";

import { serializedPodcastDetailsMock } from "@/common/mocks";

const podcastIdMock = "1485250501";
const episodeIdMock = 1000652693448;

jest.mock("./usePodcastDetails", () => ({
  usePodcastDetails: jest.fn(() => ({
    podcastDetails: serializedPodcastDetailsMock
  }))
}));

describe("usePodcastEpisode", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call usePodcastDetails with the correct arguments", async () => {
    const { result } = renderHook(() =>
      usePodcastEpisode(podcastIdMock, episodeIdMock)
    );

    expect(result.current.podcastDetails).toEqual(serializedPodcastDetailsMock);

    await waitFor(() => {
      expect(result.current.podcastEpisode).toEqual(
        serializedPodcastDetailsMock.results[0]
      );
    });
  });
});
