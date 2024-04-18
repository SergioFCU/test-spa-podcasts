import { render, screen } from "@testing-library/react";

import { serializedPodcastDetailsMock } from "@/test/mocks";
import { CustomTableEpisodes } from "./custom-table-episodes";

describe("Test CustomTableEpisodes", () => {
  const mockProps = {
    thList: ["Title", "Date", "Duration"],
    podcastDetails: serializedPodcastDetailsMock,
    podcastId: "1485250501"
  };

  beforeEach(() => {
    render(<CustomTableEpisodes {...mockProps} />);
  });

  it("renders the component correctly", () => {
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getByText("Da Beatminerz")).toBeInTheDocument();
    expect(screen.getByText("04/17/2024")).toBeInTheDocument();
    expect(screen.getByText("105:18")).toBeInTheDocument();
  });
  screen.debug();
  it("renders episode links correctly", () => {
    const episodeLink1 = screen.getByRole("link", { name: "Da Beatminerz" });
    expect(episodeLink1).toHaveAttribute(
      "href",
      "/podcast/1485250501/episode/1000652693448"
    );
  });
});
