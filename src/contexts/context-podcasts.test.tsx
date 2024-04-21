import { act, render, screen, waitFor } from "@testing-library/react";

import {
  PodcastsProvider,
  useContextPodcasts,
  valueDefaultPodcastDetails,
  valueDefaultResultsPodcastDetails
} from "./context-podcasts";

import { parsedResponseItunesPodcastsMock } from "@/common/mocks";

describe("Test ContextPodcasts", () => {
  it("uses the context correctly", async () => {
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

      expect(setPodcasts).toBeInstanceOf(Function);
      expect(setPodcastDetails).toBeInstanceOf(Function);
      expect(setPodcastEpisode).toBeInstanceOf(Function);
      expect(setFilteredPodcasts).toBeInstanceOf(Function);

      act(() => {
        setPodcasts(parsedResponseItunesPodcastsMock);
        setPodcastDetails(valueDefaultPodcastDetails);
        setPodcastEpisode(valueDefaultResultsPodcastDetails);
        setFilteredPodcasts(parsedResponseItunesPodcastsMock);
      });

      waitFor(() => {
        expect(podcasts).toEqual(parsedResponseItunesPodcastsMock);
        expect(podcastDetails).toEqual(valueDefaultPodcastDetails);
        expect(podcastEpisode).toEqual(valueDefaultResultsPodcastDetails);
        expect(filteredPodcasts).toEqual(podcasts);
      });

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
