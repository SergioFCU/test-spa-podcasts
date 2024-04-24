import {
  SerializedItunesPodcastsProps,
  ResponseItunesPodcastsProps,
  ResponseItunesDetailPodcastProps
} from "@/common/types";

export const responseItunesPodcastsMock = {
  feed: {
    author: {
      name: {
        label: "iTunes Store"
      },
      uri: {
        label: "http://www.apple.com/itunes/"
      }
    },
    entry: [
      {
        "im:name": {
          label: "The Joe Budden Podcast"
        },
        "im:image": [
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
            attributes: {
              height: "55"
            }
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
            attributes: {
              height: "60"
            }
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
            attributes: {
              height: "170"
            }
          }
        ],
        summary: {
          label:
            "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
        },
        "im:price": {
          label: "Get",
          attributes: {
            amount: "0",
            currency: "USD"
          }
        },
        "im:contentType": {
          attributes: {
            term: "Podcast",
            label: "Podcast"
          }
        },
        rights: {
          label: "© All rights reserved"
        },
        title: {
          label: "The Joe Budden Podcast - The Joe Budden Network"
        },
        link: {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href: "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2"
          }
        },
        id: {
          label:
            "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
          attributes: {
            "im:id": "1535809341"
          }
        },
        "im:artist": {
          label: "The Joe Budden Network",
          attributes: {
            href: "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2"
          }
        },
        category: {
          attributes: {
            "im:id": "1310",
            term: "Music",
            scheme:
              "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            label: "Music"
          }
        },
        "im:releaseDate": {
          label: "2024-04-13T00:00:00-07:00",
          attributes: {
            label: "April 13, 2024"
          }
        }
      },
      {
        "im:name": {
          label: "THE MORNING SHIFT"
        },
        "im:image": [
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/55x55bb.png",
            attributes: {
              height: "55"
            }
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/60x60bb.png",
            attributes: {
              height: "60"
            }
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/170x170bb.png",
            attributes: {
              height: "170"
            }
          }
        ],
        summary: {
          label:
            "Join Brook, Jordan & Matua Marc every week day from 6AM for a yarn all things culture, entertainment, sports, funny and thought provoking.\n\nIf you're keen to sponsor the show or any enquiries email info@themorningshift.com\n\nPowered by YOUKNOW MEDIA"
        },
        "im:price": {
          label: "Get",
          attributes: {
            amount: "0",
            currency: "USD"
          }
        },
        "im:contentType": {
          attributes: {
            term: "Podcast",
            label: "Podcast"
          }
        },
        rights: {
          label: "© Copyright THE MORNING SHIFT"
        },
        title: {
          label: "THE MORNING SHIFT - YOUKNOW MEDIA"
        },
        link: {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href: "https://podcasts.apple.com/us/podcast/the-morning-shift/id1676884110?uo=2"
          }
        },
        id: {
          label:
            "https://podcasts.apple.com/us/podcast/the-morning-shift/id1676884110?uo=2",
          attributes: {
            "im:id": "1676884110"
          }
        },
        "im:artist": {
          label: "YOUKNOW MEDIA"
        },
        category: {
          attributes: {
            "im:id": "1310",
            term: "Music",
            scheme:
              "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            label: "Music"
          }
        },
        "im:releaseDate": {
          label: "2024-04-15T10:00:00-07:00",
          attributes: {
            label: "April 15, 2024"
          }
        }
      },
      {
        "im:name": {
          label: "New Rory & MAL"
        },
        "im:image": [
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/55x55bb.png",
            attributes: {
              height: "55"
            }
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/60x60bb.png",
            attributes: {
              height: "60"
            }
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/170x170bb.png",
            attributes: {
              height: "170"
            }
          }
        ],
        summary: {
          label:
            "New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal\n\nFor advertising opportunities please email PodcastPartnerships@Studio71us.com   \nWe want to make the podcast even better, help us learn how we can: https://bit.ly/2EcYbu4  \nPrivacy Policy: https://www.studio71.com/terms-and-conditions-use/#Privacy%20Policy"
        },
        "im:price": {
          label: "Get",
          attributes: {
            amount: "0",
            currency: "USD"
          }
        },
        "im:contentType": {
          attributes: {
            term: "Podcast",
            label: "Podcast"
          }
        },
        rights: {
          label: "© All Rights Reserved"
        },
        title: {
          label: 'New Rory & MAL - Rory Farrell & Jamil "Mal" Clay & Studio71'
        },
        link: {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href: "https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2"
          }
        },
        id: {
          label:
            "https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=2",
          attributes: {
            "im:id": "1572182022"
          }
        },
        "im:artist": {
          label: 'Rory Farrell & Jamil "Mal" Clay & Studio71'
        },
        category: {
          attributes: {
            "im:id": "1310",
            term: "Music",
            scheme:
              "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            label: "Music"
          }
        },
        "im:releaseDate": {
          label: "2024-04-12T01:00:00-07:00",
          attributes: {
            label: "April 12, 2024"
          }
        }
      }
    ],
    updated: {
      label: "2024-04-15T14:11:29-07:00"
    },
    rights: {
      label: "Copyright 2008 Apple Inc."
    },
    title: {
      label: "iTunes Store: Top Podcasts in Music"
    },
    icon: {
      label: "http://itunes.apple.com/favicon.ico"
    },
    link: [
      {
        attributes: {
          rel: "alternate",
          type: "text/html",
          href: "https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3"
        }
      },
      {
        attributes: {
          rel: "self",
          href: "https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        }
      }
    ],
    id: {
      label:
        "https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    }
  }
} as ResponseItunesPodcastsProps;

