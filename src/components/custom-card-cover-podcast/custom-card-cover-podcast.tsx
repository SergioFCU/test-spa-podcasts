import { ItunesPodcastProps } from "@/api/types";
import Image from "next/image";

export const CustomCardCoverPodcast = ({
  image,
  title,
  author
}: ItunesPodcastProps) => (
  <div className="w-full h-full flex flex-col justify-center items-center">
    <Image
      src={image}
      alt={title}
      width={120}
      height={120}
      objectFit="fit"
      className="relative z-10 rounded-full border-1 mb-6"
    />
    <div className="w-full h-full flex flex-col border-1 -translate-y-1/2 text-center shadow-xl">
      <div className="w-full h-full flex flex-col justify-end items-center gap-2 mt-12 p-2">
        <p className="font-semibold text-base">{title.toUpperCase()}</p>
        <p className="font-normal text-sm">{`Author: ${author}`}</p>
      </div>
    </div>
  </div>
);
