interface IndexedProps {
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
  attributes: Pick<IndexedProps, "href" | "rel" | "type">;
}

export interface ResponseItunesPodcastsProps {
  feed: {
    author: {
      name: Pick<IndexedProps, "label">;
      uri: Pick<IndexedProps, "label">;
    };

    icon: Pick<IndexedProps, "label">;
    link: AttributeLinkProps[];
    rights: Pick<IndexedProps, "label">;
    title: Pick<IndexedProps, "label">;
    updated: Pick<IndexedProps, "label">;
    entry: {
      "im:name": Pick<IndexedProps, "label">;
      "im:image": {
        label: Pick<IndexedProps, "label">;
        attributes: Pick<IndexedProps, "height">;
      }[];
      summary: Pick<IndexedProps, "label">;
      "im:price": {
        label: Pick<IndexedProps, "label">;
        attributes: Pick<IndexedProps, "amount" | "currency">;
      };
      "im:contentType": {
        attributes: Pick<IndexedProps, "term" | "label">;
      };
      rights: Pick<IndexedProps, "label">;
      title: Pick<IndexedProps, "label">;
      link: AttributeLinkProps[];
      id: {
        label: Pick<IndexedProps, "label">;
        attributes: Pick<IndexedProps, "im:id">;
      };
      "im:artist": {
        label: Pick<IndexedProps, "label">;
        attributes: Pick<IndexedProps, "href" | "label">;
      };
      category: {
        attributes: Pick<IndexedProps, "im:id" | "term" | "scheme" | "label">;
      };
      "im:releaseDate": {
        label: Pick<IndexedProps, "label">;
        attributes: Pick<IndexedProps, "label">;
      };
    }[];
  };
}

export interface ItunesPodcastProps {
  title: string;
  image: string;
  author: string;
  id: string;
}
