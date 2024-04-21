import { render, screen } from "@testing-library/react";

import { PodcastHome } from "./podcast-home";
import { parsedResponseItunesPodcastsMock } from "@/common/mocks";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

jest.mock("../../hooks/usePodcastHome.ts", () => ({
  usePodcastHome: () => ({
    filteredPodcasts: parsedResponseItunesPodcastsMock,
    podcastsCount: parsedResponseItunesPodcastsMock.length,
    onFilterPodcasts: jest.fn()
  })
}));

describe("Test PodcastHome", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<PodcastHome />);
  });

  it("renders the component correctly", () => {
    expect(screen.getByText("THE JOE BUDDEN PODCAST")).toBeInTheDocument();
    expect(
      screen.getByText("Author: The Joe Budden Network")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "THE JOE BUDDEN PODCAST" })
    ).toBeInTheDocument();

    expect(screen.getByText("THE MORNING SHIFT")).toBeInTheDocument();
    expect(screen.getByText("Author: YOUKNOW MEDIA")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "THE MORNING SHIFT" })
    ).toBeInTheDocument();

    expect(screen.getByText("NEW RORY & MAL")).toBeInTheDocument();
    expect(
      screen.getByText(`Author: Rory Farrell & Jamil "Mal" Clay & Studio71`)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "NEW RORY & MAL" })
    ).toBeInTheDocument();
  });

  it("renders the filter input correctly", () => {
    expect(
      screen.getByPlaceholderText("Filter podcasts...")
    ).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("links to the podcast page", () => {
    const podcastCard = screen.getAllByTestId(
      "custom-card-cover-podcast-button"
    );
    podcastCard.forEach((card) => {
      card.click();
    });

    expect(podcastCard).toHaveLength(3);
  });
});
