import React from "react";
import Lightbox from "react-lightbox-component";

const images = [
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    title: "image title",
    description: "image description",
  },
];
export default function ImageLandingPage() {
  return (
    <div className="container">
      <Lightbox images={images} />
    </div>
  );
}
