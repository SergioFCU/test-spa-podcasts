import { render, screen } from "@testing-library/react";

import {
  PodcastsProvider,
  useContextPodcasts,
  valueDefaultPodcastDetails
} from "./context-podcasts";

describe("Test ContextPodcasts", () => {
  it("uses the context correctly", () => {
    const TestComponent = () => {
      const { podcasts, setPodcasts, podcastDetails, setPodcastDetails } =
        useContextPodcasts();

      expect(podcasts).toEqual([]);
      expect(podcastDetails).toEqual(valueDefaultPodcastDetails);

      expect(setPodcasts).toBeInstanceOf(Function);
      expect(setPodcastDetails).toBeInstanceOf(Function);

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
