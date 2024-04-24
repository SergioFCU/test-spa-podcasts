import { renderHook, waitFor } from "@testing-library/react";

import { getPodcastDetailsAPI } from "@/app/podcast/[podcastId]/actions";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePodcastDetails } from "@/hooks/usePodcastDetails";

import {
  parsedResponseItunesPodcastsMock,
  responseItunesPodcastDetailsMock
} from "@/common/mocks";

jest.mock("../app/podcast/[podcastId]/actions", () => ({
  getPodcastDetailsAPI: jest.fn()
}));

jest.mock("./useLocalStorage", () => ({
  useLocalStorage: jest.fn(() => ({
    saveToLocalStorage: jest.fn(),
    getValidLocalStorageData: jest.fn()
  }))
}));

jest.mock("./usePodcastHome", () => ({
  usePodcastHome: () => ({
    podcasts: () => parsedResponseItunesPodcastsMock
  })
}));

describe("usePodcastDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch podcast details and set initial state", async () => {
    const { result } = renderHook(() => usePodcastDetails("1535809341"));

    expect(result.current.podcastDetails).toEqual({});
  });

  it("should fetch podcast detail from local storage if available", async () => {
    (useLocalStorage as jest.Mock).mockReturnValueOnce({
      getValidLocalStorageData: jest.fn(() => responseItunesPodcastDetailsMock)
    });

    const { result } = renderHook(() => usePodcastDetails("1535809341"));

    expect(getPodcastDetailsAPI).not.toHaveBeenCalled();

    await waitFor(() => {
      expect(result.current.podcastDetails).toEqual(
        responseItunesPodcastDetailsMock
      );
    });
  });

  it("should fetch podcast details from API", async () => {
    (getPodcastDetailsAPI as jest.Mock).mockResolvedValueOnce(
      responseItunesPodcastDetailsMock
    );

    renderHook(() => usePodcastDetails("1535809341"));

    await waitFor(() => {
      expect(getPodcastDetailsAPI).toHaveBeenCalled();
    });
  });

  it("should fetch podcast details from API with error", async () => {
    (getPodcastDetailsAPI as jest.Mock).mockRejectedValueOnce(
      new Error("Error")
    );

    const { result } = renderHook(() => usePodcastDetails("1535809341"));

    await waitFor(() => {
      expect(result.current.podcastDetails).toEqual({});
    });
  });
});
