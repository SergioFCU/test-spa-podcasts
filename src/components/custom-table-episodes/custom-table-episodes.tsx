import Link from "next/link";
import { CustomTableEpisodesProps } from "../types";

export const CustomTableEpisodes = ({
  thList,
  podcastDetails,
  podcastId
}: CustomTableEpisodesProps) => (
  <div className="w-full h-full flex flex-col border-1 py-2 shadow-left-right-bottom overflow-auto">
    <table className="divide-y divide-gray-200">
      <thead>
        <tr>
          {thList.map((item, index) => (
            <th
              key={index as number}
              scope="col"
              className="px-6 py-3 text-left text-lg font-medium"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {podcastDetails.results.map((item, index) => (
          <tr key={index as number} className="even:bg-gray-100">
            <td className="px-6 py-4 w-full">
              <Link
                href={`/podcast/${podcastId}/episode/${item.trackId}`}
                className="text-base text-gray-900 hover:underline"
              >
                {item.title}
              </Link>
            </td>
            <td className="px-6 py-4">
              <div className="text-base text-gray-900">{item.date}</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-base text-gray-900">{item.duration}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
