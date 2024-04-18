import { renderHook } from "@testing-library/react";

import { getPodcastDetails } from "../api/actions";

import { useContextPodcasts } from "@/contexts/context-podcasts";
import { useLocalStorage } from "./useLocalStorage";
import { usePodcastDetails } from "./usePodcastDetails";

import { LOCALSTORAGE_PODCAST_DETAILS_KEY } from "@/api/consts";

jest.mock("../api/actions", () => ({
  getPodcastDetails: jest.fn()
}));

jest.mock("../contexts/context-podcasts", () => ({
  useContextPodcasts: jest.fn(() => ({
    podcasts: [],
    podcastDetails: {},
    setPodcastDetails: jest.fn()
  }))
}));

jest.mock("./useLocalStorage", () => ({
  useLocalStorage: jest.fn(() => ({
    handleLoadFromLocalStorage: jest.fn(),
    handleSaveToLocalStorage: jest.fn(),
    isWithin24Hours: jest.fn()
  }))
}));

describe("usePodcastDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call getPodcastDetails and setPodcastDetails when podcastDetails.id is not equal to podcastId", async () => {
    const podcastId = "123";
    const response = { id: podcastId };
    const setPodcastDetails = jest.fn();
    const handleSaveToLocalStorage = jest.fn();
    const handleLoadFromLocalStorage = jest.fn();
    const isWithin24Hours = jest.fn(() => true);

    (getPodcastDetails as jest.Mock).mockResolvedValue(response);
    (useContextPodcasts as jest.Mock).mockReturnValue({
      podcasts: [],
      podcastDetails: {},
      setPodcastDetails
    });
    (useLocalStorage as jest.Mock).mockReturnValue({
      handleLoadFromLocalStorage,
      handleSaveToLocalStorage,
      isWithin24Hours
    });

    const { result } = renderHook(() => usePodcastDetails(podcastId));

    expect(result.current.podcastDetails).toEqual({});
    expect(result.current.setPodcastDetails).toBe(setPodcastDetails);

    expect(getPodcastDetails).toHaveBeenCalledWith(podcastId);
  });

  it("should call setPodcastDetails with data from local storage when podcastDetails.id is equal to podcastId and data is within 24 hours", async () => {
    const podcastId = "123";
    const podcastDetails = { id: podcastId };
    const dataLocalStorage = {
      timestamp: new Date(),
      data: podcastDetails
    };
    const setPodcastDetails = jest.fn();
    const handleLoadFromLocalStorage = jest.fn(() => dataLocalStorage);
    const isWithin24Hours = jest.fn(() => true);

    (useContextPodcasts as jest.Mock).mockReturnValue({
      podcasts: [],
      podcastDetails,
      setPodcastDetails
    });
    (useLocalStorage as jest.Mock).mockReturnValue({
      handleLoadFromLocalStorage,
      handleSaveToLocalStorage: jest.fn(),
      isWithin24Hours
    });

    const { result } = renderHook(() => usePodcastDetails(podcastId));

    expect(result.current.podcastDetails).toEqual(podcastDetails);
    expect(result.current.setPodcastDetails).toBe(setPodcastDetails);

    expect(handleLoadFromLocalStorage).toHaveBeenCalledWith(
      `${LOCALSTORAGE_PODCAST_DETAILS_KEY}-${podcastId}`
    );

    expect(getPodcastDetails).not.toHaveBeenCalled();
  });

  it("should call _getPodcastDetails when podcastDetails.id is equal to podcastId and data is not within 24 hours", async () => {
    const podcastId = "123";
    const podcastDetails = { id: podcastId };
    const dataLocalStorage = {
      timestamp: new Date(),
      data: podcastDetails
    };
    const setPodcastDetails = jest.fn();
    const handleLoadFromLocalStorage = jest.fn(() => dataLocalStorage);
    const isWithin24Hours = jest.fn(() => false);
    const _getPodcastDetails = jest.fn();

    (useContextPodcasts as jest.Mock).mockReturnValue({
      podcasts: [],
      podcastDetails,
      setPodcastDetails
    });
    (useLocalStorage as jest.Mock).mockReturnValue({
      handleLoadFromLocalStorage,
      handleSaveToLocalStorage: jest.fn(),
      isWithin24Hours
    });

    const { result } = renderHook(() => usePodcastDetails(podcastId));

    expect(result.current.podcastDetails).toEqual(podcastDetails);
    expect(result.current.setPodcastDetails).toBe(setPodcastDetails);

    expect(handleLoadFromLocalStorage).toHaveBeenCalledWith(
      `${LOCALSTORAGE_PODCAST_DETAILS_KEY}-${podcastId}`
    );
    expect(setPodcastDetails).not.toHaveBeenCalled();
    expect(getPodcastDetails).not.toHaveBeenCalled();
  });
});
