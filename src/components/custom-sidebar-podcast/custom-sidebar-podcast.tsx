import Image from "next/image";

import { CustomSidebarPodcastProps } from "../types";

export const CustomSidebarPodcast = ({
  image = "",
  title,
  author,
  description
}: CustomSidebarPodcastProps) => (
  <div className="flex flex-col">
    <div className="w-full flex justify-center">
      <Image
        src={image}
        alt="sidebar-image"
        width={150}
        height={150}
        className="rounded-lg"
      />
    </div>
    <div className="w-full flex flex-col justify-center border-y-1 my-3 p-3">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-lg italic">{`by ${author}`}</p>
    </div>
    <div
      className="w-full max-h-80 flex flex-col p-3 overflow-auto"
      style={{ overflowWrap: "break-word" }}
    >
      <p className="text-lg font-semibold">Description:</p>
      <p className="text-lg italic">{description}</p>
    </div>
  </div>
);
