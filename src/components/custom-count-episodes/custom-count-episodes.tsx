import { CustomCountEpisodesProps } from "../types";

export const CustomCountEpisodes = ({ count }: CustomCountEpisodesProps) => (
  <div className="w-full border-1 p-4 shadow-lg">
    <p className="text-xl font-semibold">Episodes: {count}</p>
  </div>
);
