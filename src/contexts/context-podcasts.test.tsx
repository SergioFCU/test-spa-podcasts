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
        setPodcastEpisode
      } = useContextPodcasts();

      expect(podcasts).toEqual([]);
      expect(podcastDetails).toEqual(valueDefaultPodcastDetails);
      expect(podcastEpisode).toEqual(valueDefaultResultsPodcastDetails);

      expect(setPodcasts).toBeInstanceOf(Function);
      expect(setPodcastDetails).toBeInstanceOf(Function);
      expect(setPodcastEpisode).toBeInstanceOf(Function);

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
