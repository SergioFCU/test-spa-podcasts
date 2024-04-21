import { renderHook } from "@testing-library/react";

import { usePodcastHome } from "./usePodcastHome";

jest.mock("../app/actions");

jest.mock("../contexts/context-podcasts", () => ({
  useContextPodcasts: () => ({
    podcasts: [],
    setPodcasts: jest.fn()
  })
}));

describe("usePodcastHome", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with empty podcasts array", () => {
    const { result } = renderHook(() => usePodcastHome());

    expect(result.current.podcasts).toEqual([]);
  });
});
