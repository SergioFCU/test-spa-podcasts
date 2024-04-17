import { SerializedItunesPodcastsProps } from "@/api/types";
import { LocalStoragePodcastProps } from "./types";

export const useLocalStorage = () => {
  const handleCheckLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }

    return false;
  };

  const handleLoadFromLocalStorage = (key: string) => {
    const checkedLocalStorage = handleCheckLocalStorage(key);
    if (!checkedLocalStorage) {
      return false;
    }

    const dataLocalStorage: LocalStoragePodcastProps =
      JSON.parse(checkedLocalStorage);

    return dataLocalStorage;
  };

  const handleSaveToLocalStorage = (
    key: string,
    value: SerializedItunesPodcastsProps[]
  ) => {
    if (typeof window !== "undefined") {
      const dataLocalStorage: LocalStoragePodcastProps = {
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

  return {
    handleCheckLocalStorage,
    handleLoadFromLocalStorage,
    handleSaveToLocalStorage,
    isWithin24Hours
  };
};
