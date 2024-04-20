import { render, screen } from "@testing-library/react";

import { serializedPodcastDetailsMock } from "@/common/mocks";
import { CustomLayout } from "./custom-layout";

describe("CustomLayout", () => {
  it("renders the component correctly", () => {
    render(
      <CustomLayout podcastDetails={serializedPodcastDetailsMock}>
        <div>Child Component</div>
      </CustomLayout>
    );

    // Assert that the sidebar image is rendered
    const sidebarImage = screen.getByAltText("sidebar-image");
    expect(sidebarImage).toBeInTheDocument();

    // Assert that the podcast title and author are rendered
    const podcastTitle = screen.getByText("Questlove Supreme");
    const podcastAuthor = screen.getByText("by iHeartPodcasts");
    expect(podcastTitle).toBeInTheDocument();
    expect(podcastAuthor).toBeInTheDocument();

    // Assert that the podcast description is rendered
    const podcastDescription = screen.getByText(
      "Questlove Supreme is a fun, irreverent and educational weekly podcast that digs deep into the stories of musical legends and cultural icons in a way that only Questlove and Team Supreme can deliver. Led by Each episode is driven by conversation ranging from the guest’s origins (along with a few never-before-revealed secrets to their success) to their life passions and current projects. This is not your typical interview show. This is about legends and legends in the making bringing their legacy to life in their own words. Previous guests have included Usher, Michelle Obama, Chris Rock, Steve Miller, Maya Rudolph, Weird Al, Chaka Khan, Babyface and many more."
    );
    expect(podcastDescription).toBeInTheDocument();

    // Assert that the child component is rendered
    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });
});
