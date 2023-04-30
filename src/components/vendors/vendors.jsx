import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Vendors() {
  const vendors = [
    {
      id: 1,
      link: "/",
      image: "https://unsplash.it/1080/1920",
    },
    {
      id: 2,
      link: "/",
      image: "https://unsplash.it/1080/1920",
    },
    {
      id: 3,
      link: "/",
      image: "https://unsplash.it/1080/1920",
    },
    {
      id: 4,
      link: "/",
      image: "https://unsplash.it/1080/1920",
    },
    {
      id: 5,
      link: "/",
      image: "https://unsplash.it/1080/1920",
    },
  ];
  const [featured] = useState(vendors);

  return (
    <div className="bg-colors">
      <h1 className="text-white font-bold text-center py-40 px-4 text-5xl">
        FEATURED{" "}
        <span className="text-highlight-colors font-light">VENDORS</span>
      </h1>
      <div
        id="home-carousel"
        className="touch-pan-x overflow-x-scroll snap-mandatory snap-center"
      >
        <div className="flex flex-row w-[2400px] box-border touch-pan-x snap-mandatory snap-x snap-center">
          {featured.map((item) => {
            return (
              <div key={item.id}>
                <Link to={item.link}>
                  <img src={item.image} alt="a thing" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
