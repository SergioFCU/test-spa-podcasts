import { render, screen } from "@testing-library/react";

import { PodcastDetail } from "./podcast-detail";

import { serializedPodcastDetailsMock } from "@/common/mocks";

jest.mock("../../hooks/usePodcastDetails", () => ({
  usePodcastDetails: () => ({
    podcastDetails: serializedPodcastDetailsMock
  })
}));

describe("PodcastDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component correctly when podcastDetails is available", () => {
    render(<PodcastDetail podcastId="1485250501" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Duration")).toBeInTheDocument();
  });
});
