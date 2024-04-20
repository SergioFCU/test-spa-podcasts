import { render, screen } from "@testing-library/react";

import { serializedPodcastDetailsMock } from "@/test/mocks";
import { PodcastEpisode } from "./podcast-episode";

const epidoseMock = serializedPodcastDetailsMock.results[0];

jest.mock("react-markdown", () => ({
  __esModule: true,
  default: ({ children }: { children: string }) => <div>{children}</div>
}));

jest.mock("remark-gfm", () => () => {});

jest.mock("../../hooks/usePodcastEpisode", () => ({
  usePodcastEpisode: () => ({
    podcastDetails: serializedPodcastDetailsMock,
    podcastEpisode: epidoseMock
  })
}));

describe("Test PodcastEpisode", () => {
  it("renders the component correctly", () => {
    render(<PodcastEpisode podcastId="1485250501" episodeId={1000652693448} />);
    expect(screen.getByText("Da Beatminerz")).toBeInTheDocument();
  });
});
