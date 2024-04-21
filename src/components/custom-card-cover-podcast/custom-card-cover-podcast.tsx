import Image from "next/image";
import { CustomCardCoverPodcastProps } from "../types";

export const CustomCardCoverPodcast = ({
  image = "",
  title,
  author,
  onClick
}: CustomCardCoverPodcastProps) => {
  const _title = title?.toUpperCase();
  const _author = `Author: ${author}`;

  return (
    <div className="w-full h-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer duration-300">
      <button
        data-testid="custom-card-cover-podcast-button"
        className="w-full h-full flex flex-col justify-center items-center"
        onClick={onClick}
      >
        <Image
          priority
          src={image}
          alt={_title}
          width={150}
          height={150}
          className="relative z-10 rounded-full border-1 object-cover"
        />
        <div className="w-full h-full -translate-y-1/2 border-1 text-center shadow-left-right-bottom">
          <div className="w-full h-full -translate-y-1/2 flex flex-col justify-end items-center gap-2 mt-16 py-2 px-4">
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
