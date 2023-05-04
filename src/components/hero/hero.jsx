import React from "react";
import hero from "./assets/HeroBanner.png";

// NOTE: You can change the `hero` banner by putting a new image in the  `hero -> assets` folder then change the `from` link to the correct pathway above.

export default function Hero() {
  return (
    <div
      className="h-full flex flex-col bg-colors top-10 w-screen relative sm:pl-24 p-0"
      autoFocus
    >
      <img src={hero} alt="main banner" />
    </div>
  );
}
