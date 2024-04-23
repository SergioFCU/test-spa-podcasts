import { act, renderHook } from "@testing-library/react";

import { getPodcasts } from "@/app/actions";
import { parsedResponseItunesPodcastsMock } from "@/common/mocks";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { usePodcastHome } from "./usePodcastHome";

jest.mock("../app/actions", () => ({
  getPodcasts: jest.fn()
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

    expect(result.current.podcastsCount).toBe(0);
    expect(result.current.filteredPodcasts).toEqual([]);

    expect(getPodcasts).toHaveBeenCalledTimes(1);
    expect(result.current.podcastsCount).toBe(0);
    expect(result.current.filteredPodcasts).toEqual([]);
  });

  it("should fetch podcasts from local storage if available", async () => {
    (useLocalStorage as jest.Mock).mockReturnValueOnce({
      getValidLocalStorageData: jest.fn(() => parsedResponseItunesPodcastsMock)
    });

    const { result } = renderHook(() => usePodcastHome());

    expect(getPodcasts).not.toHaveBeenCalled();
    expect(result.current.podcastsCount).toBe(3);
    expect(result.current.filteredPodcasts).toEqual(
      parsedResponseItunesPodcastsMock
    );
  });

  it("should not filter whith empty text", () => {
    (useLocalStorage as jest.Mock).mockReturnValueOnce({
      getValidLocalStorageData: jest.fn(() => parsedResponseItunesPodcastsMock)
    });

    const { result } = renderHook(() => usePodcastHome());

    act(() => {
      result.current.onFilterPodcasts({
        target: { value: "" }
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.filteredPodcasts).toEqual(
      parsedResponseItunesPodcastsMock
    );
  });

  it("should filter podcasts with text", () => {
    (useLocalStorage as jest.Mock).mockReturnValueOnce({
      getValidLocalStorageData: jest.fn(() => parsedResponseItunesPodcastsMock)
    });

    const { result } = renderHook(() => usePodcastHome());

    act(() => {
      result.current.onFilterPodcasts({
        target: { value: "The Joe Budden Podcast" }
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.filteredPodcasts).toEqual([
      {
        title: "The Joe Budden Podcast",
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
        author: "The Joe Budden Network",
        id: "1535809341"
      }
    ]);
  });
});
