import { MediaItem } from "@/types/media";
import chinaGalamsey from "/public/gallery/china-galamsey.webp";
import galamseyGhana from "/public/gallery/galamsey-ghana-illegal-mining.webp";
import galamseysite from "/public/gallery/galamsey-site.jpg";
import galamseyOperations from "/public/gallery/galamsey.jpeg";
import illegalMining from "/public/gallery/illegal-mining.jpg";
import pollutedWater from "/public/gallery/polluted-water.jpg";

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "China Galamsey",
    src: chinaGalamsey,
    type: "image",
    description: "Image depicting Chinese involvement in galamsey activities",
  },

  {
    id: 8,
    title: "Galamsey Impact",
    src: "https://www.youtube.com/embed/plwjOijh89U?si=VsvHn2QnAEfFNO50",
    type: "video",
    description: "The impact of galamsey on local communities",
  },
  {
    id: 2,
    title: "Galamsey Ghana Illegal Mining",
    src: galamseyGhana,
    type: "image",
    description: "Illustration of illegal mining activities in Ghana",
  },
  {
    id: 3,
    title: "Galamsey Site",
    src: galamseysite,
    type: "image",
    description: "A typical galamsey mining site in Ghana",
  },
  {
    id: 4,
    title: "Galamsey Operations",
    src: galamseyOperations,
    type: "image",
    description: "Overview of galamsey operations and their impact",
  },
  {
    id: 5,
    title: "Illegal Mining",
    src: illegalMining,
    type: "image",
    description: "Consequences of illegal mining activities",
  },
  {
    id: 6,
    title: "Polluted Water",
    src: pollutedWater,
    type: "image",
    description: "Water pollution caused by galamsey activities",
  },
  {
    id: 7,
    title: "Illegal Mining Video",
    src: "https://www.youtube.com/embed/s6Xv0MoRxPM?si=FqygfONypJzNjqus",
    type: "video",
    description: "Video showcasing illegal mining activities",
  },
];
