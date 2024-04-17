import { Url } from "url";

interface IndexedPodcastsProps {
  href?: string;
  rel?: string;
  type?: string;
  label?: string;
  height?: string;
  term?: string;
  amount?: string;
  currency?: string;
  scheme?: string;
  "im:id"?: string;
}

interface AttributeLinkProps {
  attributes: Pick<IndexedPodcastsProps, "href" | "rel" | "type">;
}

export interface ResponseItunesPodcastsProps {
  feed: {
    author: {
      name: Pick<IndexedPodcastsProps, "label">;
      uri: Pick<IndexedPodcastsProps, "label">;
    };

    icon: Pick<IndexedPodcastsProps, "label">;
    link: AttributeLinkProps[];
    rights: Pick<IndexedPodcastsProps, "label">;
    title: Pick<IndexedPodcastsProps, "label">;
    updated: Pick<IndexedPodcastsProps, "label">;
    entry: {
      "im:name": Pick<IndexedPodcastsProps, "label">;
      "im:image": {
        label: Pick<IndexedPodcastsProps, "label">;
        attributes: Pick<IndexedPodcastsProps, "height">;
      }[];
      summary: Pick<IndexedPodcastsProps, "label">;
      "im:price": {
        label: Pick<IndexedPodcastsProps, "label">;
        attributes: Pick<IndexedPodcastsProps, "amount" | "currency">;
      };
      "im:contentType": {
        attributes: Pick<IndexedPodcastsProps, "term" | "label">;
      };
      rights: Pick<IndexedPodcastsProps, "label">;
      title: Pick<IndexedPodcastsProps, "label">;
      link: AttributeLinkProps;
      id: {
        label: Pick<IndexedPodcastsProps, "label">;
        attributes: Pick<IndexedPodcastsProps, "im:id">;
      };
      "im:artist": {
        label: Pick<IndexedPodcastsProps, "label">;
        attributes: Pick<IndexedPodcastsProps, "href" | "label">;
      };
      category: {
        attributes: Pick<
          IndexedPodcastsProps,
          "im:id" | "term" | "scheme" | "label"
        >;
      };
      "im:releaseDate": {
        label: Pick<IndexedPodcastsProps, "label">;
        attributes: Pick<IndexedPodcastsProps, "label">;
      };
    }[];
  };
}

export interface SerializedItunesPodcastsProps {
  title: string;
  image: string;
  author: string;
  id: string;
  summary?: string;
}

interface IndexedDetailPodcastProps {
  collectionId: number;
  trackId: number;
  collectionName: string;
  trackName: string;
  artistViewUrl: Url;
  collectionViewUrl: Url;
  feedUrl: Url;
  trackViewUrl: Url;
  artworkUrl60: Url;
  releaseDate: string;
  trackTimeMillis: number;
  country: string;
  contentAdvisoryRating: string;
  artworkUrl600: Url;
  genres: string[];
}

interface ResponseItunesDetailPodcastWrapperTypeProps
  extends IndexedDetailPodcastProps {
  wrapperType: string;
  kind: string;
  artistId: number;
  artistName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artworkUrl30: Url;
  artworkUrl100: Url;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  currency: string;
  primaryGenreName: string;
  genreIds: string[];
}

interface ResponseItunesDetailPodcastCollectionViewUrlProps
  extends IndexedDetailPodcastProps {
  previewUrl: Url;
  episodeUrl: Url;
  shortDescription: string;
  artistIds: number[];
  closedCaptioning: string;
  artworkUrl160: Url;
  episodeFileExtension: string;
  episodeContentType: string;
  episodeGuid: string;
  description: string;
}

export interface ResponseItunesDetailPodcastProps {
  resultCount: number;
  results: (
    | ResponseItunesDetailPodcastWrapperTypeProps
    | ResponseItunesDetailPodcastCollectionViewUrlProps
  )[];
}

export interface SerializedItunesDetailPodcastProps {
  coverImage?: Url;
  resultCount: number;
  results: {
    title: string;
    duration: string;
    date: string;
    episodeUrl: Url;
    description: string;
  }[];
}
