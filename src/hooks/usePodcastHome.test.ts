import { renderHook, waitFor } from "@testing-library/react";

import { getAllPodcastsAPI } from "@/app/actions";
import { parsedResponseItunesPodcastsMock } from "@/common/mocks";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePodcastHome } from "./usePodcastHome";

jest.mock("../app/actions", () => ({
  getAllPodcastsAPI: jest.fn()
}));

jest.mock("./useLocalStorage", () => ({
  useLocalStorage: jest.fn(() => ({
    saveToLocalStorage: jest.fn(),
    getValidLocalStorageData: jest.fn()
  }))
}));

describe("usePodcastHome", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch podcasts and set initial state", async () => {
    const { result } = renderHook(() => usePodcastHome());

    expect(result.current.podcasts).toEqual([]);
    expect(result.current.filteredPodcasts).toEqual([]);
  });

  it("should fetch podcasts from local storage if available", async () => {
    (useLocalStorage as jest.Mock).mockReturnValueOnce({
      getValidLocalStorageData: jest.fn(() => parsedResponseItunesPodcastsMock)
    });

    const { result } = renderHook(() => usePodcastHome());

    expect(getAllPodcastsAPI).not.toHaveBeenCalled();

    await waitFor(() => {
      expect(result.current.podcasts).toEqual(parsedResponseItunesPodcastsMock);
      expect(result.current.filteredPodcasts).toEqual(
        parsedResponseItunesPodcastsMock
      );
    });
  });

  it("should fetch podcasts from API", async () => {
    (getAllPodcastsAPI as jest.Mock).mockResolvedValueOnce(
      parsedResponseItunesPodcastsMock
    );

    const { result } = renderHook(() => usePodcastHome());

    expect(getAllPodcastsAPI).toHaveBeenCalled();

    await waitFor(() => {
      expect(result.current.podcasts).toEqual(parsedResponseItunesPodcastsMock);
      expect(result.current.filteredPodcasts).toEqual(
        parsedResponseItunesPodcastsMock
      );
    });
  });

  it("should fetch podcasts from API with error", async () => {
    (getAllPodcastsAPI as jest.Mock).mockRejectedValueOnce(new Error("Error"));

    const { result } = renderHook(() => usePodcastHome());

    await waitFor(() => {
      expect(result.current.podcasts).toEqual([]);
      expect(result.current.filteredPodcasts).toEqual([]);
    });
  });

  it("should not filter whith empty text", async () => {
    (getAllPodcastsAPI as jest.Mock).mockResolvedValueOnce(
      parsedResponseItunesPodcastsMock
    );

    const { result } = renderHook(() => usePodcastHome());

    await waitFor(() => {
      result.current.onFilterPodcasts({
        target: { value: "" }
      } as React.ChangeEvent<HTMLInputElement>);

      expect(result.current.filteredPodcasts).toEqual(
        parsedResponseItunesPodcastsMock
      );
    });
  });

  it("should filter podcasts with text", async () => {
    (getAllPodcastsAPI as jest.Mock).mockResolvedValueOnce(
      parsedResponseItunesPodcastsMock
    );

    const { result } = renderHook(() => usePodcastHome());

    await waitFor(() => {
      result.current.onFilterPodcasts({
        target: { value: "The Joe Budden Podcast" }
      } as React.ChangeEvent<HTMLInputElement>);

      expect(result.current.filteredPodcasts).toEqual([
        {
          title: "The Joe Budden Podcast",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
          author: "The Joe Budden Network",
          id: "1535809341",
          summary:
            "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
        }
      ]);
    });
  });
});
