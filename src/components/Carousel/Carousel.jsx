import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

export default function Carousel() {
  return (
    <ResponsiveCarousel>
      <div>
        <img src="/favicon.ico" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/logo192.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/logo512.png" />
        <p className="legend">Legend 3</p>
      </div>
    </ResponsiveCarousel>
  );
}
