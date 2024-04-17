"use client";

import { useEffect } from "react";
import { PodcastDetailProps } from "../types";
import { getDetailPodcast } from "@/api/actions";

export const PodcastDetail = ({ podcastId }: PodcastDetailProps) => {
  const _getDetailPodcast = async () => {
    try {
      const response = await getDetailPodcast(podcastId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    _getDetailPodcast();
  }, [_getDetailPodcast]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">Podcast Detail: {podcastId}</h1>
    </div>
  );
};
