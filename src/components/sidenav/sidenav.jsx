import React from "react";
import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <ul className="hidden sm:flex w-24 p-4 top-24 left-0 flex flex-col gap-20 absolute pt-44 pb-20 text-highlight-colors bg-colors border-0 font-medium">
      <Link
        to="https://www.communitybible.com/"
        className="-rotate-90 hover:text-[#f0453e] hover:animate-pulse"
      >
        @CBC
      </Link>
      <Link
        to="https://communitybiblechurch.vhx.tv/browse"
        className="-rotate-90 hover:text-[#f0453e] hover:animate-pulse"
      >
        Vimeo
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCm2bTbosRvfyDNVb09vMcnA"
        className="-rotate-90 hover:text-[#f0453e] hover:animate-pulse"
      >
        YouTube
      </Link>
      <Link
        to="https://www.facebook.com/cbcsocial/"
        className="-rotate-90 hover:text-[#f0453e] hover:animate-pulse"
      >
        Facebook
      </Link>
      <Link
        to="https://www.instagram.com/cbcsocial"
        className="-rotate-90 hover:text-[#f0453e] hover:animate-pulse"
      >
        Instagram
      </Link>
    </ul>
  );
}
