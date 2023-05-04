/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageOne from "./images/CP_Image_01.png";
import ImageTwo from "./images/CP_Image_02.png";
import ImageThree from "./images/CP_Image_03.png";
import ImageFour from "./images/CP_Image_04.png";
import ImageFive from "./images/CP_Image_05.png";
import ImageSix from "./images/CP_Image_06.png";
import ImageSeven from "./images/CP_Image_07.png";
import ImageEight from "./images/CP_Image_08.png";

export default function Invest() {
  const images = [
    ImageTwo,
    ImageOne,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven,
    ImageEight,
  ];
  const [image, setImage] = useState(images[0]);

  function nextImage() {
    const currentIndex = images.indexOf(image);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setImage(images[nextIndex]);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [image]);

  return (
    <div className="flex flex-row lg:gap-24 gap-14 text-highlight-colors bg-colors lg:justify-between align-top pt-20 lg:pt-44 lg:flex-nowrap flex-wrap h-full lg:pb-40 pb-0 justify-center">
      <div className="lg:pl-24 px-4 w-full sm:w-3/4">
        <h1 className="text-5xl lg:text-6xl text-white font-bold lg:pb-4 pb-8">
          A tangible <span className="font-thin underline">vision</span> of
          Community Bible Church.
        </h1>
        <p className="text-xl md:text-2xl">
          Champion Plaza is a tangible vision of Community Bible Church to
          change the world in the name of Jesus. Champion Plaza is a project
          with several phases;
        </p>
        <br />
        <p className="text-xl md:text-2xl">
          Phase 1 will include a medical center, counseling center, food court
          and restaurant, thrift store, and office space.
        </p>
        <br />
        <Link
          to="https://portal.cbc.global/default.aspx?page=3522"
          className="text-colors underline text-2xl lg:text-3xl hover:text-[#f0453e] hover:animate-pulse"
        >
          Invest in Champion Plaza
        </Link>
      </div>
      <div
        className="justify-center lg:w-screen hover:cursor-pointer"
        draggable="false"
      >
        <img src={image} alt="Champion Plaza" onClick={nextImage} />
      </div>
    </div>
  );
}
