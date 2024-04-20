import { render, screen } from "@testing-library/react";
import { CustomHeaderPodcast } from "./custom-header-podcast";

describe("Test CustomHeaderPodcast", () => {
  it("renders the component correctly without loading spinner", () => {
    render(<CustomHeaderPodcast />);

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
  });

  it("renders the component correctly with loading spinner", () => {
    render(<CustomHeaderPodcast isShow={true} />);

    expect(screen.getByText("Podcaster")).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
