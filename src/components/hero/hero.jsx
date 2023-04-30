import React from "react";
import hero from "./assets/ChampionPlaza_HeroBanner_2023.png";

export default function Hero() {
  return (
    <div className="h-full flex flex-col bg-colors top-10 w-screen relative sm:pl-24 p-0">
      <img src={hero} alt="main banner" />
    </div>
  );
}
