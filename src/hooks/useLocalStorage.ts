import { LocalStoragePodcastProps } from "./types";

export const useLocalStorage = () => {
  const checkLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }

    return false;
  };

  const loadFromLocalStorage = (key: string) => {
    const checkedLocalStorage = checkLocalStorage(key);
    if (!checkedLocalStorage) {
      return false;
    }

    const dataLocalStorage = JSON.parse(checkedLocalStorage);

    return dataLocalStorage as LocalStoragePodcastProps;
  };

  const saveToLocalStorage = (
    key: string,
    value: LocalStoragePodcastProps["data"]
  ) => {
    if (typeof window !== "undefined") {
      const dataLocalStorage = {
        data: value,
        timestamp: new Date().toISOString()
      };

      return localStorage.setItem(key, JSON.stringify(dataLocalStorage));
    }
  };

  const isWithin24Hours = (dateToCheck: string) => {
    const currentDate = Date.now();
    const dateToCompare = new Date(dateToCheck).getTime();
    const differenceInMilliseconds = currentDate - dateToCompare;
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

    return differenceInHours < 24;
  };

  const getValidLocalStorageData = (key: string) => {
    const dataLocalStorage = loadFromLocalStorage(key);

    return dataLocalStorage && isWithin24Hours(dataLocalStorage.timestamp)
      ? (dataLocalStorage.data as LocalStoragePodcastProps["data"])
      : undefined;
  };

  return {
    checkLocalStorage,
    loadFromLocalStorage,
    saveToLocalStorage,
    isWithin24Hours,
    getValidLocalStorageData
  };
};
