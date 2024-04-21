import { render, screen, fireEvent } from "@testing-library/react";

import { CustomCardCoverPodcast } from "./custom-card-cover-podcast";

describe("CustomCardCoverPodcast", () => {
  const mockProps = {
    id: "1",
    image: "https://example.com/image.jpg",
    title: "Podcast Title",
    author: "Sergio FC",
    onClick: jest.fn()
  };

  it("renders the component correctly", () => {
    render(<CustomCardCoverPodcast {...mockProps} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "PODCAST TITLE" })
    ).toBeInTheDocument();

    expect(screen.getByText("PODCAST TITLE")).toBeInTheDocument();
    expect(screen.getByText("Author: Sergio FC")).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", () => {
    render(<CustomCardCoverPodcast {...mockProps} />);
    fireEvent.click(screen.getByRole("button"));

    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
