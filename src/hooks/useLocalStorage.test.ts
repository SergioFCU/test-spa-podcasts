import { renderHook } from "@testing-library/react";

import { parsedResponseItunesPodcastsMock } from "@/common/mocks";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and load data from local storage", () => {
    const { result } = renderHook(() => useLocalStorage());

    result.current.saveToLocalStorage(
      "testKey",
      parsedResponseItunesPodcastsMock
    );

    const loadedData = result.current.loadFromLocalStorage("testKey");
    expect(loadedData).toEqual({
      data: parsedResponseItunesPodcastsMock,
      timestamp: expect.any(String)
    });
  });

  it("should return false if data is not found in local storage", () => {
    const { result } = renderHook(() => useLocalStorage());

    const loadedData = result.current.loadFromLocalStorage("nonExistentKey");
    expect(loadedData).toBe(false);
  });

  it("should check if data is within 24 hours", () => {
    const { result } = renderHook(() => useLocalStorage());

    const currentDate = new Date().toISOString();
    const pastDate = new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString();

    expect(result.current.isWithin24Hours(currentDate)).toBe(true);
    expect(result.current.isWithin24Hours(pastDate)).toBe(false);
  });

  it("should call getValidLocalStorageData and return false if data is not fount in local storage", () => {
    const { result } = renderHook(() => useLocalStorage());

    const loadedData =
      result.current.getValidLocalStorageData("nonExistentKey");
    expect(loadedData).toBeUndefined;
  });
});
