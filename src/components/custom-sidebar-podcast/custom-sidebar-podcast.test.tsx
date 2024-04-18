import { render, screen } from "@testing-library/react";
import { CustomSidebarPodcast } from "./custom-sidebar-podcast";

describe("Test CustomSidebarPodcast", () => {
  let mockProps = {
    image: "https://example.com/image.jpg",
    title: "Podcast Title",
    author: "Podcast Author",
    description: "Podcast Description"
  };

  it("renders the component correctly", () => {
    render(<CustomSidebarPodcast {...mockProps} />);

    expect(screen.getByAltText("sidebar-image")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg&w=384&q=75"
    );
    expect(screen.getByText("Podcast Title")).toBeInTheDocument();
    expect(screen.getByText("by Podcast Author")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Podcast Description")).toBeInTheDocument();
  });
});
