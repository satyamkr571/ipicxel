import React from "react";
// @ts-ignore
import Gallery from "react-grid-gallery";

import bgimg1 from "../../image/bgimg1.jpg";
import bgimg3 from "../../image/bgimg3.png";
import bgimg4 from "../../image/bgimg4.jpg";
import bgimg5 from "../../image/bgimg5.jpg";

const PHOTOS = [
  {
    src: { bgimg1 },
    thumbnail: { bgimg1 },
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    isSelected: true,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 1",
  },
  {
    src: { bgimg4 },
    thumbnail: { bgimg4 },
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 2",
  },
  {
    src: { bgimg3 },
    thumbnail: { bgimg3 },
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 3",
  },
  {
    src: { bgimg5 },
    thumbnail: { bgimg5 },
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Image 4",
  },
];
export default function Imagepage() {
  return (
    <div style={{ height: "700px", paddingTop: "50px" }}>
      <Gallery images={PHOTOS} />
    </div>
  );
}
