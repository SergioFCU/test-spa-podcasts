import { render, screen } from "@testing-library/react";
import { CustomCountEpisodes } from "./custom-count-episodes";

describe("CustomCountEpisodes", () => {
  it("renders the correct count", () => {
    const count = 10;
    render(<CustomCountEpisodes count={count} />);

    const countElement = screen.getByText(`Episodes: ${count}`);
    expect(countElement).toBeInTheDocument();
  });
});
