import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { parsedResponseItunesPodcastsMock } from "@/test/mocks";
import { usePodcastHome } from "./usePodcastHome";

jest.mock("../api/actions.ts");

describe("usePodcastHome", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with empty podcasts array", () => {
    const { result } = renderHook(() => usePodcastHome());

    expect(result.current.podcasts).toEqual([]);
  });

  it("should update podcasts when handleChangePodcasts is called", () => {
    const { result } = renderHook(() => usePodcastHome());

    act(() => {
      result.current.handleChangePodcasts(parsedResponseItunesPodcastsMock);
    });

    expect(result.current.podcasts).toEqual(parsedResponseItunesPodcastsMock);
  });
});
