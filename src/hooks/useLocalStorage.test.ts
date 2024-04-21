import { renderHook } from "@testing-library/react";

import { parsedResponseItunesPodcastsMock } from "@/common/mocks";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and load data from local storage", () => {
    const { result } = renderHook(() => useLocalStorage());

    result.current.handleSaveToLocalStorage(
      "testKey",
      parsedResponseItunesPodcastsMock
    );

    const loadedData = result.current.handleLoadFromLocalStorage("testKey");
    expect(loadedData).toEqual({
      data: parsedResponseItunesPodcastsMock,
      timestamp: expect.any(String)
    });
  });

  it("should return false if data is not found in local storage", () => {
    const { result } = renderHook(() => useLocalStorage());

    const loadedData =
      result.current.handleLoadFromLocalStorage("nonExistentKey");
    expect(loadedData).toBe(false);
  });

  it("should check if data is within 24 hours", () => {
    const { result } = renderHook(() => useLocalStorage());

    const currentDate = new Date().toISOString();
    const pastDate = new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString();

    expect(result.current.isWithin24Hours(currentDate)).toBe(true);
    expect(result.current.isWithin24Hours(pastDate)).toBe(false);
  });
});
