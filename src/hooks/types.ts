import {
  SerializedItunesPodcastsProps,
  SerializedItunesPodcastDetailsProps
} from "@/api/types";

export interface LocalStoragePodcastProps {
  data: SerializedItunesPodcastsProps[] | SerializedItunesPodcastDetailsProps;
  timestamp: string;
}
