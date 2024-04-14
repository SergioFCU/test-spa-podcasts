import Image from "next/image";
import { CustomCardCoverPodcastProps } from "../types";

export const CustomCardCoverPodcast = ({
  image,
  title,
  author,
  onClick
}: CustomCardCoverPodcastProps) => {
  const _title = title.toUpperCase();
  const _author = `Author: ${author}`;

  return (
    <div className="w-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer duration-300">
      <button
        className="w-full flex flex-col justify-center items-center"
        onClick={onClick}
      >
        <Image
          src={image}
          alt={_title}
          width={120}
          height={120}
          objectFit="fit"
          className="relative z-10 rounded-full border-1 mb-6"
        />
        <div className="w-full border-1 -translate-y-1/2 text-center shadow-xl">
          <div className="w-full flex flex-col justify-end items-center gap-2 mt-12 p-2">
            <p
              className="w-full text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-base hover:cursor-help"
              title={_title}
            >
              {_title}
            </p>
            <p
              className="w-full text-ellipsis overflow-hidden whitespace-nowrap font-normal text-sm hover:cursor-help text-gray-500"
              title={_author}
            >
              {_author}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};