export const parsedResponseItunesPodcastsMock = [
  {
    title: "The Joe Budden Podcast",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
    author: "The Joe Budden Network",
    id: "1535809341",
    summary:
      "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
  },
  {
    title: "THE MORNING SHIFT",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/fb/8d/0b/fb8d0b0a-f6e0-038c-08cb-8885d7f7fb1e/mza_14964633475917453431.jpg/170x170bb.png",
    author: "YOUKNOW MEDIA",
    id: "1676884110",
    summary:
      "Join Brook, Jordan & Matua Marc every week day from 6AM for a yarn all things culture, entertainment, sports, funny and thought provoking.\n\nIf you're keen to sponsor the show or any enquiries email info@themorningshift.com\n\nPowered by YOUKNOW MEDIA"
  },
  {
    title: "New Rory & MAL",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/170x170bb.png",
    author: 'Rory Farrell & Jamil "Mal" Clay & Studio71',
    id: "1572182022",
    summary:
      "New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal\n\nFor advertising opportunities please email PodcastPartnerships@Studio71us.com   \nWe want to make the podcast even better, help us learn how we can: https://bit.ly/2EcYbu4  \nPrivacy Policy: https://www.studio71.com/terms-and-conditions-use/#Privacy%20Policy"
  }
] as SerializedItunesPodcastsProps[];

export const responseItunesPodcastDetailsMock = {
  id: "1535809341",
  coverImage:
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
  resultCount: 2,
  results: [
    {
      title: "The Joe Budden Podcast",
      duration: "00:12",
      date: "20/04/2024",
      episodeUrl: "",
      description: "",
      trackId: 1535809341
    },
    {
      title: 'Episode 718 | "The PAWG Whisperer"',
      duration: "211:20",
      date: "04/20/2024",
      episodeUrl:
        "https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_718.mp3?dest-id=2422538",
      description: "description",
      trackId: 1000653044367,
      trackName: "Episode 718 | 'The PAWG Whisperer'"
    }
  ]
} as unknown as ResponseItunesDetailPodcastProps;

export const serializedPodcastDetailsMock = {
  id: "1485250501",
  coverImage:
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8a/c9/23/8ac923d6-32e1-eb00-f331-6fe92226fc58/mza_10801963060470306103.jpg/600x600bb.jpg",
  resultCount: 51,
  results: [
    {
      title: "Da Beatminerz",
      duration: "105:18",
      date: "04/17/2024",
      episodeUrl:
        "https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/86918ee4-4aa4-497b-995a-ae32006cd4b7/8b687515-718a-4bf6-8dca-b1550038e4dc/audio.mp3?utm_source=Podcast&in_playlist=ee132490-ba24-4965-b558-ae32006cd4c0",
      description:
        "QLS gets in the weeds with Mr. Walt and Evil Dee of Da Beatminerz. This free-flowing discussion traces the origins of a very gritty sound and frequency of 1990s Rap production. The two brothers are not above clowning one another as they recall working on Black Moon's classic debut Enta Da Stage, going crate-digging with Q-Tip, and helping to make D&D Studios a true enclave of hardcore Hip Hop. True to Da Beatminerz' name and sound, this episode digs deep.\nSee omnystudio.com/listener for privacy information.",
      trackId: 1000652693448
    }
  ],
  title: "Questlove Supreme",
  image:
    "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8a/c9/23/8ac923d6-32e1-eb00-f331-6fe92226fc58/mza_10801963060470306103.jpg/170x170bb.png",
  author: "iHeartPodcasts",
  summary:
    "Questlove Supreme is a fun, irreverent and educational weekly podcast that digs deep into the stories of musical legends and cultural icons in a way that only Questlove and Team Supreme can deliver. Led by Each episode is driven by conversation ranging from the guest’s origins (along with a few never-before-revealed secrets to their success) to their life passions and current projects. This is not your typical interview show. This is about legends and legends in the making bringing their legacy to life in their own words. Previous guests have included Usher, Michelle Obama, Chris Rock, Steve Miller, Maya Rudolph, Weird Al, Chaka Khan, Babyface and many more."
};
