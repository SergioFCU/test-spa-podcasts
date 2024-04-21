import { render, screen } from "@testing-library/react";

import {
  PodcastsProvider,
  useContextPodcasts,
  valueDefaultPodcastDetails,
  valueDefaultResultsPodcastDetails
} from "./context-podcasts";

describe("Test ContextPodcasts", () => {
  it("uses the context correctly", () => {
    const TestComponent = () => {
      const {
        podcasts,
        setPodcasts,
        podcastDetails,
        setPodcastDetails,
        podcastEpisode,
        setPodcastEpisode,
        filteredPodcasts,
        setFilteredPodcasts
      } = useContextPodcasts();

      expect(podcasts).toEqual([]);
      expect(podcastDetails).toEqual(valueDefaultPodcastDetails);
      expect(podcastEpisode).toEqual(valueDefaultResultsPodcastDetails);
      expect(filteredPodcasts).toEqual(podcasts);

      expect(setPodcasts).toBeInstanceOf(Function);
      expect(setPodcastDetails).toBeInstanceOf(Function);
      expect(setPodcastEpisode).toBeInstanceOf(Function);
      expect(setFilteredPodcasts).toBeInstanceOf(Function);

      return null;
    };

    render(
      <PodcastsProvider>
        <TestComponent />
      </PodcastsProvider>
    );

    expect(screen).toBeTruthy();
  });
});
