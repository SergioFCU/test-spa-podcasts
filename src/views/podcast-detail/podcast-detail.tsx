"use client";

import Image from "next/image";

import { usePodcastDetails } from "@/hooks/usePodcastDetails";

import { PodcastDetailProps } from "../types";

export const PodcastDetail = ({ podcastId }: PodcastDetailProps) => {
  const { podcastDetails } = usePodcastDetails(podcastId);

  return podcastDetails.id === podcastId ? (
    <div className="w-full h-full flex flex-row gap-16">
      <section
        id="podcast-detail-left-sidebar"
        className="w-1/4 h-full flex flex-col border-1 p-2 shadow-lg"
      >
        <div className="w-full h-full flex justify-center">
          <Image
            src={podcastDetails.coverImage ?? ""}
            alt="Podcast cover"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>
        <div className="w-full h-full flex flex-col border-y-1 my-3 p-3">
          <p className="text-lg font-semibold">{podcastDetails.title}</p>
          <p className="text-lg italic">{`by ${podcastDetails.author}`}</p>
        </div>
        <div
          className="w-full h-full flex flex-col p-3"
          style={{ overflowWrap: "break-word" }}
        >
          <p className="text-lg font-semibold">Description:</p>
          <p className="text-lg italic">{podcastDetails.summary}</p>
        </div>
      </section>
      <section
        id="podcast-detail-results"
        className="w-3/4 h-full flex flex-col gap-8"
      >
        <div
          id="podcast-detail-count-episodes"
          className="border-1 p-2 shadow-lg"
        >
          <p className="text-xl font-semibold">
            Episodes: {podcastDetails.resultCount}
          </p>
        </div>
        <div
          id="podcast-detail-table-episodes"
          className="w-full h-full flex flex-col border-1 p-2 shadow-lg"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-medium"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-medium"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-medium"
                >
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {podcastDetails.results.map((item, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">{item.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">{item.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {item.duration}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ) : (
    <div className="w-full h-full flex justify-end">
      <p>Loading...</p>
    </div>
  );
};
