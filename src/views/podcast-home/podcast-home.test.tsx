import { render, screen } from "@testing-library/react";

import { PodcastHome } from "./podcast-home";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));

jest.mock("../../hooks/usePodcastHome.ts", () => ({
  usePodcastHome: jest.fn().mockReturnValue({
    podcasts: [
      {
        id: "1",
        title: "Podcast 1",
        author: "Author 1",
        image: "https://example.com/image1.jpg"
      },
      {
        id: "2",
        title: "Podcast 2",
        author: "Author 2",
        image: "https://example.com/image2.jpg"
      }
    ]
  })
}));

describe("Test PodcastHome", () => {
  beforeEach(() => {
    render(<PodcastHome />);
  });

  it("renders the component correctly", () => {
    expect(screen.getByText("PODCAST 1")).toBeInTheDocument();
    expect(screen.getByText("Author: Author 1")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "PODCAST 1" })).toBeInTheDocument();

    expect(screen.getByText("PODCAST 2")).toBeInTheDocument();
    expect(screen.getByText("Author: Author 2")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "PODCAST 2" })).toBeInTheDocument();
  });
});
