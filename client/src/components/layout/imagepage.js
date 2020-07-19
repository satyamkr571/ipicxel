import React from "react";
import ImageGallery from "react-image-gallery";

import bgimg1 from "../../image/bgimg1.jpg";
import bgimg3 from "../../image/bgimg3.png";
import bgimg4 from "../../image/bgimg4.jpg";
import bgimg5 from "../../image/bgimg5.jpg";

const photos = [
  {
    src: { bgimg1 },
    thumbnail: { bgimg1 },
    thumbnailWidth: 100,
    thumbnailHeight: 30,

    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 1",
  },
  {
    src: { bgimg4 },
    thumbnail: { bgimg4 },
    thumbnailWidth: 300,
    thumbnailHeight: 40,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 2",
  },
  {
    src: { bgimg3 },
    thumbnail: { bgimg3 },
    thumbnailWidth: 120,
    thumbnailHeight: 40,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 3",
  },
  {
    src: { bgimg5 },
    thumbnail: { bgimg5 },
    thumbnailHeight: 42,
    thumbnailWidth: 120,

    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 4",
  },
];
export default function Imagepage() {
  return <ImageGallery items={photos} />;
}
