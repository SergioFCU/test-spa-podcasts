import { renderHook } from "@testing-library/react";

import { useContextPodcasts } from "@/contexts/context-podcasts";
import { usePodcastHome } from "./usePodcastHome";

import { parsedResponseItunesPodcastsMock } from "@/common/mocks";

jest.mock("../app/actions");

jest.mock("./useLocalStorage", () => ({
  useLocalStorage: jest.fn(() => ({
    handleLoadFromLocalStorage: jest.fn(),
    handleSaveToLocalStorage: jest.fn(),
    isWithin24Hours: jest.fn()
  }))
}));

jest.mock("../contexts/context-podcasts", () => ({
  useContextPodcasts: jest.fn()
}));

describe("usePodcastHome", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with empty podcasts array", () => {
    (useContextPodcasts as jest.Mock).mockReturnValue({
      podcasts: [],
      setPodcasts: jest.fn(),
      filteredPodcasts: [],
      setFilteredPodcasts: jest.fn()
    });

    const { result } = renderHook(() => usePodcastHome());

    expect(result.current.podcastsCount).toEqual(0);
    expect(result.current.filteredPodcasts).toEqual([]);
  });

  it("should initialize with podcasts array", () => {
    (useContextPodcasts as jest.Mock).mockReturnValue({
      podcasts: parsedResponseItunesPodcastsMock,
      setPodcasts: jest.fn(),
      filteredPodcasts: parsedResponseItunesPodcastsMock,
      setFilteredPodcasts: jest.fn()
    });

    const { result } = renderHook(() => usePodcastHome());

    expect(result.current.podcastsCount).toEqual(3);
    expect(result.current.filteredPodcasts).toEqual(
      parsedResponseItunesPodcastsMock
    );
  });

  it("should filter podcasts with text", () => {
    const setFilteredPodcasts = jest.fn();
    (useContextPodcasts as jest.Mock).mockReturnValue({
      podcasts: parsedResponseItunesPodcastsMock,
      setPodcasts: jest.fn(),
      filteredPodcasts: parsedResponseItunesPodcastsMock,
      setFilteredPodcasts
    });

    const { result } = renderHook(() => usePodcastHome());

    const event = { target: { value: "THE JOE BUDDEN PODCAST" } };
    result.current.onFilterPodcasts(
      event as React.ChangeEvent<HTMLInputElement>
    );

    expect(setFilteredPodcasts).toHaveBeenCalledWith([
      parsedResponseItunesPodcastsMock[0]
    ]);
  });

  it("should filter podcasts with text", () => {
    const setFilteredPodcasts = jest.fn();
    (useContextPodcasts as jest.Mock).mockReturnValue({
      podcasts: parsedResponseItunesPodcastsMock,
      setPodcasts: jest.fn(),
      filteredPodcasts: parsedResponseItunesPodcastsMock,
      setFilteredPodcasts
    });

    const { result } = renderHook(() => usePodcastHome());

    const event = { target: { value: "" } };
    result.current.onFilterPodcasts(
      event as React.ChangeEvent<HTMLInputElement>
    );

    expect(setFilteredPodcasts).toHaveBeenCalledWith(
      parsedResponseItunesPodcastsMock
    );
  });
});
