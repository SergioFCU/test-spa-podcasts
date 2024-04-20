import {
  SerializedItunesPodcastsProps,
  SerializedItunesPodcastDetailsProps
} from "@/common/types";

export interface LocalStoragePodcastProps {
  data: SerializedItunesPodcastsProps[] | SerializedItunesPodcastDetailsProps;
  timestamp: string;
}
