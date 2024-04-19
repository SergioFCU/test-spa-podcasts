"use client";

import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "react-use";

import { CustomLayoutProps } from "../types";

export const CustomLayout = ({
  podcastDetails,
  children
}: CustomLayoutProps) => {
  const { height } = useWindowSize();

  return (
    <div
      className="w-full flex flex-col h-full gap-16 xl:h-auto xl:flex-row"
      style={{ height: height - 10 }}
    >
      <section
        id="podcast-detail-left-sidebar"
        className="w-full xl:w-1/4 h-fit flex flex-col border-1 p-2 shadow-lg"
      >
        <div className="flex flex-col">
          <div className="w-full flex justify-center">
            <Link href={`/podcast/${podcastDetails.id}`}>
              <Image
                src={podcastDetails.image}
                alt="sidebar-image"
                width={150}
                height={150}
                className="rounded-lg transition-opacity ease-in-out hover:opacity-75 hover:cursor-pointer duration-300"
              />
            </Link>
          </div>
          <Link href={`/podcast/${podcastDetails.id}`}>
            <div className="w-full flex flex-col justify-center border-y-1 my-3 p-3 transition-opacity ease-in-out hover:opacity-50 hover:cursor-pointer duration-300">
              <p className="text-lg font-semibold">{podcastDetails.title}</p>
              <p className="text-lg italic">{`by ${podcastDetails.author}`}</p>
            </div>
          </Link>
          <div
            className="w-full max-h-80 flex flex-col p-3 overflow-auto"
            style={{ overflowWrap: "break-word" }}
          >
            <p className="text-lg font-semibold">Description:</p>
            <p className="text-lg italic">{podcastDetails.summary}</p>
          </div>
        </div>
      </section>
      <section
        id="podcast-detail-results"
        className="w-full xl:w-3/4 h-full flex flex-col gap-8"
      >
        {children}
      </section>
    </div>
  );
};
